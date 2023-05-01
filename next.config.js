/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.foodandwine.com'],
  },
};

module.exports = nextConfig;
