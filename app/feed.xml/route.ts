import { getAllPublishedPosts } from '@/lib/blog/posts'
import { getSiteUrl } from '@/lib/blog/site'
import { parsePublishedDate } from '@/lib/blog/dates'
import { escapeXml } from '@/lib/blog/xml'

export async function GET() {
  const siteUrl = getSiteUrl()
  const posts = await getAllPublishedPosts()

  const items = posts
    .map((post) => {
      const link = `${siteUrl}/en/blog/${post.slug}`
      const pubDate = parsePublishedDate(post.publishedDate).toUTCString()

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${pubDate}</pubDate>
      ${post.author ? `<author>${escapeXml(post.author)}</author>` : ''}
      ${post.subheading ? `<description>${escapeXml(post.subheading)}</description>` : ''}
    </item>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Rasel Hasan</title>
    <link>${escapeXml(siteUrl)}/en</link>
    <description>Writing on frontend engineering, security, and AI-assisted development.</description>
    <language>en</language>${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      // Without an explicit charset, some clients guess non-UTF-8 and
      // mangle multi-byte characters (curly quotes, em dashes) from
      // CMS content into mojibake.
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
