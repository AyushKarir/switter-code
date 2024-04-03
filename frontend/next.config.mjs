/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: ["media.licdn.com", "lh3.googleusercontent.com"],
  },
  typescript: {
      ignoreBuildErrors: true,
  },
  eslint: {
      ignoreDuringBuilds: true,
  },
};

export default nextConfig;
