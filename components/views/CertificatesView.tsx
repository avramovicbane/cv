"use client";

import { useT } from "@/lib/i18n";
import PageHeader from "@/components/PageHeader";
import Certificates from "@/components/Certificates";

export default function CertificatesView() {
  const { t } = useT();

  return (
    <>
      <PageHeader {...t.certs.header} />
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Certificates />
        </div>
      </section>
    </>
  );
}
