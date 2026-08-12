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
  isPinned: boolean
}

export async function getAllPublishedPosts(
  locales?: Locales
): Promise<BlogPostSummary[]> {
  const { data } = await optimizely.getAllBlogPosts(
    {
      locales: locales ? [locales] : null,
      // A real number, not null: the BlogPost field's `limit` argument is
      // a non-null Int with a server-side default (20) — passing an
      // explicit `null` throws a GraphQL argument-type error, which was
      // silently swallowed as "0 posts" because this call never checked
      // `errors`. 100 comfortably covers this blog for a long while.
      limit: 100,
    },
    { cacheTag: 'optimizely-blog' }
  )

  if (!data?.BlogPost) {
    return []
  }

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
        isPinned: item.isPinned ?? false,
      }
    })
    .filter((post): post is BlogPostSummary => post !== null)

  return sortByPublishedDateDesc(posts)
}

// If more than one post is pinned, the newest wins (by publishedDate,
// same ordering as the rest of the list) rather than erroring — the
// CMS doesn't enforce "only one" for a boolean field. The winner is
// excluded from `rest` so it never appears twice on the homepage.
export function splitPinned(posts: BlogPostSummary[]): {
  pinned: BlogPostSummary | null
  rest: BlogPostSummary[]
} {
  const pinned = posts.find((post) => post.isPinned) ?? null
  if (!pinned) {
    return { pinned: null, rest: posts }
  }

  return {
    pinned,
    rest: posts.filter((post) => post.slug !== pinned.slug),
  }
}
