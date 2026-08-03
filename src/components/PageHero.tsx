import type { ReactNode } from "react";
import { FadeIn } from "@/components/FadeIn";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="page-hero-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-atmosphere" />
      <div className="container-cc relative px-5 pb-10 pt-8 md:px-8 md:pb-14">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow ? (
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cure-green)]">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {title}
            </h1>
            {subtitle ? (
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                {subtitle}
              </p>
            ) : null}
            {children}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
