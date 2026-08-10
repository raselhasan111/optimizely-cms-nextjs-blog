import ContentAreaMapper from '@/components/content-area/mapper'
import OnPageEdit from '@/components/draft/on-page-edit'
import { PostMeta } from '@/components/blog/post-meta'
import { PostBody } from '@/components/blog/post-body'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { buildBlogPostUrlSuffix } from '@/lib/blog/slug'
import { checkDraftMode } from '@/lib/utils/draft-mode'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function CmsPage(props: {
  params: Promise<{ locale: string; version: string; slug?: string }>
}) {
  const isDraftModeEnabled = await checkDraftMode()
  if (!isDraftModeEnabled) {
    return notFound()
  }

  const { locale, slug = '', version } = await props.params
  const locales = getValidLocale(locale)
  const formattedSlug = `/${slug}`

  const pageResponse = await optimizely.getPreviewPageByURL(
    { locales, slug: formattedSlug, version },
    { preview: true }
  )
  const page = pageResponse.data?.CMSPage?.item
  const pageFound = (pageResponse.data?.CMSPage?.total ?? 0) > 0

  if (pageFound && page) {
    const blocks = (page?.blocks ?? []).filter(
      (block) => block !== null && block !== undefined
    )

    return (
      <div className="container py-10" data-epi-edit="blocks">
        <OnPageEdit
          version={version}
          currentRoute={`/${locale}/draft/${version}/${slug}`}
        />
        <Suspense>
          <ContentAreaMapper blocks={blocks} preview />
        </Suspense>
      </div>
    )
  }

  const postResponse = await optimizely.getPreviewBlogPostByURL(
    { locales, urlSuffix: buildBlogPostUrlSuffix(slug), version },
    { preview: true }
  )
  const post = postResponse.data?.BlogPost?.item
  const postFound = (postResponse.data?.BlogPost?.total ?? 0) > 0

  if (!postFound || !post) {
    return notFound()
  }

  return (
    <article className="mx-auto max-w-2xl py-10">
      <OnPageEdit
        version={version}
        currentRoute={`/${locale}/draft/${version}/${slug}`}
      />
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
          slug={slug}
        />
      </div>
      <PostBody json={post.body?.json} />
    </article>
  )
}
