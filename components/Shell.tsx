import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import { HTML_LANG, type Lang } from "@/lib/lang";
import { LangProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import ContactBand from "@/components/ContactBand";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";
import "@/app/globals.css";

// Runs as the first thing in <body>, before anything paints, so there is
// no flash of the wrong theme. <html> is marked suppressHydrationWarning
// since this script — not React — controls its class.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

/** The <html> document shared by every language's root layout. */
export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={HTML_LANG[lang]} className="scroll-smooth antialiased" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <LangProvider lang={lang}>
          <ScrollProgress />
          <Nav />
          <main className="flex-1">{children}</main>
          <ContactBand />
          <Footer />
          <CommandPalette />
        </LangProvider>
      </body>
    </html>
  );
}

export const VIEWPORT_THEME = [
  { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
  { media: "(prefers-color-scheme: dark)", color: "#100f0d" },
];
