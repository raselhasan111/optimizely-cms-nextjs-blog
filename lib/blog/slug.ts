// BlogPost items live flat under the locale root in the CMS
// (_metadata.url.default is "/{locale}/{slug}/", not "/{locale}/blog/{slug}/").
// The frontend route is "/blog/{slug}" by choice (see docs/blog-body-structure.md);
// these helpers translate between the two.

export function buildBlogPostGraphUrl(locale: string, slug: string): string {
  return `/${locale}/${slug}/`
}

export function extractSlugFromContentUrl(
  url: string | null | undefined
): string | null {
  if (!url) return null
  const parts = url.split('/').filter(Boolean)
  return parts[parts.length - 1] ?? null
}
