import type { Metadata } from "next";
import Image from "next/image";
import {
  Ambulance,
  Building2,
  CheckCircle2,
  Eye,
  FlaskConical,
  Network,
  Stethoscope,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Become a Cure Connect partner. Join hospitals, ambulance providers, doctors, and diagnostic centers building a connected healthcare ecosystem in Nashik.",
};

const partners = [
  {
    title: "Hospitals",
    description:
      "Connect with patients through a growing healthcare ecosystem and become part of Cure Connect's network.",
    icon: Building2,
    tone: "green" as const,
  },
  {
    title: "Ambulance Providers",
    description:
      "Join Cure Connect's emergency healthcare network and help make ambulance access more connected.",
    icon: Ambulance,
    tone: "red" as const,
  },
  {
    title: "Doctors",
    description:
      "Be part of a healthcare platform designed to simplify the connection between patients and healthcare professionals.",
    icon: Stethoscope,
    tone: "brown" as const,
  },
  {
    title: "Diagnostic Centers",
    description:
      "Join a connected healthcare ecosystem designed to make diagnostic services more accessible.",
    icon: FlaskConical,
    tone: "amber" as const,
  },
];

const whyPartner = [
  {
    text: "Become part of a growing healthcare ecosystem",
    icon: Network,
  },
  {
    text: "Increase your digital visibility",
    icon: Eye,
  },
  {
    text: "Connect with potential patients",
    icon: Users,
  },
  {
    text: "Build your presence on a technology-enabled platform",
    icon: TrendingUp,
  },
  {
    text: "Be part of Cure Connect's early healthcare network",
    icon: CheckCircle2,
  },
  {
    text: "Grow alongside an emerging healthcare technology platform",
    icon: Building2,
  },
];

export default function PartnerPage() {
  return (
    <>
      <section className="page-hero-pad relative overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hospital.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040B08]/85 via-[#040B08]/90 to-[#040B08]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.16),transparent_50%)]" />
        </div>
        <div className="container-cc max-w-4xl px-5 md:px-8">
          <FadeIn>
            <h1 className="font-display text-[2.15rem] font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Become a Cure
              <span className="mt-2 block text-gradient-green">Connect Partner</span>
            </h1>
            <p className="mt-6 font-display text-lg text-white/90 sm:mt-8 sm:text-xl md:text-2xl">
              Join us in building a more connected healthcare ecosystem.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:mt-5 sm:text-lg">
              Cure Connect is bringing together healthcare providers who share our vision of making
              healthcare access more connected, convenient, and efficient.
            </p>
            <div className="mt-8 sm:mt-9">
              <Button
                href={siteConfig.partnerRegistrationUrl}
                external
                variant="partner"
                className="w-full sm:w-auto"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad !pt-2">
        <div className="container-cc">
          <FadeIn>
            <SectionHeading align="left" title="Who we're inviting" />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            {partners.map((partner, index) => (
              <FadeIn key={partner.title} delay={0.05 * index}>
                <GlassCard {...partner} className="h-full !rounded-2xl !p-6 sm:!rounded-3xl sm:!p-8 md:!p-10" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-atmosphere !pt-4">
        <div className="container-cc">
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
            <FadeIn>
              <h2 className="font-display max-w-md text-[1.85rem] font-medium leading-[1.12] tracking-tight text-white sm:text-5xl md:text-[3.15rem]">
                Why Partner With Cure Connect?
              </h2>
            </FadeIn>
            <div className="grid gap-3 sm:grid-cols-2">
              {whyPartner.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.text} delay={0.04 * index}>
                    <div className="group flex h-full items-start gap-3 rounded-2xl border border-white/[0.08] bg-[#0d1612]/80 px-4 py-4 transition duration-300 hover:border-[var(--cure-green)]/25 hover:bg-[#101a16] sm:items-center sm:gap-4 sm:px-5 sm:py-5">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center text-[var(--cure-green-bright)] sm:h-10 sm:w-10">
                        <Icon size={20} strokeWidth={1.6} className="sm:hidden" />
                        <Icon size={22} strokeWidth={1.6} className="hidden sm:block" />
                      </span>
                      <p className="text-sm leading-snug text-white/85 sm:text-[15px]">{item.text}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad !pt-4">
        <div className="container-cc space-y-10">
          <FadeIn>
            <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-white/[0.08] bg-[#0a1410]/90 px-5 py-10 text-center sm:px-14 sm:py-16 md:px-20">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--cure-green)]">
                Building Our Network
              </p>
              <p className="font-display text-2xl font-medium leading-[1.35] text-white sm:text-3xl md:text-[2.15rem] md:leading-[1.4]">
                Cure Connect is currently building relationships with multispeciality hospitals and
                healthcare providers in Nashik as we prepare for launch.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#ef4444]/20 bg-gradient-to-b from-[#ef4444]/12 to-[#7f1d1d]/25 px-5 py-10 text-center sm:px-10 sm:py-14">
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
                Ready to build connected healthcare with us?
              </h2>
              <div className="mt-8 flex justify-center sm:mt-9">
                <Button
                  href={siteConfig.partnerRegistrationUrl}
                  external
                  variant="partner"
                  className="w-full max-w-sm sm:w-auto"
                />
              </div>
              <p className="mx-auto mt-5 max-w-xl text-sm text-white/55">
                Registration takes place through our dedicated partner registration platform.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
