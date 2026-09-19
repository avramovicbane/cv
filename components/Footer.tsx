import { site } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/10 py-8 dark:border-zinc-100/10">
      <div className="mx-auto max-w-4xl px-6 text-center text-sm text-zinc-500 sm:text-left dark:text-zinc-500">
        © {new Date().getFullYear()} {site.name}. Built with Next.js, hosted
        on GitHub Pages. <span className="text-pink-500">♥</span>
      </div>
    </footer>
  );
}
