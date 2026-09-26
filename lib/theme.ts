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
