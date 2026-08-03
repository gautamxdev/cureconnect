import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Meet Gauri Kolhe, Founder of Cure Connect — an integrated healthcare platform by PHDC PRIVATE LIMITED.",
};

export default function StoryPage() {
  return (
    <>
      <section className="page-hero-pad relative overflow-hidden pb-10 md:pb-14">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.14),transparent_50%)]" />
        <div className="container-cc max-w-4xl px-5 text-center md:px-8">
          <FadeIn>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cure-green)] md:text-sm">
              Our Story
            </p>
            <h1 className="font-display text-[2.15rem] font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Meet the
              <span className="mt-2 block text-gradient-green">Founder</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad !pt-2">
        <div className="container-cc">
          <FadeIn>
            <div className="glass mx-auto grid max-w-4xl overflow-hidden rounded-2xl sm:rounded-[2rem] md:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-full">
                <Image
                  src="/images/founder.jpg"
                  alt={`${siteConfig.founder}, ${siteConfig.founderTitle}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
                  {siteConfig.founder}
                </h2>
                <p className="mt-2 text-sm font-medium text-[var(--cure-green)]">
                  {siteConfig.founderTitle}
                </p>
                <p className="mt-1 text-sm text-white/40">{siteConfig.legalName}</p>
                <p className="mt-6 text-base leading-relaxed text-white/65">
                  Cure Connect was founded by Gauri Kolhe with a vision to create a more connected
                  approach to healthcare access. Through Cure Connect, the goal is to bring
                  essential healthcare services and providers together through technology, making
                  the healthcare journey more coordinated and accessible.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-14 text-center">
              <p className="font-display text-xl text-white/80 sm:text-2xl md:text-3xl">
                Join us as we build a more connected healthcare future.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
