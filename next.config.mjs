/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias["@unitools/link"] = "@unitools/link-next";
    return config;
  },
};

export default nextConfig;
