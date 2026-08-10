import { formatPublishedDate, parsePublishedDate } from '@/lib/blog/dates'
import { getMediumUrl } from '@/lib/blog/medium-links'

export function PostMeta({
  author,
  publishedDate,
  slug,
}: {
  author?: string | null
  publishedDate?: string | null
  slug: string
}) {
  const mediumUrl = getMediumUrl(slug)

  return (
    <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
      {author && <span>{author}</span>}
      {author && publishedDate && <span aria-hidden>·</span>}
      {publishedDate && (
        <time dateTime={parsePublishedDate(publishedDate).toISOString()}>
          {formatPublishedDate(publishedDate)}
        </time>
      )}
      {mediumUrl && (
        <>
          <span aria-hidden>·</span>
          <a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Originally published on Medium
          </a>
        </>
      )}
    </div>
  )
}
