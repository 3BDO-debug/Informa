/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.vercel.com', '127.0.0.1'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
