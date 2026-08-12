import Link from 'next/link'
import { Pin } from 'lucide-react'
import { formatPublishedDate } from '@/lib/blog/dates'

export function PinnedPostCard({
  slug,
  title,
  subheading,
  publishedDate,
}: {
  slug: string
  title?: string | null
  subheading?: string | null
  publishedDate?: string | null
}) {
  return (
    <article className="mb-10 border-b pb-10">
      <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
        <Pin className="h-3.5 w-3.5" />
        Pinned
      </div>
      <Link href={`/blog/${slug}`} className="group">
        <h2 className="mt-2 text-3xl font-bold group-hover:underline">
          {title}
        </h2>
      </Link>
      {subheading && (
        <p className="mt-3 text-lg text-muted-foreground">{subheading}</p>
      )}
      {publishedDate && (
        <time className="mt-3 block text-sm text-muted-foreground">
          {formatPublishedDate(publishedDate)}
        </time>
      )}
    </article>
  )
}
