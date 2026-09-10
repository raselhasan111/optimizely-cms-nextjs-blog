import { PostCard } from '@/components/blog/post-card'
import { PinnedPostCard } from '@/components/blog/pinned-post-card'
import VisualBuilderExperienceWrapper from '@/components/visual-builder/wrapper'
import { getAllPublishedPosts, splitPinned } from '@/lib/blog/posts'
import { optimizely } from '@/lib/optimizely/fetch'
import { SafeVisualBuilderExperience } from '@/lib/optimizely/types/experience'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { generateAlternates } from '@/lib/utils/metadata'
import { Metadata } from 'next'
import { Suspense } from 'react'

// The homepage renders the "Home" SEOExperience composed in Visual Builder,
// filtered by the experience's Graph `url.default` (verified after publish).
// Note this is NOT "/": the Home experience lives under the published Start
// Page (route segment `home`), while true root "/" is a separate StartPage
// (base type `_page`) that a `_Experience` query cannot match. If the homepage
// is later repointed to true root (a Settings -> Applications change in the
// CMS), update this value. The route falls back to the blog index whenever
// nothing matches, so a mismatch degrades gracefully instead of breaking.
const HOMEPAGE_EXPERIENCE_SLUG = '/en/s/home/'

async function getHomepageExperience(
  locale: string
): Promise<SafeVisualBuilderExperience | undefined> {
  const locales = getValidLocale(locale)
  const { data, errors } = await optimizely.GetVisualBuilderBySlug({
    locales: [locales],
    slug: HOMEPAGE_EXPERIENCE_SLUG,
  })

  // A Graph error is not the same as "no experience": don't let a transient
  // failure look like intentional absence. Log it and fall back to the blog
  // index (which is also what renders before any experience is published).
  if (errors) {
    console.error('Homepage experience fetch failed:', errors)
    return undefined
  }

  return (data?.SEOExperience?.item as SafeVisualBuilderExperience) ?? undefined
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await props.params

  const experience = await getHomepageExperience(locale)
  if (experience?.composition?.nodes?.length) {
    return {
      title: experience.title || 'Rasel Hasan',
      description: experience.shortDescription || '',
      keywords: experience.keywords ?? '',
      alternates: generateAlternates(locale, '/'),
    }
  }

  // Fallback metadata for the code-driven blog index.
  return {
    title: 'Rasel Hasan',
    description: 'Writing on frontend engineering, security, and agentic AI.',
    alternates: generateAlternates(locale, '/'),
  }
}

export default async function HomePage(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const locales = getValidLocale(locale)

  // 1. Editable homepage: render the Start Page Experience if an editor has
  //    composed and published one in Visual Builder.
  const experience = await getHomepageExperience(locale)
  if (experience?.composition?.nodes?.length) {
    // Center the composed experience in the same max-w-2xl column the blog
    // index uses, so the homepage keeps its original width and alignment
    // (header and post list share one narrow centered column).
    return (
      <div className="mx-auto max-w-2xl py-10">
        <Suspense>
          <VisualBuilderExperienceWrapper experience={experience} />
        </Suspense>
      </div>
    )
  }

  // 2. Fallback: the code-driven blog index (previous behavior), shown until
  //    a homepage Experience exists so the live site never goes blank.
  const posts = await getAllPublishedPosts(locales)
  const { pinned, rest } = splitPinned(posts)

  return (
    <div className="mx-auto max-w-2xl py-10">
      <header className="mb-12">
        <h1 className="text-3xl font-bold">Rasel Hasan</h1>
        <p className="mt-2 text-muted-foreground">
          Writing on frontend engineering, security, and agentic AI.
        </p>
      </header>

      {pinned && (
        <PinnedPostCard
          slug={pinned.slug}
          title={pinned.title}
          subheading={pinned.subheading}
          publishedDate={pinned.publishedDate}
        />
      )}

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts published yet.</p>
      ) : (
        <div>
          {rest.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              subheading={post.subheading}
              publishedDate={post.publishedDate}
            />
          ))}
        </div>
      )}
    </div>
  )
}
