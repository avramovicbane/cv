import { achievements } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

const ACCENTS = [
  "from-indigo-500 to-violet-500",
  "from-fuchsia-500 to-pink-500",
  "from-cyan-500 to-blue-500",
];

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-4xl px-6 py-10">
      <Reveal>
        <h2 className="mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
          Key Achievements
        </h2>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-3">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 100} className="h-full">
            <div className="group h-full overflow-hidden rounded-xl border border-zinc-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-800 dark:hover:shadow-black/30">
              <div
                className={`h-1 w-full bg-linear-to-r ${ACCENTS[i % ACCENTS.length]}`}
              />
              <div className="p-5">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
