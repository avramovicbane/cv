import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { HTML_LANG, LANGS, localePath } from "@/lib/lang";

export const dynamic = "force-static";

const PATHS = ["/", "/work/", "/career/", "/certificates/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    LANGS.map((lang) => ({
      url: `${SITE_URL}${localePath(lang, path)}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          LANGS.map((l) => [HTML_LANG[l], `${SITE_URL}${localePath(l, path)}`]),
        ),
      },
    })),
  );
}
