import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: ['./src/app'], // Optional: Path to SCSS files
  },
};

export default nextConfig;
