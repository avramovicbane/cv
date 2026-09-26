import type { Metadata } from "next";
import PageHeader, { SectionTitle } from "@/components/PageHeader";
import CaseStudies from "@/components/CaseStudies";
import HowIWork from "@/components/HowIWork";

export const metadata: Metadata = {
  title: "Work",
  description: "Two case studies from AI products for banks, and how I run a product day to day.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Outcomes, not"
        accent="output."
        intro="Two things I shipped for banks — flip each one between before and after."
      />
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <CaseStudies />
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle>How I work: two loops, running all the time.</SectionTitle>
          <HowIWork />
        </div>
      </section>
    </>
  );
}
