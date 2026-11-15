import type { Metadata } from "next";
import { content } from "@/lib/content";
import { HTML_LANG, LANGS, localePath, type Lang } from "@/lib/lang";
import { BASE_PATH, SITE_URL, site } from "@/lib/site-config";

type PageKey = keyof (typeof content)["en"]["meta"]["pages"];

const PAGE_PATH: Record<PageKey, string> = {
  work: "/work/",
  career: "/career/",
  certificates: "/certificates/",
};

/** Canonical URL plus hreflang links to the same page in every language. */
function alternates(lang: Lang, path: string): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[HTML_LANG[l]] = `${SITE_URL}${localePath(l, path)}`;
  languages["x-default"] = `${SITE_URL}${path}`;
  return { canonical: `${SITE_URL}${localePath(lang, path)}`, languages };
}

/** Site-wide metadata, used by each language's root layout. */
export function rootMetadata(lang: Lang): Metadata {
  const { meta } = content[lang];
  const title = `${site.name} — ${meta.role}, ${meta.roleDetail}`;
  return {
    metadataBase: new URL("https://avramovicbane.github.io"),
    title: { default: title, template: `%s — ${site.name}` },
    description: meta.description,
    alternates: alternates(lang, "/"),
    openGraph: {
      type: "profile",
      url: `${SITE_URL}${localePath(lang, "/")}`,
      title,
      description: meta.description,
      locale: lang === "sr" ? "sr_RS" : "en_US",
      images: [{ url: `${BASE_PATH}/og.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.description,
      images: [`${BASE_PATH}/og.png`],
    },
  };
}

/** Metadata for one inner page in one language. */
export function pageMetadata(lang: Lang, page: PageKey): Metadata {
  const { title, description } = content[lang].meta.pages[page];
  return { title, description, alternates: alternates(lang, PAGE_PATH[page]) };
}
