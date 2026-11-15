import Reveal from "@/components/Reveal";

/** Compact header for the inner pages (Work, Career, Certificates). */
export default function PageHeader({
  eyebrow,
  title,
  accent,
  intro,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
}) {
  return (
    <header className="relative overflow-hidden pt-32 pb-10 sm:pt-40 sm:pb-14">
      <div aria-hidden className="dot-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal immediate>
          <p className="font-mono text-xs tracking-widest text-accent-ink uppercase">{eyebrow}</p>
        </Reveal>
        <Reveal immediate delay={80}>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-ink sm:text-6xl">
            {title} <span className="marker font-serif font-normal italic">{accent}</span>
          </h1>
        </Reveal>
        <Reveal immediate delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">{intro}</p>
        </Reveal>
      </div>
    </header>
  );
}

/** A small in-page section title. */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{children}</h2>
    </Reveal>
  );
}
