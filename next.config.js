/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL: process.env.API_URL,
  },
  images: { domains: ["rs-dev.promosindo.web.id", "panel.resellerindo.com"] },
};

module.exports = nextConfig;
