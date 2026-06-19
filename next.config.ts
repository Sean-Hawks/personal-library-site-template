import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "personal-library-site-template";
const useSubpath =
  process.env.GITHUB_ACTIONS === "true" &&
  process.env.DEPLOY_TARGET !== "custom-domain";
const basePath = useSubpath ? `/${repo}` : "";

const nextConfig: NextConfig = {
  // 1. Enable static export. `next build` generates the `out/` directory with HTML files.
  output: "export",

  // GitHub Pages handles folder-style routes more reliably with trailingSlash: true.
  trailingSlash: true,

  // 2. Disable image optimization because GitHub Pages cannot run the Next.js image server.
  images: {
    unoptimized: true,
  },

  // Needed for GitHub Pages project URLs such as https://<user>.github.io/<repo>/.
  ...(useSubpath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
