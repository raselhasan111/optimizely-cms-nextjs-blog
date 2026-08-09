In this section, we'll explore how to implement cache revalidation in Next.js using webhooks from Optimizely SaaS CMS. This approach allows us to maintain the benefits of static generation while ensuring our content stays up-to-date.

## Understanding Revalidation Strategies

Next.js offers two primary strategies for updating static content: Incremental Static Regeneration (ISR) and On-Demand Revalidation.

### Incremental Static Regeneration (ISR)

ISR has been a feature of Next.js since version 9.5. It allows you to:

- Generate static pages at build time
- Automatically update pages at specified time intervals
- Serve stale content while regenerating in the background

ISR is implemented by setting a `revalidate` time using the `revalidate` segment config option in the App Router.

```typescript
// app/products/[slug]/page.tsx

export const revalidate = 60 // Revalidate at most once per minute

export async function generateStaticParams() {
  // Return an array of slugs to pre-render at build time
  const products = await fetchProductsFromOptimizely()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  // This data will be cached and revalidated according to the revalidate value
  const product = await fetchProductFromOptimizely(params.slug)

  return (
    <div>
      <h1>{product.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
      <p>${product.price}</p>
    </div>
  )
}
```

### On-Demand Revalidation

On-Demand Revalidation, introduced in Next.js 12.1, builds upon ISR by allowing you to:

- Generate static pages at build time
- Update specific pages or data when content changes
- Trigger updates programmatically, rather than on a fixed schedule
- Maintain the performance benefits of static generation

## Key Differences

- **Timing**: ISR updates on a fixed schedule, while On-Demand Revalidation updates when triggered.
- **Control**: On-Demand Revalidation offers more precise control over when updates occur.
- **Freshness**: On-Demand Revalidation can provide more up-to-date content by updating immediately when changes occur.

By leveraging Optimizely's webhooks with Next.js On-Demand Revalidation, we can create a system that combines the speed of static generation with the freshness of dynamic content updates.

## Implementing Revalidation with Webhooks

To implement On-Demand Revalidation, we'll use webhooks from Optimizely SaaS CMS to trigger the revalidation process when content is updated.

### Step 1: Create a Revalidation API Route

First, let's create an API route to handle the revalidation logic. Create a new file at `app/api/revalidate/route.ts`:

```typescript
// app/api/revalidate/route.ts
import { optimizely } from '@/lib/optimizely/fetch'
import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

const OPTIMIZELY_REVALIDATE_SECRET = process.env.OPTIMIZELY_REVALIDATE_SECRET

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

    const urlWithLocale = normalizeUrl(url, locale)

    await handleRevalidation(urlWithLocale)

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    return handleError(error)
  }
}

function validateWebhookSecret(request: NextRequest) {
  const webhookSecret = request.nextUrl.searchParams.get('cg_webhook_secret')
  if (webhookSecret !== OPTIMIZELY_REVALIDATE_SECRET) {
    throw new Error('Invalid credentials')
  }
}

async function extractDocId(request: NextRequest): Promise<string> {
  const requestJson = await request.json()
  return requestJson?.data?.docId || ''
}

async function fetchContentByGuid(guid: string) {
  const { data, errors } = await optimizely.GetContentByGuid({ guid })
  if (errors) {
    console.error(errors)
    throw new Error('Error fetching content')
  }
  return data?._Content?.items?.[0]
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

function handleError(error: unknown) {
  console.error('Error processing webhook:', error)
  if (error instanceof Error) {
    if (error.message === 'Invalid credentials') {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
  return NextResponse.json(
    { message: 'Internal Server Error' },
    { status: 500 }
  )
}
```

This API route handles Optimizely CMS webhooks and triggers revalidation for updated content.

#### Key steps:

1. Verifies the webhook secret for security
2. Extracts the document ID and locale from the webhook payload
3. Fetches the content details (url) from Optimizely using the content GUID/key
4. Normalizes the URL (removing Start Page prefix and trailing slash, and adding locale prefix)
5. Revalidates the specific path using `revalidatePath` or `revalidateTag`

#### ⚠️ Important Notes for revalidation by path:

- The URL used in `revalidatePath` **must exactly match** the one used in Next.js routing.
- This means the URL **should not include the Start Page path prefix**, which is removed using `OPTIMIZELY_START_PAGE_URL`.
- The URL **must not end with a trailing slash** (`/`), otherwise `revalidatePath` will not work as expected.
- Always ensure the normalized path mirrors the format used in `app/` route segments in Next.js.

### Step 2: Configure the Webhook in Optimizely

[Documentation](https://docs.developers.optimizely.com/platform-optimizely/v1.4.0-optimizely-graph/docs/manage-webhooks)

To set up the webhook in Optimizely SaaS CMS:

1. Go to the [Optimizely Webhook Configuration page](https://docs.developers.optimizely.com/platform-optimizely/v1.4.0-optimizely-graph/reference/create-webhookhandler)
2. Choose Header HMAC authentication (epi-hmac xxx)
3. Set the webhook URL to your API route (e.g., `https://your-site.com/api/revalidate?cg_webhook_secret=your_secret_here`)
4. Configure the webhook to trigger on content publish events

#### Example requestJson:

```typescript
{
  timestamp: "2025-02-18T15:58:20.4539061+00:00",
  tenantId: "5259582de25345ea9c125fae167c0430",
  type: {
    subject: "doc",
    action: "updated",
  },
  data: {
    docId: "b2545ba0-0b68-40f7-85df-3bbcb12a284b_en_Published",
  },
}
```

## GraphQL Query for Content Retrieval

To fetch content by GUID, you'll need to use a GraphQL query like this:

```graphql
query GetContentByGuid($guid: String) {
  _Content(where: { _metadata: { key: { eq: $guid } } }) {
    items {
      _metadata {
        displayName
        version
        key
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
    }
  }
}
```

Make sure to add this query to your Optimizely GraphQL setup and run command `gen-types`.

## Revalidating by Tag

Next.js also supports revalidation by tag, which can be more efficient for larger projects. Under the hood, `revalidatePath` actually uses the same method as `revalidateTag`, so it's worth considering using tags directly as your project grows.

Useful links for better understanding:

- [Exports from next/cache](https://github.com/vercel/next.js/blob/v15.2.0/packages/next/cache.js)
- [Revalidate logic](https://github.com/vercel/next.js/blob/v15.2.0/packages/next/src/server/web/spec-extension/revalidate.ts)

### Using Tags for Revalidation

To use tags for revalidation:

1. Add tags when fetching data
2. Revalidate using these tags when content changes

Here's how you can implement this:

1. Add tags when fetching data

```typescript
const { data } = await optimizely.getFooter(
  { locales: locales },
  { cacheTag: 'optimizely-footer' }
)
```

```typescript
const { data } = await optimizely.getHeader(
  { locale: locales },
  { cacheTag: 'optimizely-header' }
)
```

2. Update our global `optimizelyFetch` method used in SDK

```typescript
const optimizelyFetch = async <Response, Variables = object>({
  query,
  variables,
  headers,
  cache = 'force-cache',
  preview,
  cacheTag,
}: OptimizelyFetch<Variables>): Promise<
  GraphqlResponse<Response> & { headers: Headers }
> => {
  const configHeaders = headers ?? {}

  if (preview) {
    configHeaders.Authorization = `Basic ${process.env.OPTIMIZELY_PREVIEW_SECRET}`
    cache = 'no-store'
  }
  const cacheTags = ['optimizely-content']
  if (cacheTag) {
    cacheTags.push(cacheTag)
  }

  try {
    const endpoint = `${process.env.OPTIMIZELY_API_URL}?auth=${process.env.OPTIMIZELY_SINGLE_KEY}`
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...configHeaders,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      next: { tags: cacheTags },
    })

    const result = await response.json()

    return {
      ...result,
      headers: response.headers,
    }
  } catch (e) {
    if (isVercelError(e)) {
      throw {
        status: e.status || 500,
        message: e.message,
        query,
      }
    }

    throw {
      error: e,
      query,
    }
  }
}
```

3. Update your revalidation API to use tags:

```typescript
// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // ... existing validation logic ...
}

async function handleRevalidation(urlWithLocale: string) {
  console.log(`Revalidating path: ${urlWithLocale}`)
  if (urlWithLocale.includes('footer')) {
    await revalidateTag('optimizely-footer')
  } else if (urlWithLocale.includes('header')) {
    await revalidateTag('optimizely-header')
  } else {
    await revalidatePath(urlWithLocale)
  }
}
```

### Benefits of Using Tags

1. **Granular Control**: You can revalidate specific parts of your application without affecting others.
2. **Efficiency**: For large applications, revalidating by tag can be more efficient than revalidating entire paths.
3. **Flexibility**: Tags allow you to group related content that might span multiple pages or components.

### When to Use Tags vs. Paths

- Use `revalidatePath` for simpler applications or when you want to revalidate entire pages.
- Use `revalidateTag` when you have shared components (like headers or footers) that appear across multiple pages, or when you want more fine-grained control over what gets revalidated.

Remember, as your project grows, using tags for revalidation can help maintain performance and provide more precise control over your caching strategy.

## Shared Blocks

We may have a shared block that is used on dozens of pages, a change in this block should cause revalidation of each page.

### How to deal with this in revalidation?

It turns out to be very simple, because all the work for us is done by Optimizely, which sends a webhook event for each page where the shared block occurs, so in the above code the revalidation of shared blocks is already handled.

## Testing Locally

To test webhook communication locally:

1. Use a tool like ngrok to create a secure tunnel to your localhost
2. Start your Next.js development server (`npm run dev`)
3. Attach Debbuger
4. Use the ngrok URL in your Optimizely webhook configuration
5. Make changes in Optimizely and publish to trigger the webhook

## Conclusion

By implementing On-Demand Revalidation with webhooks, you can create a highly performant website that serves static content while still keeping it up-to-date with the latest changes from your CMS. This approach allows you to:

- Serve static pages for optimal performance
- Update specific pages when content changes
- Maintain a seamless editing experience in Optimizely SaaS CMS

Remember to secure your webhook endpoint and handle potential errors gracefully to ensure a robust revalidation process.
