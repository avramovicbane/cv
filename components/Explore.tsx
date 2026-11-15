"use client";

import Link from "next/link";
import { certificates } from "@/lib/site-config";
import { fill } from "@/lib/content";
import { useT } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

export default function Explore() {
  const { t, href } = useT();

  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-8 md:grid-cols-3">
        {t.explore.map((item, i) => (
          <Reveal key={item.href} delay={i * 90} className="h-full">
            <Link
              href={href(item.href)}
              className="pop-card group flex h-full items-center justify-between gap-4 rounded-2xl p-6"
            >
              <div>
                <p className="font-display text-xl font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-ink-2">{fill(item.body, { total: certificates.length })}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink text-ink transition-all duration-300 group-hover:bg-accent group-hover:text-on-accent">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
