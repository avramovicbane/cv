"use client";

import { useT } from "@/lib/i18n";
import PageHeader, { SectionTitle } from "@/components/PageHeader";
import CaseStudies from "@/components/CaseStudies";
import HowIWork from "@/components/HowIWork";

export default function WorkView() {
  const { t } = useT();

  return (
    <>
      <PageHeader {...t.work.header} />
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <CaseStudies />
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle>{t.work.how.title}</SectionTitle>
          <HowIWork />
        </div>
      </section>
    </>
  );
}
