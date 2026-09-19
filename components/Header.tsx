"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur transition-shadow duration-300 dark:bg-zinc-950/80 ${
        scrolled
          ? "border-zinc-800/10 shadow-sm dark:border-zinc-100/10"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="gradient-text font-semibold tracking-tight"
        >
          {site.name}
        </Link>
        <nav className="hidden gap-6 text-sm text-zinc-600 sm:flex dark:text-zinc-400">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a
          href={site.resumeFile}
          className="rounded-full bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500 bg-[length:150%_100%] bg-left px-4 py-1.5 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-right hover:shadow-lg hover:shadow-fuchsia-500/30"
          download
        >
          Résumé
        </a>
      </div>
    </header>
  );
}
