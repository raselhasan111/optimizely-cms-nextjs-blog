import Link from 'next/link'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import Image from 'next/image'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/feed.xml', label: 'RSS' },
]

export async function Header({ locale }: { locale: string }) {
  const locales = getValidLocale(locale)
  const { data } = await optimizely.getHeader(
    { locale: locales },
    { cacheTag: 'optimizely-header' }
  )
  const header = data?.Header?.item
  if (!header) {
    return null
  }

  const { logo } = header

  return (
    <header className="sticky top-0 z-30 border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold lg:min-w-[150px]">
            <Image src={logo ?? ''} width={50} height={50} alt="logo" />
          </Link>
          <nav className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
