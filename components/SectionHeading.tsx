import Reveal from "@/components/Reveal";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-widest text-accent-ink uppercase">
          <span>{index}</span>
          <span className="h-px w-8 bg-accent/50" />
          <span>{eyebrow}</span>
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display text-3xl leading-[1.1] font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          {title}
          {accent && (
            <>
              {" "}
              <span className="font-serif font-normal italic">{accent}</span>
            </>
          )}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p className="mt-5 text-base leading-relaxed text-pretty text-ink-2 sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
