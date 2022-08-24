/*
lee wonho
facebook clone project next.config.js
2022 08 24
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn-icons-png.flaticon.com", "upload.wikimedia.org"],
  },
}

module.exports = nextConfig
