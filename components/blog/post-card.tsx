import Link from 'next/link'
import { formatPublishedDate } from '@/lib/blog/dates'

export function PostCard({
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
    <article className="border-b py-8 first:pt-0">
      <Link href={`/blog/${slug}`} className="group">
        <h2 className="text-2xl font-bold group-hover:underline">{title}</h2>
      </Link>
      {subheading && (
        <p className="mt-2 text-muted-foreground">{subheading}</p>
      )}
      {publishedDate && (
        <time className="mt-3 block text-sm text-muted-foreground">
          {formatPublishedDate(publishedDate)}
        </time>
      )}
    </article>
  )
}
