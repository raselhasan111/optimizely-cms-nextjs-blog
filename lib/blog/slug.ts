// BlogPost content can live at different depths in the CMS tree
// depending on site structure (e.g. flat "/{locale}/{slug}/" vs nested
// "/{locale}/s/{slug}/" under a start-page section — this has actually
// changed once already for this site, see docs/blog-body-structure.md).
// The frontend route is "/blog/{slug}" regardless. Rather than assume a
// fixed path depth, match posts by URL *suffix* (endsWith) so routing
// keeps working if the CMS's content-tree structure shifts again.

export function buildBlogPostUrlSuffix(slug: string): string {
  return `/${slug}/`
}

export function extractSlugFromContentUrl(
  url: string | null | undefined
): string | null {
  if (!url) return null
  const parts = url.split('/').filter(Boolean)
  return parts[parts.length - 1] ?? null
}
