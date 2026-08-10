import Link from 'next/link'
import { Icons } from '@/components/ui/icons'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { optimizely } from '@/lib/optimizely/fetch'
import { castContent, SafeContent } from '@/lib/optimizely/types/typeUtils'
import { SocialLink } from '@/lib/optimizely/types/generated'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/feed.xml', label: 'RSS' },
]

export async function Footer({ locale }: { locale: string }) {
  const locales = getValidLocale(locale)
  const { data } = await optimizely.getFooter(
    { locales: locales },
    { cacheTag: 'optimizely-footer' }
  )
  const footer = data?.Footer?.item
  if (!footer) {
    return null
  }

  const { socialLinks, copyrightText } = footer

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <nav className="flex justify-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex justify-center gap-4">
          {socialLinks?.map((linkItem, index) => {
            const link = castContent<SocialLink>(
              linkItem as SafeContent,
              'SocialLink'
            )
            if (!link) return null
            const platform = (link?.platform ?? '') as keyof typeof Icons

            const Icon = platform ? Icons?.[platform] : null
            return (
              <Link
                key={index}
                href={link?.href ?? '/'}
                className="text-muted-foreground hover:text-foreground"
              >
                {Icon && <Icon className="h-5 w-5" />}
              </Link>
            )
          })}
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          {copyrightText}
        </div>
      </div>
    </footer>
  )
}
