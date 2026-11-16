import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/instrument-serif/400-italic.css";
import { BASE_PATH, site } from "@/lib/site-config";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: `404 — ${site.name}`,
  description: "This page does not exist. / Ova stranica ne postoji.",
  robots: { index: false },
};

// Shown for any address that matches no page. It cannot know which language
// the visitor wanted, so it speaks both. Plain <a> tags because this page is
// rendered outside the app's layouts (no router, no language provider).
const LINKS = [
  { href: `${BASE_PATH}/`, lang: "en", line: "This page doesn't exist.", cta: "Back to the home page" },
  { href: `${BASE_PATH}/sr/`, lang: "sr-Latn", line: "Ova stranica ne postoji.", cta: "Nazad na početnu" },
];

export default function GlobalNotFound() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col items-center justify-center px-5 py-16" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <div aria-hidden className="dot-bg pointer-events-none fixed inset-0" />
        <main className="relative w-full max-w-xl text-center">
          <p className="font-mono text-xs tracking-widest text-accent-ink uppercase">Error 404</p>
          <h1 className="mt-4 font-display text-6xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-8xl">
            Not in <span className="marker font-serif font-normal italic">this release.</span>
          </h1>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {LINKS.map((l) => (
              <li key={l.href} lang={l.lang}>
                <a href={l.href} className="pop-card flex h-full flex-col gap-1 rounded-2xl p-5 text-left">
                  <span className="text-sm text-ink-2">{l.line}</span>
                  <span className="font-display text-lg font-semibold text-ink">{l.cta} →</span>
                </a>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}
