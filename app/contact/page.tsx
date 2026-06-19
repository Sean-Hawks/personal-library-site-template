"use client";

import React from "react";
import { Mail, Github, MessageSquare } from "lucide-react";
import ThemeStyles from "../components/ThemeStyles";
import Header from "../components/Header";

export default function ContactPage() {
  const contacts = [
    {
      name: "Email",
      value: "hello@example.com", // Replace with your email.
      icon: Mail,
      link: "mailto:hello@example.com",
      color: "text-red-400",
    },
    {
      name: "GitHub",
      value: "@your-github", // Replace with your GitHub.
      icon: Github,
      link: "https://github.com/your-github",
      color: "text-[rgb(var(--text))]",
    },
    {
      name: "Discord",
      value: "your-discord", // Replace with your Discord.
      icon: MessageSquare,
      link: "#",
      color: "text-indigo-400",
    }
  ];

  return (
    <div className="site-shell min-h-screen text-[rgb(var(--text))]">
      <ThemeStyles />
      <Header />

      <div className="w-full px-4 sm:px-3">
        <main className="mx-auto max-w-2xl py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <p className="mt-3 text-[rgb(var(--muted))]">
              For questions, collaboration, or feedback, reach out through these links.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-[rgb(var(--line)/0.10)] bg-[rgb(var(--panel)/0.86)] p-6 shadow-[0_18px_60px_rgba(90,76,55,0.07)] transition-all hover:border-[rgb(var(--accent)/0.22)] hover:bg-[rgb(var(--panel))] hover:scale-[1.02]"
              >
                <div className={`rounded-lg border border-[rgb(var(--line)/0.10)] bg-[rgb(var(--line)/0.04)] p-3 ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-[rgb(var(--muted))]">{item.name}</div>
                  <div className="font-semibold text-[rgb(var(--text))]">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </main>

        <footer className="mx-auto max-w-2xl px-4 pb-10 pt-8 text-xs text-[rgb(var(--muted))] text-center">
          <div className="opacity-70">© {new Date().getFullYear()} Your Name</div>
        </footer>
      </div>
    </div>
  );
}
