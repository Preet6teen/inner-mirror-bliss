import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/tarot-card-reading",
        destination: "/services/tarot-reading",
        permanent: true,
      },
      {
        source: "/services/reiki-healing-body-massage",
        destination: "/services/reiki-body-massage",
        permanent: true,
      },
      {
        source: "/services/reiki-healing-head-massage",
        destination: "/services/reiki-head-massage",
        permanent: true,
      },
      {
        source: "/services/angel-healing-card-message",
        destination: "/services/angel-healing",
        permanent: true,
      },
      {
        source: "/book",
        destination: "/book-session",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms-and-conditions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
