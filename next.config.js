/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'iscan-backend-production.up.railway.app',
  },
  // Railway deployment optimization
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: []
  }
}

module.exports = nextConfig
