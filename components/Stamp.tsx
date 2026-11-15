/** A round, slowly spinning "sticker" with text set on a circle. */
export default function Stamp({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`flex items-center justify-center rounded-full border-[1.5px] border-ink bg-pop text-on-pop shadow-[3px_3px_0_var(--ink)] ${className}`}
    >
      <svg viewBox="0 0 120 120" className="spin-slow h-full w-full">
        <defs>
          <path id="stamp-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fill="currentColor" fontSize="9.6" fontWeight="700" letterSpacing="1.6" fontFamily="var(--font-sans)">
          <textPath href="#stamp-circle" textLength="270">
            {text}
          </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 24 24" className="absolute h-7 w-7" fill="currentColor">
        <path d="M12 1.5l2.6 7.9 7.9 2.6-7.9 2.6-2.6 7.9-2.6-7.9L1.5 12l7.9-2.6z" />
      </svg>
    </div>
  );
}
