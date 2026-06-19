import type { NextConfig } from "next";

const repo = "personal-library-site-template";
const useSubpath = false; // Set this to true for https://<user>.github.io/personal-library-site-template/.

const nextConfig: NextConfig = {
  // 1. Enable static export. `next build` generates the `out/` directory with HTML files.
  output: "export",

  // GitHub Pages handles folder-style routes more reliably with trailingSlash: true.
  trailingSlash: true,

  // 2. Disable image optimization because GitHub Pages cannot run the Next.js image server.
  images: {
    unoptimized: true,
  },

  // Only needed for GitHub Pages subpath deployment.
  ...(useSubpath
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
