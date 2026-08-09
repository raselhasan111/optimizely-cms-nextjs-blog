[Localization](https://nextjs.org/docs/app/building-your-application/routing/internationalization) allows your web application to reach a global audience by providing content in multiple languages. This guide explains how to implement localization in Next.js using Optimizely SaaS CMS.

## Understanding the Localization Process

Our localization strategy involves four key components:

1. **Configuring the GraphQL query** to fetch localized content
2. **Implementing locale-based routing** in Next.js
3. **Creating utility functions** for locale management
4. **Setting up middleware** to handle locale detection and redirection

## 1. Configuring the GraphQL Query

First, we need to modify our GraphQL query to include a locale parameter. This allows us to fetch content for a specific language from Optimizely SaaS CMS.

```graphql
query GetStartPage($locales: [Locales]) {
  StartPage(locale: $locales) {
    items {
      title
      shortDescription
      keywords
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
```

This query now accepts a `$locales` parameter, which we'll use to specify the desired language for our content.

## 2. Creating Utility Functions for Locale Management

Create a utility file to manage your locales:

```typescript
// lib/optimizely/utils/language.ts
import { Locales } from '../types/generated'

export const DEFAULT_LOCALE = 'en'
export const LOCALES = ['en', 'pl', 'sv']

export const getValidLocale = (locale: string): Locales => {
  const validLocale = getLocales().includes(locale) ? locale : DEFAULT_LOCALE
  return validLocale as Locales
}

export const getLocales = () => {
  return LOCALES
}

export const mapPathWithoutLocale = (path: string): string => {
  const parts = path.split('/').filter(Boolean)
  if (LOCALES.includes(parts[0] ?? '')) {
    parts.shift()
  }

  return `${parts.join('/')}`
}
```

And a general utilities file:

```typescript
// lib\utils.ts
import { ReadonlyURLSearchParams } from 'next/navigation'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

export const leadingSlashUrlPath = (pathname: string) => {
  return `${pathname.startsWith('/') ? '' : '/'}${pathname}`
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 3. Implementing Locale-Based Routing

Use Next.js dynamic routes by creating a `[locale]` folder in your `app` directory:

**HomePage**

```typescript
// app/[locale]/page.tsx
export default async function HomePage(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const locales = getValidLocale(locale)
  const pageResponse = await optimizely.GetStartPage({ locales })

  const startPage = pageResponse.data?.StartPage?.items?.[0]
  const blocks = (startPage?.blocks ?? []).filter(
    (block) => block !== null && block !== undefined
  )

  return (
    <>
      <Suspense>
        <ContentAreaMapper blocks={blocks} />
      </Suspense>
    </>
  )
}
```

**Dynamic CmsPage**

```typescript
// app/[locale]/[slug]/page.tsx
import ContentAreaMapper from '@/components/content-area/mapper';
import { optimizely } from '@/lib/optimizely/fetch';
import { getValidLocale } from '@/lib/optimizely/utils/language';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default async function CmsPage(props: {
  params: Promise<{ locale: string; slug?: string }>
}) {
  const { locale, slug = '' } = await props.params
  const locales = getValidLocale(locale)
  const formattedSlug = `/${slug}`

  const { data, errors } = await optimizely.getPageByURL({
    locales: [locales],
    slug: formattedSlug,
  })

  if (errors || !data?.CMSPage?.items?.[0]) {
    return notFound()
  }

  const page = data.CMSPage.items[0]
  const blocks = (page?.blocks ?? []).filter(
    (block) => block !== null && block !== undefined
  )

  return (
    <>
      <Suspense>
        <ContentAreaMapper blocks={blocks} />
      </Suspense>
    </>
  )
}
```

## 4. Setting Up Middleware with Negotiator for Language Detection

The [middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) (Middleware allows you to run code before a request is completed) handles locale detection and redirection. A key part of this is using the **Negotiator** library to parse the browser's language preferences.

### Understanding Negotiator

Negotiator is a content negotiation library that helps parse HTTP headers. In our case, we use it to parse the `Accept-Language` header to determine the user's preferred language.

First, install Negotiator:

```shellscript
npm install negotiator
npm install --save-dev @types/negotiator
```

Then implement the middleware:

```typescript
// middleware.ts
import { DEFAULT_LOCALE, LOCALES } from '@/lib/optimizely/utils/language'
import { createUrl, leadingSlashUrlPath } from '@/lib/utils'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import Negotiator from 'negotiator'

const COOKIE_NAME_LOCALE = '__LOCALE_NAME'
const HEADER_KEY_LOCALE = 'X-Locale'

function shouldExclude(path: string) {
  return (
    path.startsWith('/static') || path.includes('/api/') || path.includes('.')
  )
}

function getBrowserLanguage(
  request: NextRequest,
  locales: string[]
): string | undefined {
  const headerLanguage = request.headers.get('Accept-Language')
  if (!headerLanguage) {
    return undefined
  }

  // Create a negotiator instance with the Accept-Language header
  const languages = new Negotiator({
    headers: { 'accept-language': headerLanguage },
  }).languages()

  // Find the first language that matches our supported locales
  for (const lang of languages) {
    // Check for exact match
    if (locales.includes(lang)) {
      return lang
    }

    // Check for language match without region (e.g., 'pl-PL' should match 'pl')
    const langPrefix = lang.split('-')[0]
    if (locales.includes(langPrefix)) {
      return langPrefix
    }
  }

  return undefined
}

function getLocale(request: NextRequest, locales: string[]): string {
  // First check if there's a locale cookie
  const cookieLocale = request.cookies.get(COOKIE_NAME_LOCALE)?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // If no cookie, try to use browser language
  const browserLang = getBrowserLanguage(request, locales)
  if (browserLang && locales.includes(browserLang)) {
    return browserLang
  }

  // Fall back to default locale
  return DEFAULT_LOCALE
}

function updateLocaleCookies(
  request: NextRequest,
  response: NextResponse,
  locale?: string
): void {
  const cookieLocale = request.cookies.get(COOKIE_NAME_LOCALE)?.value
  const newLocale = locale || null

  if (newLocale !== cookieLocale) {
    if (newLocale) {
      response.cookies.set(COOKIE_NAME_LOCALE, newLocale)
    } else {
      response.cookies.delete(COOKIE_NAME_LOCALE)
    }
  }

  if (newLocale) {
    response.headers.append(HEADER_KEY_LOCALE, newLocale)
  } else {
    response.headers.delete(HEADER_KEY_LOCALE)
  }
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  let response = NextResponse.next()

  if (shouldExclude(pathname)) {
    return response
  }

  const localeInPathname = LOCALES.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (localeInPathname) {
    const pathnameWithoutLocale = pathname.replace(`/${localeInPathname}`, '')
    const newUrl = createUrl(
      `/${localeInPathname}${leadingSlashUrlPath(pathnameWithoutLocale)}`,
      request.nextUrl.searchParams
    )

    response = NextResponse.rewrite(new URL(newUrl, request.url))
    updateLocaleCookies(request, response, localeInPathname)
    return response
  }

  // Get locale with browser language preference
  const locale = getLocale(request, LOCALES)
  const newUrl = createUrl(
    `/${locale}${leadingSlashUrlPath(pathname)}`,
    request.nextUrl.searchParams
  )
  response =
    locale === DEFAULT_LOCALE
      ? NextResponse.rewrite(new URL(newUrl, request.url))
      : NextResponse.redirect(new URL(newUrl, request.url))

  updateLocaleCookies(request, response, locale)

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
```

This middleware handles the following tasks:

- Excludes certain paths from locale processing
- Detects the current locale from the URL or cookies
- Redirects or rewrites requests to include the appropriate locale
- Updates locale cookies for consistent language preferences

## Conclusion

By implementing these changes, you've added localization support to your Next.js application with Optimizely SaaS CMS. The Negotiator library plays a crucial role in detecting user language preferences, ensuring a personalized experience for your global audience.

Key takeaways:

- Use Negotiator to parse the Accept-Language header and determine user preferences
- Implement middleware to handle locale detection and redirection
- Use dynamic routes with a [locale] parameter to serve localized content
