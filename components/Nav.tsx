"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site-config";
import { LANGS, LANG_LABEL, LANG_NAME, localePath, stripLang } from "@/lib/lang";
import { useT } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";
import { Search } from "@/components/Icons";

export const OPEN_PALETTE_EVENT = "open-command-palette";

const normalize = (p: string) => (p.endsWith("/") ? p : `${p}/`);

/** EN | SR — links to the same page in the other language. */
function LangSwitch({ path }: { path: string }) {
  const { t, lang } = useT();
  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className="flex h-9 items-center rounded-full border border-line bg-surface/60 p-0.5 font-mono text-[11px] font-semibold"
    >
      {LANGS.map((l) => (
        <Link
          key={l}
          href={localePath(l, path)}
          hrefLang={l}
          lang={l}
          title={LANG_NAME[l]}
          aria-current={l === lang ? "true" : undefined}
          className={`rounded-full px-2.5 py-1.5 transition-colors ${
            l === lang ? "bg-ink text-bg" : "text-muted hover:text-ink"
          }`}
        >
          {LANG_LABEL[l]}
        </Link>
      ))}
    </div>
  );
}

export default function Nav() {
  const { t, href } = useT();
  const path = normalize(stripLang(usePathname() ?? "/"));
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/work/", label: t.nav.work },
    { href: "/career/", label: t.nav.career },
    { href: "/certificates/", label: t.nav.certificates },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "border-b border-line bg-bg/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8">
        <Link href={href("/")} className="group flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-display text-sm font-bold text-bg transition-all duration-300 group-hover:-rotate-6 group-hover:bg-accent group-hover:text-on-accent">
            {site.initials}
          </span>
          <span className="hidden font-display text-[15px] font-semibold tracking-tight text-ink sm:block">
            {site.name}
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-1 md:flex" aria-label={t.nav.pages}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={href(l.href)}
              aria-current={path === l.href ? "page" : undefined}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                path === l.href ? "bg-ink text-bg" : "text-ink-2 hover:bg-surface-2 hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="rounded-full px-3.5 py-1.5 text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
          >
            {t.nav.contact}
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
            className="hidden h-9 items-center gap-2 rounded-full border border-line bg-surface/60 pr-2 pl-3 text-sm text-muted transition-colors hover:border-ink hover:text-ink lg:flex"
            aria-label={t.nav.palette}
          >
            <Search className="h-3.5 w-3.5" />
            <kbd className="rounded-md border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-muted">
              ⌘K
            </kbd>
          </button>
          <LangSwitch path={path} />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={t.nav.menu}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all duration-300 ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute top-1.5 left-0 h-0.5 w-4 rounded bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all duration-300 ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-1 px-5 pt-1 pb-4" aria-label={t.nav.pages}>
          {[{ href: "/", label: t.nav.home }, ...links].map((l) => (
            <Link
              key={l.href}
              href={href(l.href)}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-base ${path === l.href ? "bg-ink text-bg" : "text-ink-2"}`}
            >
              {l.label}
            </Link>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-base text-ink-2">
            {t.nav.contact}
          </a>
        </nav>
      </div>
    </header>
  );
}
