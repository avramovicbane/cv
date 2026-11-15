"use client";

import Image from "next/image";
import Link from "next/link";
import { certificates, isNewCert } from "@/lib/site-config";
import { fill } from "@/lib/content";
import { useT } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

// Which of the new certificates to fan out, back to front (file names in
// public/certs). Picked for a mix of colours.
const SPOTLIGHT = ["pm-strategy-plan", "intro-claude-tag", "claude-101", "intro-mcp", "claude-code-in-action"];

// Position and tilt of each card in the fan.
const FAN = [
  "left-[0%] top-[14%] -rotate-[9deg]",
  "left-[13%] top-[5%] -rotate-[4deg]",
  "left-[26%] top-[0%] rotate-[1deg]",
  "left-[39%] top-[6%] rotate-[5deg]",
  "left-[50%] top-[15%] rotate-[9deg]",
];

/** Home-page spotlight for this year's certificates. */
export default function FreshCerts() {
  const { t, href } = useT();
  const { fresh } = t;
  const fresh_count = certificates.filter(isNewCert).length;
  const cards = SPOTLIGHT.map((file) => certificates.find((c) => c.image.endsWith(`/${file}.webp`))).filter(
    (c) => c !== undefined,
  );

  return (
    <section className="overflow-hidden py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-accent-ink uppercase">{fresh.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-5xl">
            {fresh.title} <span className="marker font-serif font-normal italic">{fresh.accent}</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink-2 sm:text-lg">
            {fill(fresh.body, { new: fresh_count, total: certificates.length })}
          </p>

          <dl className="mt-7 flex gap-8">
            {[
              { n: fresh_count, label: fresh.newLabel },
              { n: certificates.length, label: fresh.totalLabel },
            ].map((s) => (
              <div key={s.label}>
                <dd className="font-display text-5xl leading-none font-semibold text-ink tabular-nums">{s.n}</dd>
                <dt className="mt-1.5 text-sm text-muted">{s.label}</dt>
              </div>
            ))}
          </dl>

          <Link
            href={href("/certificates/")}
            className="group mt-8 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-ink px-5 py-3 text-sm font-semibold text-bg transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--accent)]"
          >
            {fresh.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={150}>
          <Link
            href={href("/certificates/")}
            aria-label={fresh.cta}
            className="group/fan relative block aspect-[16/10] w-full"
          >
            {cards.map((c, i) => (
              <span
                key={c.image}
                className={`absolute block w-[50%] overflow-hidden rounded-xl border-[1.5px] border-ink bg-surface shadow-[4px_4px_0_var(--ink)] transition-all duration-300 hover:z-10 hover:-translate-y-4 hover:scale-105 hover:rotate-0 ${FAN[i]}`}
              >
                <Image
                  src={c.image}
                  alt=""
                  width={c.size[0]}
                  height={c.size[1]}
                  loading="lazy"
                  className="aspect-[4/3] h-auto w-full object-cover object-top"
                />
              </span>
            ))}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
