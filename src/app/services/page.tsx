import type { Metadata } from "next";
import Image from "next/image";
import {
  Ambulance,
  Building2,
  FlaskConical,
  Network,
  Stethoscope,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Cure Connect healthcare services: emergency ambulance, doctor appointments, home diagnostics, and a connected healthcare ecosystem.",
};

const closingIcons = [
  { icon: Ambulance, label: "Ambulance", tone: "text-[#fca5a5]" },
  { icon: Stethoscope, label: "Doctors", tone: "text-[#fdba74]" },
  { icon: FlaskConical, label: "Diagnostics", tone: "text-[#fdba74]" },
  { icon: Building2, label: "Hospitals", tone: "text-[var(--cure-green-bright)]" },
] as const;

const journey = ["Request", "Connect", "Coordinate", "Reach Care"] as const;

const services = [
  {
    key: "ambulance",
    title: "Emergency Ambulance Services",
    description:
      "Our initial launch focus. Cure Connect aims to simplify the process of finding and connecting with ambulance services through technology, helping people access timely transportation support when it matters most.",
    icon: Ambulance,
    img: "/images/ambulance.jpg",
    tone: "border-[#ef4444]/30",
    iconTone: "bg-[#7f1d1d]/50 text-[#fca5a5]",
    featured: true,
  },
  {
    key: "doctor",
    title: "Doctor Appointments",
    description:
      "Make access to healthcare professionals more convenient through a simplified appointment experience that connects patients with the right care.",
    icon: Stethoscope,
    img: "/images/doctor.jpg",
    tone: "border-[#92400e]/40",
    iconTone: "bg-[#92400e]/40 text-[#fdba74]",
    featured: false,
  },
  {
    key: "diagnostics",
    title: "Home Diagnostics",
    description:
      "Access convenient diagnostic and laboratory services designed to make healthcare testing easier and more accessible from the comfort of home.",
    icon: FlaskConical,
    img: "/images/diagnostics.jpg",
    tone: "border-[#92400e]/40",
    iconTone: "bg-[#92400e]/40 text-[#fdba74]",
    featured: false,
  },
  {
    key: "network",
    title: "Connected Healthcare Ecosystem",
    description:
      "Bringing patients and healthcare providers together through one connected healthcare ecosystem — the foundation that ties every Cure Connect service together.",
    icon: Network,
    img: "/images/hospital.jpg",
    tone: "border-[var(--cure-green)]/30",
    iconTone: "bg-[var(--cure-green)]/20 text-[var(--cure-green-bright)]",
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero-pad relative overflow-hidden pb-12 md:pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(239,68,68,0.14),transparent_50%)]" />
        <div className="container-cc max-w-4xl px-5 md:px-8">
          <FadeIn>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cure-green)] md:text-sm">
              Our Healthcare Services
            </p>
            <h1 className="font-display text-[2.15rem] font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              One platform.
              <span className="mt-2 block text-gradient-green">
                Multiple healthcare connections.
              </span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="relative pb-8">
        <div className="container-cc space-y-8 px-5 md:px-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 === 1;
            return (
              <FadeIn key={service.key} delay={0.04 * index}>
                <article
                  className={`group grid overflow-hidden rounded-3xl border glass grid-cols-1 lg:grid-cols-2 ${service.tone} ${
                    service.featured
                      ? "ring-1 ring-[#ef4444]/25 shadow-[0_0_50px_-12px_rgba(239,68,68,0.4)]"
                      : ""
                  }`}
                >
                  <div
                    className={`relative min-h-[200px] sm:min-h-[240px] md:min-h-[300px] ${reverse ? "lg:order-2" : ""}`}
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040B08]/85 via-[#040B08]/40 to-transparent" />
                    {service.featured ? (
                      <span className="absolute left-4 top-4 rounded-full border border-[#ef4444]/50 bg-[#ef4444]/25 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#fca5a5] sm:left-6 sm:top-6 sm:px-3 sm:text-[10px] sm:tracking-[0.15em]">
                        Initial Launch Focus
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
                    <span
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.iconTone}`}
                    >
                      <Icon size={22} />
                    </span>
                    <h2 className="font-display text-2xl font-medium text-white md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                      {service.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-atmosphere">
        <div className="container-cc">
          <FadeIn>
            <h2 className="font-display text-3xl text-white md:text-4xl lg:text-5xl">
              How a connection works
            </h2>
            <p className="mt-4 text-white/60">
              A simple, coordinated journey from request to care.
            </p>
          </FadeIn>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, index) => (
              <FadeIn key={step} delay={0.05 * index}>
                <div className="glass h-full rounded-3xl p-5 sm:p-6 md:p-8">
                  <span className="font-display text-3xl font-bold text-[var(--cure-green)]/40 sm:text-4xl">
                    0{index + 1}
                  </span>
                  <p className="font-display mt-2 text-lg text-white sm:mt-3 sm:text-xl">{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden !pt-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(16,185,129,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(239,68,68,0.07),transparent_45%)]" />
        <div className="container-cc relative">
          <FadeIn>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0d1612]/95 to-[#07130e]/90 px-5 py-10 text-center shadow-[0_32px_80px_-24px_rgba(0,0,0,0.65)] sm:rounded-[2rem] sm:px-10 sm:py-14 md:px-14 md:py-16">
              <div className="pointer-events-none absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[var(--cure-green)]/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-12 -top-8 h-40 w-40 rounded-full bg-[#ef4444]/10 blur-3xl" />

              <div className="relative">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--cure-green)]/30 bg-[var(--cure-green)]/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--cure-green-bright)] sm:text-[11px]">
                  <Network size={12} />
                  One Ecosystem
                </span>

                <h2 className="font-display text-3xl font-medium leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                  Healthcare is better
                  <span className="mt-1 block text-gradient-green sm:mt-2">
                    when it is connected.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:mt-6 sm:text-lg">
                  Every service on Cure Connect works together — so patients, providers, and
                  caregivers move through care with less friction and more clarity.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
                  {closingIcons.map(({ icon: Icon, label, tone }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white/75 sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      <Icon size={15} className={tone} strokeWidth={1.75} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
