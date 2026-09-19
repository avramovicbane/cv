import { experience } from "@/lib/site-config";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-10">
      <h2 className="mb-6 text-sm font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
        Experience
      </h2>
      <div className="flex flex-col gap-8">
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.role}`}
            className="border-l-2 border-zinc-200 pl-5 dark:border-zinc-800"
          >
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
              {job.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
