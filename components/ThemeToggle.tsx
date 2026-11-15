"use client";

import { toggleTheme } from "@/lib/theme";
import { useT } from "@/lib/i18n";

/**
 * No React state needed: both icons are always in the DOM and the `dark:`
 * variant (driven by the .dark class on <html>, set before hydration in
 * layout.tsx) decides which one shows.
 */
export default function ThemeToggle() {
  const { t } = useT();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.nav.theme}
      title={t.nav.theme}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface/60 text-ink-2 transition-all duration-300 hover:rotate-12 hover:border-ink hover:text-ink"
    >
      {/* Moon: shown in light mode — click to go dark */}
      <svg
        className="theme-icon h-4 w-4 dark:hidden"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      {/* Sun: shown in dark mode — click to go light */}
      <svg
        className="theme-icon hidden h-4 w-4 dark:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </button>
  );
}
