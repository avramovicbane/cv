import { site } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="flex items-center gap-2">
          Press
          <kbd className="rounded-md border border-line bg-surface px-1.5 py-0.5 font-mono text-[11px]">⌘K</kbd>
          to jump anywhere · Built with Next.js, hosted on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
