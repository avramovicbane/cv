import { site } from "@/lib/site-config";
import { GitHub, LinkedIn } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 lg:flex">
            <kbd className="rounded-md border border-line bg-surface px-1.5 py-0.5 font-mono text-[11px]">⌘K</kbd>
            to jump anywhere
          </span>
          <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink">
            <GitHub />
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink">
            <LinkedIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
