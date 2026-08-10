import { PostCard } from '@/components/blog/post-card'
import { optimizely } from '@/lib/optimizely/fetch'
import { sortByPublishedDateDesc } from '@/lib/blog/dates'
import { extractSlugFromContentUrl } from '@/lib/blog/slug'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { generateAlternates } from '@/lib/utils/metadata'
import { Metadata } from 'next'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await props.params

  return {
    title: 'Rasel Hasan',
    description: 'Writing on frontend engineering, security, and AI-assisted development.',
    alternates: generateAlternates(locale, '/'),
  }
}

export default async function HomePage(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const locales = getValidLocale(locale)

  const { data } = await optimizely.getAllBlogPosts(
    { locales: [locales], limit: null, skip: null },
    { cacheTag: 'optimizely-blog' }
  )

  const posts = sortByPublishedDateDesc(
    (data?.BlogPost?.items ?? []).filter(
      (item): item is NonNullable<typeof item> => item !== null
    )
  )

  return (
    <div className="mx-auto max-w-2xl py-10">
      <header className="mb-12">
        <h1 className="text-3xl font-bold">Rasel Hasan</h1>
        <p className="mt-2 text-muted-foreground">
          Writing on frontend engineering, security, and AI-assisted
          development.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts published yet.</p>
      ) : (
        <div>
          {posts.map((post) => {
            const slug = extractSlugFromContentUrl(post._metadata?.url?.default)
            if (!slug) return null

            return (
              <PostCard
                key={slug}
                slug={slug}
                title={post.title}
                subheading={post.subheading}
                publishedDate={post.publishedDate}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
