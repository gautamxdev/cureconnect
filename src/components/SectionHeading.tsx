import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 md:mb-14 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left"}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cure-green)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{subtitle}</p>
      ) : null}
      {children}
    </div>
  );
}
