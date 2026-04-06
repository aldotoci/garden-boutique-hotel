import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid wrong workspace root when a parent folder has its own package-lock.json
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cf.bstatic.com",
        pathname: "/xdata/images/**",
      },
    ],
  },
};

export default nextConfig;
