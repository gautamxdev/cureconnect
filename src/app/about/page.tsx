import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cure Connect, an integrated healthcare technology platform operated by PHDC PRIVATE LIMITED, launching soon in Nashik.",
};

const chapters = [
  {
    num: "01",
    title: "Who We Are",
    body: "Cure Connect is an integrated healthcare technology platform operated by PHDC PRIVATE LIMITED. We are building a connected healthcare ecosystem that brings essential services and providers together in one place.",
  },
  {
    num: "02",
    title: "What We Do",
    body: "Our platform connects patients, ambulances, hospitals, doctors, and diagnostic centers through a single ecosystem. We focus on reducing delays in emergency situations while improving everyday healthcare coordination.",
  },
  {
    num: "03",
    title: "Our Vision",
    body: siteConfig.vision,
  },
  {
    num: "04",
    title: "Our Approach",
    body: "We use technology to make healthcare access and coordination more convenient, beginning with emergency ambulance services and expanding into everyday care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero-pad relative overflow-hidden pb-12 md:pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.14),transparent_50%)]" />
        <div className="container-cc max-w-4xl px-5 text-center md:px-8">
          <FadeIn>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cure-green)] md:text-sm">
              About Cure Connect
            </p>
            <h1 className="font-display text-[2.15rem] font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              An integrated
              <br />
              healthcare platform,
              <br />
              <span className="text-gradient-green">built to connect care.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Cure Connect is an integrated healthcare platform available on Android and iOS,
              designed to simplify access to healthcare services. Our platform connects patients,
              ambulances, hospitals, doctors, and diagnostic centers through a single ecosystem.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad !pt-2">
        <div className="container-cc grid gap-5 md:grid-cols-2">
          {chapters.map((item, index) => (
            <FadeIn key={item.title} delay={0.05 * index}>
              <article className="glass h-full rounded-[1.5rem] p-6 sm:p-8">
                <p className="mb-3 font-display text-sm text-[var(--cure-green)]">{item.num}</p>
                <h2 className="font-display text-2xl font-medium text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
                  {item.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-pad bg-atmosphere !pt-4">
        <div className="container-cc">
          <FadeIn>
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--cure-green)]">
                  Our Direction
                </p>
                <h2 className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
                  Built With a Vision for Connected Healthcare
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                  Cure Connect is being developed with a long-term vision to create a more connected
                  healthcare ecosystem where accessing essential healthcare support can be simpler,
                  more coordinated, and more efficient.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] sm:aspect-[5/4] lg:aspect-[4/3]">
                <Image
                  src="/images/hospital-night.jpg"
                  alt="Modern hospital medical center illuminated at night"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040B08]/45 via-transparent to-transparent" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
