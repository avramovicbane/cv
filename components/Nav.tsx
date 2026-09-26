"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site-config";
import ThemeToggle from "@/components/ThemeToggle";
import { Download, Search } from "@/components/Icons";

export const OPEN_PALETTE_EVENT = "open-command-palette";

const normalize = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export default function Nav() {
  const pathname = normalize(usePathname() ?? "/");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href: string) =>
    pathname === href
      ? "bg-surface text-ink shadow-card"
      : "text-muted hover:text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-display text-sm font-bold text-bg transition-transform duration-300 group-hover:rotate-6">
            {site.initials}
          </span>
          <span className="hidden font-display text-[15px] font-semibold tracking-tight text-ink sm:block">
            {site.name}
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-1 md:flex" aria-label="Pages">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${linkClass(l.href)}`}
            >
              {l.label}
            </Link>
          ))}
          <a href="#contact" className="rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:text-ink">
            Contact
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
            className="hidden h-9 items-center gap-2 rounded-full border border-line bg-surface/60 pr-2 pl-3 text-sm text-muted transition-colors hover:border-accent/50 hover:text-ink lg:flex"
            aria-label="Open quick navigation"
          >
            <Search className="h-3.5 w-3.5" />
            <kbd className="rounded-md border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-muted">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
          <a
            href={site.cvFile}
            download={site.cvDownloadName}
            aria-label="Download CV"
            className="group flex h-9 w-9 items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 sm:w-auto sm:px-4"
          >
            <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            <span className="hidden sm:inline">Download CV</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all duration-300 ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute top-1.5 left-0 h-0.5 w-4 rounded bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all duration-300 ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-1 px-5 pt-1 pb-4" aria-label="Pages">
          {[{ href: "/", label: "Home" }, ...navLinks].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-base ${pathname === l.href ? "bg-surface text-ink" : "text-ink-2"}`}
            >
              {l.label}
            </Link>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-base text-ink-2">
            Contact
          </a>
          <a
            href={site.cvFile}
            download={site.cvDownloadName}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-bg"
          >
            <Download /> Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
