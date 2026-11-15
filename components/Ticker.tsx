"use client";

import { useT } from "@/lib/i18n";

/** A slow band of headline facts between the hero and the numbers. */
export default function Ticker() {
  const { t } = useT();
  // Rendered twice so the -50% translate loops seamlessly.
  const run = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {t.ticker.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-5 font-display text-lg font-semibold tracking-tight sm:text-xl">{item}</span>
          <span aria-hidden className="text-pop">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee overflow-hidden border-y-[1.5px] border-ink bg-ink py-3.5 text-bg dark:border-line dark:bg-surface dark:text-ink">
      <div className="marquee-track flex w-max">
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}
