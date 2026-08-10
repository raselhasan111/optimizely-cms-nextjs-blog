import { Suspense } from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { generateAlternates } from '@/lib/utils/metadata'
import { buildBlogPostGraphUrl, extractSlugFromContentUrl } from '@/lib/blog/slug'
import { parsePublishedDate } from '@/lib/blog/dates'
import { PostMeta } from '@/components/blog/post-meta'
import { PostBody } from '@/components/blog/post-body'
import { DraftModeLoader } from '@/components/draft/draft-mode-loader'
import DraftModeBlogPost from '@/components/draft/draft-mode-blog-post'

export async function generateStaticParams() {
  try {
    const { data } = await optimizely.getAllBlogPosts({
      locales: null,
      limit: null,
      skip: null,
    })
    const posts = data?.BlogPost?.items ?? []

    const slugs = posts
      .map((post) => extractSlugFromContentUrl(post?._metadata?.url?.default))
      .filter((slug): slug is string => Boolean(slug))

    return slugs.map((slug) => ({ slug }))
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
  const graphUrl = buildBlogPostGraphUrl(locale, slug)

  const { data } = await optimizely.getBlogPostByURL({
    locales: [locales],
    slug: graphUrl,
  })
  const post = data?.BlogPost?.item
  const postFound = (data?.BlogPost?.total ?? 0) > 0
  if (!postFound || !post) {
    return {}
  }

  const publishedTime = post.publishedDate
    ? parsePublishedDate(post.publishedDate).toISOString()
    : undefined

  return {
    title: post.title,
    description: post.subheading || '',
    alternates: generateAlternates(locale, `/blog/${slug}`),
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
  const graphUrl = buildBlogPostGraphUrl(locale, slug)
  const { isEnabled: isDraftModeEnabled } = await draftMode()

  if (isDraftModeEnabled) {
    return (
      <Suspense fallback={<DraftModeLoader />}>
        <DraftModeBlogPost locales={locales} slug={graphUrl} routeSlug={slug} />
      </Suspense>
    )
  }

  const { data } = await optimizely.getBlogPostByURL({
    locales: [locales],
    slug: graphUrl,
  })
  const post = data?.BlogPost?.item
  const postFound = (data?.BlogPost?.total ?? 0) > 0

  if (!postFound || !post) {
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
          slug={slug}
        />
      </div>
      <PostBody json={post.body?.json} />
    </article>
  )
}
