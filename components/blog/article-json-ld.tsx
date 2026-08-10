import { parsePublishedDate } from '@/lib/blog/dates'
import { getSiteUrl } from '@/lib/blog/site'

// No nonce needed here: CSP's script-src only governs elements the
// browser would execute as script. type="application/ld+json" is inert
// structured data, not executable script, so it's exempt in all major
// browsers — adding a nonce would force this (otherwise staticly
// generated) route into per-request dynamic rendering for no benefit.
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
