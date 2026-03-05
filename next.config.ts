import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/singhrudra.com",
  images: {
    unoptimized: true, // Disable Image Optimization for static exports
  },
};

export default nextConfig;
