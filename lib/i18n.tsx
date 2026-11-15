"use client";

import { createContext, useContext } from "react";
import { content, type Content } from "@/lib/content";
import { DEFAULT_LANG, localePath, type Lang } from "@/lib/lang";

const LangContext = createContext<Lang>(DEFAULT_LANG);

/** Set once per root layout: app/(en) is English, app/(sr) is Serbian. */
export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang(): Lang {
  return useContext(LangContext);
}

/** The page text in the current language, plus a helper for internal links. */
export function useT(): { t: Content; lang: Lang; href: (path: string) => string } {
  const lang = useLang();
  return { t: content[lang], lang, href: (path) => localePath(lang, path) };
}
