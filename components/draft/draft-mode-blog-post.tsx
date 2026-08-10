import { notFound } from 'next/navigation'
import { optimizely } from '@/lib/optimizely/fetch'
import { Locales } from '@/lib/optimizely/types/generated'
import { PostMeta } from '@/components/blog/post-meta'
import { PostBody } from '@/components/blog/post-body'

export default async function DraftModeBlogPost({
  locales,
  slug,
  routeSlug,
}: {
  locales: Locales
  slug: string
  routeSlug: string
}) {
  const { data } = await optimizely.GetAllBlogPostVersionsByURL(
    { locales: [locales], slug },
    { preview: true }
  )
  const items = data?.BlogPost?.items

  if (!items?.length) {
    return notFound()
  }

  const maxVersion = Math.max(
    ...items.map((item) => parseInt(item?._metadata?.version || '0', 10))
  )
  const post = items.find(
    (item) => parseInt(item?._metadata?.version || '0', 10) === maxVersion
  )

  if (!post) {
    return notFound()
  }

  return (
    <article className="mx-auto max-w-2xl py-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      {post.subheading && (
        <p className="mt-2 text-lg text-muted-foreground">
          {post.subheading}
        </p>
      )}
      <div className="mt-4">
        <PostMeta
          author={post.author}
          publishedDate={post.publishedDate}
          slug={routeSlug}
        />
      </div>
      <PostBody json={post.body?.json} />
    </article>
  )
}
