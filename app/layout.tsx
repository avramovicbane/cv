import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import { site, SITE_URL, BASE_PATH } from "@/lib/site-config";
import Nav from "@/components/Nav";
import ContactBand from "@/components/ContactBand";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const defaultTitle = `${site.name} — ${site.role}, ${site.roleDetail}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://avramovicbane.github.io"),
  title: { default: defaultTitle, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/`,
    title: defaultTitle,
    description: site.description,
    images: [{ url: `${BASE_PATH}/og.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    images: [`${BASE_PATH}/og.png`],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#070910" },
  ],
};

// Applies the saved (or system) theme before the page paints, so there is
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <ScrollProgress />
        <Nav />
        <main className="flex-1">{children}</main>
        <ContactBand />
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
