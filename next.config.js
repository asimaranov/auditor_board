/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    outputStandalone: true,
  }
}

module.exports = nextConfig
