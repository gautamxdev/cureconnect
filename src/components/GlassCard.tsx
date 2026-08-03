import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Tone = "red" | "brown" | "green" | "navy" | "amber";

const toneClass: Record<Tone, string> = {
  red: "glass-red",
  brown: "glass-brown",
  amber: "glass-amber",
  green: "glass-green",
  navy: "glass",
};

type GlassCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: Tone;
  badge?: string;
  children?: ReactNode;
  className?: string;
};

export function GlassCard({
  title,
  description,
  icon: Icon,
  tone = "navy",
  badge,
  children,
  className = "",
}: GlassCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.4)] sm:p-7 ${toneClass[tone]} ${className}`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/5 blur-2xl transition group-hover:bg-white/10" />
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-black/25 text-white">
          <Icon size={20} strokeWidth={1.7} />
        </div>
        {badge ? (
          <span className="shrink-0 rounded-full border border-white/20 bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="font-display text-xl font-medium text-white sm:text-[1.35rem]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{description}</p>
      {children}
    </article>
  );
}
