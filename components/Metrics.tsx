import { metrics } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

export default function Metrics() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
      {metrics.map((m, i) => (
        <Reveal key={m.label} delay={i * 70} className="h-full">
          <div className="group relative h-full bg-surface p-5 transition-colors duration-300 hover:bg-surface-2/50 sm:p-7">
            <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500 transition-transform duration-500 group-hover:scale-x-100" />
            <p className="text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              <Counter value={m.value} />
            </p>
            <p className="mt-2 text-sm leading-snug text-muted">{m.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
