import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://your-site.example";
const siteTitle = "your-site.example";
const siteDescription =
  "Your Name personal site for Blog, Talk, Library, Projects, and notes about code, music, media, and life.";
const defaultImage = "/og/default.svg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | your-site.example",
  },
  description: siteDescription,
  applicationName: siteTitle,
  authors: [{ name: "Your Name", url: siteUrl }],
  creator: "Your Name",
  publisher: "Your Name",
  keywords: [
    "Your Name",
    "your-site.example",
    "Blog",
    "Programming",
    "Music",
    "ACGM",
    "Library",
    "Personal Website",
  ],
  category: "personal website",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [defaultImage],
  },
  alternates: {
    canonical: siteUrl,
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/avatar.svg", type: "image/png" },
    ],
    shortcut: "/avatar.svg",
    apple: "/avatar.svg",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    url: siteUrl,
    inLanguage: "en-US",
    description: siteDescription,
    publisher: {
      "@type": "Person",
      name: "Your Name",
      url: siteUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    url: siteUrl,
    sameAs: ["https://github.com/your-github"],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem("theme-v2");
                document.documentElement.dataset.theme = theme === "light" ? "light" : "dark";
              } catch (_) {
                document.documentElement.dataset.theme = "dark";
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
