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

// The CMS communicationinjector script + Visual Builder iframe editing
// only run against the (draft) route group ("/{locale}/draft/..."); see
// app/(draft)/[locale]/layout.tsx. Everywhere else gets a locked-down CSP.
function isDraftRoute(pathname: string): boolean {
  return /^\/[a-z]{2}\/draft(\/|$)/.test(pathname)
}

function getCmsOrigin(): string | undefined {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL
  if (!cmsUrl) return undefined
  try {
    return new URL(cmsUrl).origin
  } catch {
    return undefined
  }
}

// Report-Only for now: Next.js's App Router emits a fixed set of inline
// <script> tags for RSC hydration that a bare `script-src 'self'` blocks
// outright (confirmed by testing both dev and production builds — the
// page rendered blank). Getting a nonce to reach those Next-internal
// scripts needs `'strict-dynamic'` plus Next reading the nonce back off
// the request's CSP header, and that round-trip did not pick it up in
// this Next 15.5.9 setup even with 'strict-dynamic' added. Enforcing
// script-src here would break the whole site, so this ships as
// Report-Only (violations are visible in the browser console/reporting
// endpoint, nothing is blocked) until a nonce strategy is verified to
// work end-to-end — see the plan's own "start Report-Only if anything
// breaks" guidance. The other headers below have no such risk and are
// fully enforced.
function buildCsp(pathname: string): string {
  const cmsOrigin = getCmsOrigin()
  const imgSrc = [
    "'self'",
    'https://miro.medium.com',
    'https://res.cloudinary.com',
    'data:',
  ]
  if (cmsOrigin) imgSrc.push(cmsOrigin)

  if (isDraftRoute(pathname)) {
    const frameAncestors = ["'self'", ...(cmsOrigin ? [cmsOrigin] : [])]
    return [
      `default-src 'self'`,
      `script-src 'self' 'unsafe-inline' ${cmsOrigin ?? ''}`.trim(),
      `style-src 'self' 'unsafe-inline'`,
      `img-src ${imgSrc.join(' ')}`,
      `frame-ancestors ${frameAncestors.join(' ')}`,
    ].join('; ')
  }

  return [
    `default-src 'self'`,
    `script-src 'self' 'unsafe-inline'`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src ${imgSrc.join(' ')}`,
    `frame-ancestors 'none'`,
  ].join('; ')
}

function applySecurityHeaders(response: NextResponse, pathname: string): void {
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  )
  response.headers.set('Content-Security-Policy-Report-Only', buildCsp(pathname))
  if (!isDraftRoute(pathname)) {
    response.headers.set('X-Frame-Options', 'DENY')
  }
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
    applySecurityHeaders(response, pathname)
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
    applySecurityHeaders(response, pathname)
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
  applySecurityHeaders(response, pathname)

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
