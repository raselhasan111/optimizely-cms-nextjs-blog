import { Suspense } from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { generateAlternates } from '@/lib/utils/metadata'
import { buildBlogPostUrlSuffix } from '@/lib/blog/slug'
import { parsePublishedDate } from '@/lib/blog/dates'
import { getAllPublishedPosts } from '@/lib/blog/posts'
import { getMediumUrl, isMediumCanonical } from '@/lib/blog/medium-links'
import { ArticleJsonLd } from '@/components/blog/article-json-ld'
import { PostMeta } from '@/components/blog/post-meta'
import { PostBody } from '@/components/blog/post-body'
import { DraftModeLoader } from '@/components/draft/draft-mode-loader'
import DraftModeBlogPost from '@/components/draft/draft-mode-blog-post'

export async function generateStaticParams() {
  try {
    const posts = await getAllPublishedPosts()
    return posts.map((post) => ({ slug: post.slug }))
  } catch (e) {
    console.error(e)
    return []
  }
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await props.params
  const locales = getValidLocale(locale)
  const urlSuffix = buildBlogPostUrlSuffix(slug)

  const { data } = await optimizely.getBlogPostByURL({
    locales: [locales],
    urlSuffix,
  })
  const post = data?.BlogPost?.item
  const postFound = (data?.BlogPost?.total ?? 0) > 0
  if (!postFound || !post) {
    return {}
  }

  const publishedTime = post.publishedDate
    ? parsePublishedDate(post.publishedDate).toISOString()
    : undefined

  const alternates = generateAlternates(locale, `/blog/${slug}`)
  if (isMediumCanonical(slug)) {
    const mediumUrl = getMediumUrl(slug)
    if (mediumUrl) alternates.canonical = mediumUrl
  }

  return {
    title: post.title,
    description: post.subheading || '',
    alternates,
    openGraph: {
      type: 'article',
      title: post.title ?? '',
      description: post.subheading || '',
      publishedTime,
    },
  }
}

export default async function BlogPostPage(props: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await props.params
  const locales = getValidLocale(locale)
  const urlSuffix = buildBlogPostUrlSuffix(slug)
  const { isEnabled: isDraftModeEnabled } = await draftMode()

  if (isDraftModeEnabled) {
    return (
      <Suspense fallback={<DraftModeLoader />}>
        <DraftModeBlogPost
          locales={locales}
          urlSuffix={urlSuffix}
          routeSlug={slug}
        />
      </Suspense>
    )
  }

  const { data } = await optimizely.getBlogPostByURL({
    locales: [locales],
    urlSuffix,
  })
  const post = data?.BlogPost?.item
  const postFound = (data?.BlogPost?.total ?? 0) > 0

  if (!postFound || !post) {
    return notFound()
  }

  return (
    <article className="mx-auto max-w-2xl py-10">
      {post.title && (
        <ArticleJsonLd
          title={post.title}
          author={post.author}
          publishedDate={post.publishedDate}
          slug={slug}
        />
      )}
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
