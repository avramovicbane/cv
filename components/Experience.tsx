import { experience } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

const DOT_COLORS = [
  "bg-indigo-500",
  "bg-fuchsia-500",
  "bg-cyan-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-rose-500",
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-10">
      <Reveal>
        <h2 className="mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
          Experience
        </h2>
      </Reveal>
      <div className="flex flex-col gap-8">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}`} delay={i * 80}>
            <div className="group relative rounded-lg border-l-2 border-zinc-200 py-1 pl-5 transition-colors duration-300 hover:border-transparent dark:border-zinc-800">
              <span
                className={`absolute top-2 -left-[5px] h-2 w-2 rounded-full ${DOT_COLORS[i % DOT_COLORS.length]} transition-transform duration-300 group-hover:scale-150`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-500">
                  {job.period}
                </span>
              </div>
              {job.location && (
                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-500">
                  {job.location}
                </p>
              )}
              <ul className="mt-3 flex flex-col gap-1.5">
                {job.bullets.map((bullet, bi) => (
                  <li
                    key={bi}
                    className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
