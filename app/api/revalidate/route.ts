import { createHash, timingSafeEqual } from 'crypto'
import { z } from 'zod'
import { optimizely } from '@/lib/optimizely/fetch'
import { extractSlugFromContentUrl } from '@/lib/blog/slug'
import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

const OPTIMIZELY_REVALIDATE_SECRET = process.env.OPTIMIZELY_REVALIDATE_SECRET

// Profile/Story/Availability/Contact are content-area blocks embedded
// in the /about CMSPage, not pages themselves — their own
// _metadata.url is null (verified directly against the CMS), so a
// publish event for one of them can't be routed through the generic
// url-based revalidation below at all. They're only ever used on
// /about (Phase 1 removed every other block type), so that coupling is
// safe to hardcode here.
const ABOUT_PAGE_BLOCK_TYPES = new Set([
  'ProfileBlock',
  'StoryBlock',
  'AvailabilityBlock',
  'ContactBlock',
])

const WebhookBodySchema = z
  .object({
    data: z
      .object({
        docId: z.string().optional(),
      })
      .optional(),
  })
  .passthrough()

export async function POST(request: NextRequest) {
  try {
    validateWebhookSecret(request)
    const docId = await extractDocId(request)

    if (!docId || !docId.includes('Published')) {
      return NextResponse.json({ message: 'No action taken' })
    }

    const [guid, locale] = docId.split('_')
    const formattedGuid = guid.replaceAll('-', '')

    const content = await fetchContentByGuid(formattedGuid)

    if (
      content?.__typename &&
      ABOUT_PAGE_BLOCK_TYPES.has(content.__typename)
    ) {
      await handleAboutPageRevalidation(locale)
      return NextResponse.json({ revalidated: true, now: Date.now() })
    }

    const urlType = content?._metadata?.url?.type
    // In hierarchical routing, the Start Page in Optimizely does not use "/" as its URL.
    // Instead, it has a custom path like "/start-page". We remove the OPTIMIZELY_START_PAGE_URL
    // prefix to normalize the URL and make it relative to the site root.
    const url =
      urlType === 'SIMPLE'
        ? content?._metadata?.url?.default
        : content?._metadata?.url?.hierarchical?.replace(
            process.env.OPTIMIZELY_START_PAGE_URL ?? '',
            ''
          )

    if (!url) {
      return NextResponse.json({ message: 'Page Not Found' }, { status: 400 })
    }

    if (content?.__typename === 'BlogPost') {
      await handleBlogPostRevalidation(content._metadata?.url?.default, locale)
      return NextResponse.json({ revalidated: true, now: Date.now() })
    }

    const urlWithLocale = normalizeUrl(url, locale)

    await handleRevalidation(urlWithLocale)

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    return handleError(error)
  }
}

function validateWebhookSecret(request: NextRequest) {
  const provided = request.nextUrl.searchParams.get('cg_webhook_secret')
  if (!provided || !OPTIMIZELY_REVALIDATE_SECRET || !secretsMatch(provided, OPTIMIZELY_REVALIDATE_SECRET)) {
    throw new Error('Invalid credentials')
  }
}

// Hash both sides to a fixed length before comparing: timingSafeEqual
// requires equal-length buffers (it throws otherwise, which would leak
// the expected secret's length through the exception path), and
// hashing removes any length-based side channel from the raw secrets.
function secretsMatch(provided: string, expected: string): boolean {
  const providedHash = createHash('sha256').update(provided).digest()
  const expectedHash = createHash('sha256').update(expected).digest()
  return timingSafeEqual(providedHash, expectedHash)
}

async function extractDocId(request: NextRequest): Promise<string> {
  const json = await request.json().catch(() => null)
  const parsed = WebhookBodySchema.safeParse(json)
  if (!parsed.success) {
    throw new Error('Invalid webhook payload')
  }
  return parsed.data.data?.docId || ''
}

async function fetchContentByGuid(guid: string) {
  const { data, errors } = await optimizely.GetContentByGuid({ guid })
  if (errors) {
    console.error(errors)
    throw new Error('Error fetching content')
  }
  return data?._Content?.item
}

function normalizeUrl(url: string, locale: string): string {
  // Ensure the URL starts with a slash
  let normalizedUrl = url.startsWith('/') ? url : `/${url}`

  // Remove the trailing slash, if present (e.g. "/about/" -> "/about")
  if (normalizedUrl.endsWith('/')) {
    normalizedUrl = normalizedUrl.slice(0, -1)
  }

  // If the URL doesn't already start with the locale (e.g. "/en"), prepend it
  return normalizedUrl.startsWith(`/${locale}`)
    ? normalizedUrl
    : `/${locale}${normalizedUrl}`
}

async function handleAboutPageRevalidation(locale: string) {
  const path = `/${locale}/about`
  console.log(`Revalidating path: ${path}`)
  await revalidatePath(path)
  console.log(`Revalidating tag: optimizely-about`)
  await revalidateTag('optimizely-about')
}

async function handleRevalidation(urlWithLocale: string) {
  if (urlWithLocale.includes('footer')) {
    console.log(`Revalidating tag: optimizely-footer`)
    await revalidateTag('optimizely-footer')
  } else if (urlWithLocale.includes('header')) {
    console.log(`Revalidating tag: optimizely-header`)
    await revalidateTag('optimizely-header')
  } else {
    console.log(`Revalidating path: ${urlWithLocale}`)
    await revalidatePath(urlWithLocale)
  }
}

// BlogPost URLs are flat in the CMS ("/{locale}/{slug}/") but the
// frontend route is "/blog/{slug}" (see docs/blog-body-structure.md),
// so this needs its own path construction instead of normalizeUrl.
async function handleBlogPostRevalidation(
  defaultUrl: string | null | undefined,
  locale: string
) {
  const slug = extractSlugFromContentUrl(defaultUrl)
  if (slug) {
    const path = `/${locale}/blog/${slug}`
    console.log(`Revalidating path: ${path}`)
    await revalidatePath(path)
  }
  console.log(`Revalidating tag: optimizely-blog`)
  await revalidateTag('optimizely-blog')
}

function handleError(error: unknown) {
  console.error('Error processing webhook:', error)
  if (error instanceof Error && error.message === 'Invalid credentials') {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
  }
  if (error instanceof Error && error.message === 'Invalid webhook payload') {
    return NextResponse.json({ message: 'Bad Request' }, { status: 400 })
  }
  return NextResponse.json(
    { message: 'Internal Server Error' },
    { status: 500 }
  )
}
