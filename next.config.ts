import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["private-user-images.githubusercontent.com"], // ✅ Tambahkan domain ini
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/model/:path*",
        destination: "/model/:path*",
      },
    ];
  },
};

export default nextConfig;
