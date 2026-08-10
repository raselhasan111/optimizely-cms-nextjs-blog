import { parsePublishedDate } from '@/lib/blog/dates'
import { getSiteUrl } from '@/lib/blog/site'

export function ArticleJsonLd({
  title,
  author,
  publishedDate,
  slug,
}: {
  title: string
  author?: string | null
  publishedDate?: string | null
  slug: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: author ? { '@type': 'Person', name: author } : undefined,
    datePublished: publishedDate
      ? parsePublishedDate(publishedDate).toISOString()
      : undefined,
    url: `${getSiteUrl()}/en/blog/${slug}`,
  }

  // Escape `<` so a malicious/CMS-derived string can't close the script
  // tag early (e.g. a title containing "</script><script>...").
  const json = JSON.stringify(jsonLd).replace(/</g, '\\u003c')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
