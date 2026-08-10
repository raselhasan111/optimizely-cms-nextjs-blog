import { optimizely } from '@/lib/optimizely/fetch'
import { Locales } from '@/lib/optimizely/types/generated'
import { sortByPublishedDateDesc } from './dates'
import { extractSlugFromContentUrl } from './slug'

export interface BlogPostSummary {
  slug: string
  title: string
  subheading: string | null
  author: string | null
  publishedDate: string | null
}

export async function getAllPublishedPosts(
  locales?: Locales
): Promise<BlogPostSummary[]> {
  const { data } = await optimizely.getAllBlogPosts(
    {
      locales: locales ? [locales] : null,
      limit: null,
      skip: null,
    },
    { cacheTag: 'optimizely-blog' }
  )

  const items = (data?.BlogPost?.items ?? []).filter(
    (item): item is NonNullable<typeof item> => item !== null
  )

  const posts = items
    .map((item) => {
      const slug = extractSlugFromContentUrl(item._metadata?.url?.default)
      if (!slug || !item.title) return null
      return {
        slug,
        title: item.title,
        subheading: item.subheading,
        author: item.author,
        publishedDate: item.publishedDate,
      }
    })
    .filter((post): post is BlogPostSummary => post !== null)

  return sortByPublishedDateDesc(posts)
}
