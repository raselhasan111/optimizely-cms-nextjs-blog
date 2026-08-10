import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/blog/site'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/en/draft/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
