/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    outputStandalone: true,
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
