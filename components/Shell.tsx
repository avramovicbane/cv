import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import { HTML_LANG, localePath, type Lang } from "@/lib/lang";
import { content } from "@/lib/content";
import { SITE_URL, site } from "@/lib/site-config";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { LangProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import ContactBand from "@/components/ContactBand";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";
import "@/app/globals.css";

/** schema.org description of the person, read by search engines. */
function personJsonLd(lang: Lang): string {
  const { meta } = content[lang];
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: meta.role,
    description: meta.description,
    url: `${SITE_URL}${localePath(lang, "/")}`,
    image: `${SITE_URL}/og.png`,
    email: `mailto:${site.email}`,
    sameAs: [site.social.linkedin],
    worksFor: { "@type": "Organization", name: "Intellya" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Belgrade" },
    address: { "@type": "PostalAddress", addressLocality: "Belgrade", addressCountry: "RS" },
    knowsLanguage: ["sr", "en"],
  });
}

/** The <html> document shared by every language's root layout. */
export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={HTML_LANG[lang]} className="scroll-smooth antialiased" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd(lang) }} />
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
