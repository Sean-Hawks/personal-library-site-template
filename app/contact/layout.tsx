import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Your Name through email, GitHub, or Discord.",
  alternates: {
    canonical: "https://your-site.example/contact/",
  },
  openGraph: {
    title: "Contact",
    description: "Contact Your Name through email, GitHub, or Discord.",
    url: "https://your-site.example/contact/",
    images: ["/og/default.svg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
