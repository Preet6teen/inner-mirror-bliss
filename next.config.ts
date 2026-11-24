import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/inner-mirror-bliss",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
