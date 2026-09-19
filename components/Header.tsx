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
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/10 bg-white/80 backdrop-blur dark:border-zinc-100/10 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {site.name}
        </Link>
        <nav className="hidden gap-6 text-sm text-zinc-600 sm:flex dark:text-zinc-400">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={site.resumeFile}
          className="rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          download
        >
          Résumé
        </a>
      </div>
    </header>
  );
}
