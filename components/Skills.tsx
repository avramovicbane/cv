import { skills } from "@/lib/site-config";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-10">
      <h2 className="mb-6 text-sm font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
        Skills
      </h2>
      <div className="flex flex-col gap-5">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
