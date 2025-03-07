/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["example.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
