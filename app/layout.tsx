import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
