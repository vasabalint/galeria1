import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // basePath: '/painter-gallery', // Uncomment this if deploying to https://username.github.io/painter-gallery/
};
export default nextConfig;
