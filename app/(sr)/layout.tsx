import type { Metadata, Viewport } from "next";
import Shell, { VIEWPORT_THEME } from "@/components/Shell";
import { rootMetadata } from "@/lib/metadata";

export const metadata: Metadata = rootMetadata("sr");
export const viewport: Viewport = { themeColor: VIEWPORT_THEME };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Shell lang="sr">{children}</Shell>;
}
