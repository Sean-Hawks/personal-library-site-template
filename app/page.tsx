import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "your-site.example",
  description:
    "Your Name personal site: Blog, Talk, Library, Projects, and notes about code, music, media, and life.",
  alternates: {
    canonical: "https://your-site.example",
  },
  openGraph: {
    type: "website",
    url: "https://your-site.example",
    title: "your-site.example",
    description:
      "Your Name personal site: Blog, Talk, Library, Projects, and notes about code, music, media, and life.",
    images: [
      {
        url: "/og/default.svg",
        width: 1200,
        height: 630,
        alt: "your-site.example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "your-site.example",
    description:
      "Your Name personal site: Blog, Talk, Library, Projects, and notes about code, music, media, and life.",
    images: ["/og/default.svg"],
  },
};

export const dynamic = "force-static"; // Keep this stable for static export and GitHub Pages deployment.
// NOTE: If multiple deploy workflows conflict in GitHub Actions, remove extra YAML files under .github/workflows/. 
// NOTE: If next build fails on PageProps or params, check that params is a Promise in App Router dynamic pages.
// NOTE: If GitHub Actions build fails, check the Actions log first. Lint and type errors are common causes.
// NOTE: See DEPLOYMENT.md for GitHub Pages and custom domain setup.

import { getSortedPostsData } from "./lib/posts";
import { getSortedTalksData } from "./lib/talks";
import { getAllLibraryItems } from "./lib/library";
import HomeClient from "./components/HomeClient";

export default function Page() {
	const posts = getSortedPostsData();
	const talks = getSortedTalksData();
	const libraryItems = getAllLibraryItems();

	return <HomeClient posts={posts} talks={talks} libraryItems={libraryItems} />;
}
