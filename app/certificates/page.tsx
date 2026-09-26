import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Certificates from "@/components/Certificates";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Certificates in agile delivery, leadership and web development — and what I'm learning next.",
};

export default function CertificatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certificates"
        title="Always in"
        accent="the next sprint."
        intro="What I'm learning now, next and later — and what I've already finished. Click a certificate to open it."
      />
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Certificates />
        </div>
      </section>
    </>
  );
}
