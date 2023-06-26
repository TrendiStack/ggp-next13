/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'gelatogelatobucket.s3.us-east-2.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
