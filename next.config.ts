import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Assets are all SVG / user-generated artwork — skip Next.js raster optimisation
    unoptimized: true,
  },
};

export default nextConfig;