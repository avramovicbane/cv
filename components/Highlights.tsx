import { highlights } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const ACCENTS = [
  "from-indigo-500 to-violet-500",
  "from-fuchsia-500 to-pink-500",
  "from-cyan-500 to-blue-500",
  "from-amber-500 to-orange-500",
];

export default function Highlights() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-800/10 bg-zinc-50 dark:border-zinc-100/10 dark:bg-zinc-900/40">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
        {highlights.map((item, i) => (
          <Reveal key={item.label} delay={i * 100}>
            <div className="group text-center transition-transform duration-300 hover:-translate-y-1 sm:text-left">
              <div
                className={`bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent ${ACCENTS[i % ACCENTS.length]}`}
              >
                <Counter value={item.value} />
              </div>
              <p className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
