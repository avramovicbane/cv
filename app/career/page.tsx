import type { Metadata } from "next";
import PageHeader, { SectionTitle } from "@/components/PageHeader";
import Career from "@/components/Career";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Career",
  description: "From teaching web development, to sales, to SAP programmes, to AI products for banks.",
};

export default function CareerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Release notes"
        accent="of a career."
        intro="Teaching, sales, SAP consulting, then AI for banks — every version added something."
      />
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Career />
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle>Toolkit</SectionTitle>
          <Skills />
        </div>
      </section>
    </>
  );
}
