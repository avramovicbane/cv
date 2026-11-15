import type { Metadata } from "next";
import CertificatesView from "@/components/views/CertificatesView";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("sr", "certificates");

export default function Page() {
  return <CertificatesView />;
}
