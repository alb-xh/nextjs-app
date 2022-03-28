/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ 'placeimg.com' ],
  },
  experimental: {
    outputStandalone: true,
  },
}

module.exports = nextConfig
