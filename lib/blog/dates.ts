// BlogPost.publishedDate is a human-formatted string (e.g. "May 15, 2026"),
// not ISO — Graph has no orderBy for it, so sorting happens here.
export function parsePublishedDate(value: string | null | undefined): Date {
  if (!value) return new Date(0)
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed
}

export function formatPublishedDate(value: string | null | undefined): string {
  const date = parsePublishedDate(value)
  if (date.getTime() === 0) return value ?? ''
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function sortByPublishedDateDesc<T extends { publishedDate?: string | null }>(
  posts: T[]
): T[] {
  return [...posts].sort(
    (a, b) =>
      parsePublishedDate(b.publishedDate).getTime() -
      parsePublishedDate(a.publishedDate).getTime()
  )
}
