import type { Metadata } from "next";
import WorkView from "@/components/views/WorkView";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "work");

export default function Page() {
  return <WorkView />;
}
