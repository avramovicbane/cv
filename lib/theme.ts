// Runs as the first thing in <body>, before anything paints, so there is
// no flash of the wrong theme. <html> is marked suppressHydrationWarning
// since this script — not React — controls its class.
export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

/** Flips the .dark class on <html> and remembers the choice. */
export function toggleTheme() {
  const html = document.documentElement;
  const next = !html.classList.contains("dark");
  html.classList.toggle("dark", next);
  try {
    localStorage.setItem("theme", next ? "dark" : "light");
  } catch {
    // Storage can be unavailable (private mode, blocked site data) — the
    // toggle still works for this page view.
  }
}
