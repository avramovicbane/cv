// Languages the site is published in. English lives at the root
// (/work/), every other language under its own prefix (/sr/work/).

export const LANGS = ["en", "sr"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "en";

/** Value for <html lang> and hreflang. Serbian is written in Latin script. */
export const HTML_LANG: Record<Lang, string> = { en: "en", sr: "sr-Latn" };

/** Short label for the language switcher. */
export const LANG_LABEL: Record<Lang, string> = { en: "EN", sr: "SR" };
export const LANG_NAME: Record<Lang, string> = { en: "English", sr: "Srpski" };

/** "/work/" → "/work/" for English, "/sr/work/" for Serbian. */
export function localePath(lang: Lang, path: string): string {
  if (path.startsWith("#")) return path;
  return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}

/** Strips the language prefix: "/sr/work/" → "/work/". */
export function stripLang(pathname: string): string {
  for (const l of LANGS) {
    if (l === DEFAULT_LANG) continue;
    if (pathname === `/${l}` || pathname === `/${l}/`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
}

const MONTHS: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  sr: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
};

/** [2026, 11] → "Nov 2026" / "nov 2026". */
export function formatMonth(lang: Lang, date: [number, number]): string {
  return `${MONTHS[lang][date[1] - 1]} ${date[0]}`;
}

/** 4.5 → "4.5 h" / "4,5 h". */
export function formatHours(lang: Lang, hours: number): string {
  return `${String(hours).replace(".", lang === "sr" ? "," : ".")} h`;
}
