import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app-epsarasel05g6np001.cms.optimizely.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
    ],
    loader: 'custom',
    loaderFile: './lib/image/loader.ts',
  },
  // Security headers (CSP, X-Frame-Options, HSTS, etc.) are set in
  // middleware.ts instead of here: the CSP needs to differ between the
  // (draft) route group (relaxed, for CMS iframe editing) and everywhere
  // else (locked down), which next.config.ts's static headers() can't
  // express without risking two conflicting Content-Security-Policy
  // response headers on the same request.
  async redirects() {
    return [
      {
        source: '/preview/:path*',
        // Destination catch-all needs the "/" delimiter — "/api/draft:path*"
        // throws "Can not repeat 'path' without a prefix and suffix" in Next's
        // path-to-regexp, 500ing every CMS preview request before it reaches
        // the handler. The CMS calls /preview?key=…&ver=… (query only), so
        // :path* is empty and this resolves to /api/draft with the query kept.
        destination: '/api/draft/:path*',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
