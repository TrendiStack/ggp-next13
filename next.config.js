/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'bobward-image-bucket.s3.ca-central-1.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
