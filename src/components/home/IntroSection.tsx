import { FadeIn } from "@/components/FadeIn";
import { EcosystemGraphic } from "@/components/EcosystemGraphic";
import { siteConfig } from "@/lib/site";

export function IntroSection() {
  return (
    <section id="about" className="section-pad bg-atmosphere scroll-mt-24">
      <div className="container-cc">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <FadeIn>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--cure-green)]">
              Healthcare, Connected.
            </p>
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              One ecosystem for everyday care and critical moments.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {siteConfig.platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70"
                >
                  {p}
                </span>
              ))}
              <span className="rounded-full border border-[var(--cure-green)]/25 bg-[var(--cure-green)]/10 px-3.5 py-1.5 text-xs font-medium text-[var(--cure-green-bright)]">
                Nashik, India
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <EcosystemGraphic compact />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
