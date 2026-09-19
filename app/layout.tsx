import type { Metadata } from "next";
import Script from "next/script";
import { site } from "@/lib/site-config";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundImage from "@/components/BackgroundImage";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
};

// Applies the saved (or system) theme before the page paints, so there is
// no flash of the wrong theme. Runs before hydration; the <html> element
// is marked suppressHydrationWarning below since this script — not
// React — controls its class.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        <BackgroundImage />
        <ScrollProgress />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
