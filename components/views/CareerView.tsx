"use client";

import { useT } from "@/lib/i18n";
import PageHeader, { SectionTitle } from "@/components/PageHeader";
import Career from "@/components/Career";
import Skills from "@/components/Skills";

export default function CareerView() {
  const { t } = useT();

  return (
    <>
      <PageHeader {...t.career.header} />
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Career />
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle>{t.career.toolkit}</SectionTitle>
          <Skills />
        </div>
      </section>
    </>
  );
}
