import type { Metadata } from "next";
import CareerView from "@/components/views/CareerView";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("sr", "career");

export default function Page() {
  return <CareerView />;
}
