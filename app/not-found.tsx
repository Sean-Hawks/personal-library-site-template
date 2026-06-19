import Link from "next/link";
import { ArrowRight, BookOpenText, Home, Search } from "lucide-react";
import Header from "./components/Header";
import ThemeStyles from "./components/ThemeStyles";

export default function NotFound() {
  return (
    <div className="site-shell min-h-screen text-[rgb(var(--text))]">
      <ThemeStyles />
      <Header />

      <main className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-4xl place-items-center px-4 py-16 sm:px-3">
        <section className="w-full rounded-2xl border border-[rgb(var(--line)/0.10)] bg-[rgb(var(--panel)/0.88)] p-6 shadow-[0_22px_70px_rgba(90,76,55,0.10)] sm:p-8">
          <div className="mb-3 inline-flex items-center rounded-full border border-[rgb(var(--accent)/0.22)] bg-[rgb(var(--accent)/0.10)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
            404
          </div>
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">Page Not Found</h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-[rgb(var(--muted))]">
            This route is not part of the template. The Library is the best place to start,
            especially if you are exploring how the Markdown content model works.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Link
              href="/library"
              className="group rounded-xl border border-[rgb(var(--accent)/0.22)] bg-[rgb(var(--accent)/0.10)] p-4 transition-colors hover:bg-[rgb(var(--accent)/0.15)]"
            >
              <BookOpenText className="mb-3 h-5 w-5 text-[rgb(var(--accent))]" />
              <div className="font-bold">Open Library</div>
              <div className="mt-1 text-sm leading-6 text-[rgb(var(--muted))]">
                Browse Markdown-powered reviews and collections.
              </div>
            </Link>
            <Link
              href="/search"
              className="group rounded-xl border border-[rgb(var(--line)/0.10)] bg-[rgb(var(--line)/0.035)] p-4 transition-colors hover:border-[rgb(var(--accent)/0.24)]"
            >
              <Search className="mb-3 h-5 w-5 text-[rgb(var(--accent))]" />
              <div className="font-bold">Search Site</div>
              <div className="mt-1 text-sm leading-6 text-[rgb(var(--muted))]">
                Find posts, activity notes, tags, and Library items.
              </div>
            </Link>
            <Link
              href="/"
              className="group rounded-xl border border-[rgb(var(--line)/0.10)] bg-[rgb(var(--line)/0.035)] p-4 transition-colors hover:border-[rgb(var(--accent)/0.24)]"
            >
              <Home className="mb-3 h-5 w-5 text-[rgb(var(--accent))]" />
              <div className="font-bold">Back Home</div>
              <div className="mt-1 text-sm leading-6 text-[rgb(var(--muted))]">
                Return to the README-style homepage.
              </div>
            </Link>
          </div>

          <Link
            href="/library"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[rgb(var(--accent))]"
          >
            Start with the Library
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
    </div>
  );
}
