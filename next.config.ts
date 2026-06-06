import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "code-with-abdul.vercel.app",
      },
    ],
  },
};

export default nextConfig;
