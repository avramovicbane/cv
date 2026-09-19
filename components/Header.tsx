"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site-config";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href),
    ).filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
              className={`group relative py-1 transition-colors ${
                active === link.href
                  ? "text-zinc-900 dark:text-zinc-50"
                  : "hover:text-zinc-900 dark:hover:text-zinc-50"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500 transition-transform duration-300 ease-out ${
                  active === link.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={site.resumeFile}
            className="rounded-full bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500 bg-[length:150%_100%] bg-left px-4 py-1.5 text-sm font-medium whitespace-nowrap text-white transition-all duration-300 ease-out hover:bg-right hover:shadow-lg hover:shadow-fuchsia-500/30"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
