import { achievements } from "@/lib/site-config";

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-4xl px-6 py-10">
      <h2 className="mb-6 text-sm font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
        Key Achievements
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="h-full rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
