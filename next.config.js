const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/exp',
        permanent: true,
      },
    ]
  },
}

module.exports = withPWA({
  ...nextConfig,
  async headers() {
    return [
      {
        source: '/fonts/press-start-2p.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
})
