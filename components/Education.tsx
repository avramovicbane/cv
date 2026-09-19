import { education } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-10">
      <Reveal>
        <h2 className="mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
          Education
        </h2>
      </Reveal>
      <div className="flex flex-col gap-4">
        {education.map((item, i) => (
          <Reveal key={item.school} delay={i * 80}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.degree}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {item.school}
                </p>
              </div>
              <span className="text-sm text-zinc-500 dark:text-zinc-500">
                {item.period}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
