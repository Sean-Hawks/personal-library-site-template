import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "your-site.example",
    short_name: "your-site.example",
    description:
      "Your Name personal site for Blog, Talk, Library, Projects, and notes about life and technology.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#111114",
    theme_color: "#111114",
    lang: "en-US",
    icons: [
      {
        src: "/avatar.svg",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/avatar.svg",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
