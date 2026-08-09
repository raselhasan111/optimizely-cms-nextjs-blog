## Introduction

Implementing [Draft Mode](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode) is crucial when working with Optimizely and Next.js to enable previews, drafts, and on-page editing while maintaining high performance and flexibility within a headless architecture. This guide will walk you through the process of setting up Draft Mode and explain each step in detail.

## Why Draft Mode?

By default, Optimizely CMS generates preview URLs with `/preview/**/*`, which are embedded within an iframe in the CMS UI. However, Next.js doesn't automatically support this structure. To bridge this gap, we need to:

1. Redirect these requests to a dedicated API handler.
2. Enable Next.js [draft mode](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode) dynamically.
3. Load draft content separately from live content using new GraphQL queries

## Implementation Steps

### 1. Redirecting Preview Requests

First, we need to modify `next.config.ts` to redirect Optimizely's preview URLs to our API handler:

```typescript
// next.config.ts
module.exports = {
  // ... other configurations
  async redirects() {
    return [
      {
        source: '/preview/:path*',
        destination: '/api/draft:path*',
        permanent: true,
      },
    ]
  },
}
```

This configuration will redirect requests like:

```plaintext
https://optimizely-saas-cms-next.vercel.app/preview?key=xyz&ver=123&loc=en&preview_token=abc
```

to:

```plaintext
https://optimizely-saas-cms-next.vercel.app/api/draft?key=xyz&ver=123&loc=en&preview_token=abc
```

### 2. API Route to Enable Draft Mode

Next, we'll create an API route to handle draft mode activation. This API acts as the brain responsible for proper redirection to the preview page:

```typescript
// app/api/draft/route.ts
import { draftMode } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

import { optimizely } from '@/lib/optimizely/fetch'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('preview_token')
  const key = searchParams.get('key')
  const ver = searchParams.get('ver')
  const loc = searchParams.get('loc')

  if (!ver || !token || !key) {
    return notFound()
  }

  const response = await optimizely.GetContentByKeyAndVersion(
    { key, ver },
    { preview: true }
  )

  if (response.errors) {
    const errorsMessage = response.errors
      .map((error) => error.message)
      .join(', ')

    return new NextResponse(errorsMessage, { status: 401 })
  }

  const content = response.data?._Content?.items?.[0]
  if (!content) {
    return new NextResponse('Bad Request', { status: 400 })
  }
  ;(await draftMode()).enable()
  let newUrl = ''
  if (content.__typename === '_Experience') {
    newUrl = `/${loc}/draft/${ver}/experience/${key}`
  } else if (content.__typename === '_Component') {
    newUrl = `/${loc}/draft/${ver}/block/${key}`
  } else {
    // In hierarchical routing, the Start Page in Optimizely does not use "/" as its URL
    // but instead has a path like "/start-page". To normalize the URL and make it relative
    // to the Start Page, we remove the OPTIMIZELY_START_PAGE_URL prefix from the hierarchical URL.
    const hierarchicalUrl = content?._metadata?.url?.hierarchical?.replace(
      process.env.OPTIMIZELY_START_PAGE_URL ?? '',
      ''
    )

    const hierarchicalUrlWithoutLocale = hierarchicalUrl?.replace(
      `/${loc}/`,
      ''
    )
    newUrl = `/${loc}/draft/${ver}/${hierarchicalUrlWithoutLocale}`
  }

  redirect(`${newUrl}`)
}
```

This API route performs the following tasks:

1. Extracts information from search params about locale, version, and key of content to preview.
2. Makes a request to Content Graph to get the URL based on content key and version.
3. Based on the Content Type (`_Experience`, `_Component`, `_Page`), redirects to the proper URL defined in our routing.

#### GraphQL Query used in API

```graphql
# // lib/optimizely/queries/draft/GetContentByKeyAndVersion.graphql

query GetContentByKeyAndVersion($key: String, $ver: String) {
  _Content(where: { _metadata: { key: { eq: $key }, version: { eq: $ver } } }) {
    items {
      __typename
      _metadata {
        displayName
        version
        key
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
    }
  }
}
```

### 3. Creating Draft-Specific Routes

To isolate draft content, we'll define a new route group:

```plaintext
app/(draft)/[locale]/draft/[version]
```

Where:

- `(draft)` is a route group that enables us to have a different root layout than normal
- `[locale]` is a dynamic parameter that allows us to display the proper language
- `draft` is a static route that allows for unique routes that do not conflict with the main application
- `[version]` is a dynamic parameter that contains information about the preview version, which is then passed to the GraphQL query to get that version from Graph

### 4. Root Layout for Draft Mode

Create `app/(draft)/[locale]/layout.tsx` to include Optimizely's editor communication script:

```typescript
// app/(draft)/[locale]/layout.tsx

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src={`${process.env.NEXT_PUBLIC_CMS_URL}/util/javascript/communicationinjector.js`}
        />
        <DraftActions />
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}
```

This layout adds the `communicationinjector.js` script, eliminating the need to do this per page.

### 5. Draft Mode Actions Component

Create a component to provide UI controls for disabling Next.js's draft mode and refreshing the page:

```typescript
// components/draft/draft-actions.tsx
'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const DraftActions = () => {
  const router = useRouter()

  const handleDisableDraft = () => {
    fetch('/api/draft/disable')
  }

  return (
    <div className="flex justify-end gap-5 p-4">
      <Button onClick={() => router.refresh()}>Refresh Page</Button>
      <Button onClick={() => handleDisableDraft()}>Disable Draft</Button>
    </div>
  )
}

export default DraftActions

```

### 6. Disabling Draft Mode API Route

Create an API route to turn off draft mode:

```typescript
// app/api/draft/disable/route.ts
import { draftMode } from 'next/headers'

export async function GET() {
  ;(await draftMode()).disable()
  return new Response('Draft mode is disabled')
}
```

### 7. Implementing Draft Homepage

Create a page to display draft content for the homepage:

```typescript
// app/(draft)/[locale]/draft/[version]/page.tsx
import ContentAreaMapper from '@/components/content-area/mapper'
import OnPageEdit from '@/components/draft/on-page-edit'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function HomePage(props: {
  params: Promise<{ locale: string; version: string }>
}) {
  const { isEnabled: isDraftModeEnabled } = await draftMode()
  if (!isDraftModeEnabled) {
    return notFound()
  }

  const { locale, version } = await props.params
  const locales = getValidLocale(locale)
  const pageResponse = await optimizely.GetPreviewStartPage(
    { locales, version },
    { preview: true }
  )
  const startPage = pageResponse.data?.StartPage?.items?.[0]
  const blocks = (startPage?.blocks ?? []).filter(
    (block) => block !== null && block !== undefined
  )

  return (
    <div data-epi-edit="blocks">
      <OnPageEdit
        version={version}
        currentRoute={`/${locale}/draft/${version}`}
      />
      <Suspense>
        <ContentAreaMapper blocks={blocks} preview />
      </Suspense>
    </div>
  )
}
```

### GraphQl Query

```graphql
# lib/optimizely/queries/draft/GetPreviewStartPage.graphql

query GetPreviewStartPage($locales: [Locales], $version: String) {
  StartPage(
    locale: $locales
    where: { _metadata: { version: { eq: $version } } }
  ) {
    items {
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
```

### 8. Implementing Draft CMS Pages

Create a page to display draft content for CMS pages:

```typescript
// app/(draft)/[locale]/draft/[version]/[slug]/page.tsx
import ContentAreaMapper from '@/components/content-area/mapper'
import OnPageEdit from '@/components/draft/on-page-edit'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function CmsPage(props: {
  params: Promise<{ locale: string; version: string; slug?: string }>
}) {
  const { isEnabled: isDraftModeEnabled } = await draftMode()
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
  const page = pageResponse.data?.CMSPage?.items?.[0]

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

```

### GraphQl Query

```graphql
# lib/optimizely/queries/draft/GetPreviewPageByUrl.graphql

query getPreviewPageByURL(
  $locales: [Locales]
  $slug: String
  $version: String
) {
  CMSPage(
    locale: $locales
    where: {
      _metadata: { version: { eq: $version } }
      _and: { _metadata: { url: { default: { eq: $slug } } } }
    }
  ) {
    items {
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
```

### 9. Implementing Draft Shared Blocks

Create a page to display draft content for shared blocks:

```typescript
// app/(draft)/[locale]/draft/[version]/block/[key]/page.tsx
import ContentAreaMapper from '@/components/content-area/mapper'
import OnPageEdit from '@/components/draft/on-page-edit'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function Page(props: {
  params: Promise<{ key: string; locale: string; version: string }>
}) {
  const { isEnabled: isDraftModeEnabled } = await draftMode()
  if (!isDraftModeEnabled) {
    return notFound()
  }

  const { locale, version, key } = await props.params
  const locales = getValidLocale(locale)

  const componentData = await optimizely.GetComponentByKey(
    { locales, key, version },
    { preview: true }
  )

  const blocks = componentData.data?._Component?.items

  return (
    <Suspense>
      <OnPageEdit
        version={version}
        currentRoute={`/${locale}/draft/${version}/block/${key}`}
      />
      <ContentAreaMapper blocks={blocks} preview />
    </Suspense>
  )
}

```

### GraphQl Query

```graphql
# lib/optimizely/queries/draft/GetComponentByKey.graphql

query GetComponentByKey($locales: [Locales], $key: String, $version: String) {
  _Component(
    locale: $locales
    where: {
      _metadata: { key: { eq: $key } }
      _or: { _metadata: { version: { eq: $version } } }
    }
  ) {
    items {
      ...ItemsInContentArea
    }
  }
}
```

### 10. OnPageEdit Component

This component is used for adding an event listener for the `optimizely:cms:contentSaved` event and redirecting to the correct version if the content version has changed:

```typescript
//components/draft/on-page-edit.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ContentSavedEventArgs {
  contentLink: string
  previewUrl: string
  previewToken: string
  parentId?: string
  sectionId?: string
}

const OnPageEdit = ({
  version,
  currentRoute,
}: {
  version: string
  currentRoute: string
}) => {
  const router = useRouter()

  useEffect(() => {
    const handleContentSaved = (event: Event) => {
      const message = (event as CustomEvent).detail as ContentSavedEventArgs
      console.log('Content saved event received:', message)
      const [, contentVersion] = message?.contentLink?.split('_')
      if (contentVersion && contentVersion !== version) {
        const newUrl = currentRoute?.replace(version, contentVersion)
        router.push(newUrl)
      } else {
        router.refresh()
      }
    }

    window.addEventListener('optimizely:cms:contentSaved', handleContentSaved)
  }, [currentRoute, router, version])

  return null
}

export default OnPageEdit
```

### 11. Enabling On-Page Editing

To enable on-page editing (OPE), add the `data-epi-edit` attribute to the HTML elements you want to make editable. You can read more about it in the [documentation](https://docs.developers.optimizely.com/platform-optimizely/v1.4.0-optimizely-graph/docs/on-page-editing-using-content-graph#make-a-property-editable). For example:

```typescript
export default function ContactBlock({
  title,
  description,
}: ContactBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle data-epi-edit="title">{title}</CardTitle>
          <p data-epi-edit="description" className="text-muted-foreground">
            {description}
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Textarea placeholder="Message" />
            <Button className="w-full">Send</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

```

### 12. Security Configuration

To allow Optimizely CMS to embed the preview of our headless application, add the following Content Security Policy to your `next.config.ts`:

```javascript
// next.config.ts
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' *.optimizely.com",
          },
        ],
      },
    ]
  },
```

## Summary

By implementing draft mode this way, we:

1. Ensure Next.js seamlessly integrates with Optimizely's preview system.
2. Keep draft content separate from live content.
3. Enable an intuitive editing experience with instant feedback.
4. Improve performance by dynamically fetching only necessary content.

This approach provides a robust and scalable preview solution for Optimizely SaaS CMS with Next.js. It allows content editors to see their changes in real-time while maintaining the performance benefits of a headless architecture.

By following this guide, you'll have a powerful and flexible draft mode implementation that enhances the content editing experience while leveraging the strengths of both Optimizely and Next.js.
