const isProd = process.env.NODE_ENV === 'production';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/crossfit-oddity/' : '',
  experimental: {
    images: {
      unoptimized: true
    }
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/memberships': { page: '/memberships' },
      '/our-gym': { page: '/our-gym' },
      '/schedule': { page: '/schedule' },
      '/on-ramp': { page: '/on-ramp' },
      '/location': { page: '/location'}
    }
  },
}

module.exports = nextConfig
