/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "imgix",
    path: "",
    domains: ['pexels.com', 'images.pexels.com', 'cdn.sanity.io' ],
  },
}

module.exports = nextConfig
