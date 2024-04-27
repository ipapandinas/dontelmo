const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
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

module.exports = withPWA(nextConfig)
