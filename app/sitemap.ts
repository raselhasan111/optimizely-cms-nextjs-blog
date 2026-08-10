import { MetadataRoute } from 'next'
import { getAllPublishedPosts } from '@/lib/blog/posts'
import { getSiteUrl } from '@/lib/blog/site'
import { parsePublishedDate } from '@/lib/blog/dates'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl()
  const posts = await getAllPublishedPosts()

  return [
    {
      url: `${siteUrl}/en`,
      changeFrequency: 'daily',
      priority: 1,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/en/blog/${post.slug}`,
      lastModified: post.publishedDate
        ? parsePublishedDate(post.publishedDate)
        : undefined,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
