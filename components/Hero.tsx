"use client";

import Link from "next/link";
import { site } from "@/lib/site-config";
import { useT } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import HeroWorkflowCard from "@/components/HeroWorkflowCard";
import Stamp from "@/components/Stamp";
import { ArrowRight, LinkedIn, Mail } from "@/components/Icons";

export default function Hero() {
  const { t, href } = useT();
  const { hero } = t;

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div aria-hidden className="dot-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <Reveal immediate>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-surface py-1.5 pr-4 pl-2.5 text-xs font-medium text-ink-2">
              <span className="relative flex h-2 w-2 text-good">
                <span className="pulse-dot relative h-2 w-2 rounded-full bg-good" />
              </span>
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal immediate delay={80}>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.04] font-semibold tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl">
              {hero.headlineStart}{" "}
              <span className="marker font-serif font-normal italic">{hero.headlineAccent}</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-ink-2 sm:text-lg">
              {hero.intro}
            </p>
          </Reveal>

          <Reveal immediate delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={href("/work/")}
                className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-accent px-5 py-3 text-sm font-semibold text-on-accent shadow-[3px_3px_0_var(--ink)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--ink)]"
              >
                {hero.ctaWork}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-surface px-5 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--ink)]"
              >
                <Mail className="h-4 w-4" />
                {hero.ctaContact}
              </a>
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="wiggle flex h-11 w-11 items-center justify-center rounded-full text-ink-2 transition-colors duration-300 hover:bg-surface-2 hover:text-ink"
              >
                <LinkedIn className="h-[18px] w-[18px]" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Stamp
            text={hero.stamp}
            className="absolute -top-10 -right-3 z-10 h-24 w-24 sm:-top-12 sm:-right-8 sm:h-28 sm:w-28"
          />
          <HeroWorkflowCard />
        </Reveal>
      </div>
    </section>
  );
}
