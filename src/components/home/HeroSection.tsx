"use client";

import Image from "next/image";
import { Ambulance, ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-20 sm:pt-24">
      <div className="absolute inset-0">
        <Image
          src="/images/ambulance.jpg"
          alt=""
          fill
          priority
          className="scale-110 object-cover object-[60%_center] opacity-85"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040b08] from-0% via-[#040b08]/80 via-40% to-transparent to-100%" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040b08]/40 via-transparent to-[#040b08]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_35%,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_45%,rgba(239,68,68,0.05),transparent_35%)]" />
      </div>

      <div className="container-cc relative z-10 grid items-center gap-10 px-5 pb-16 pt-8 sm:gap-12 sm:pt-10 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20 lg:pt-6">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-7 sm:gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md sm:px-3.5 sm:text-xs sm:tracking-[0.16em]">
              <span className="launch-pulse h-1.5 w-1.5 rounded-full bg-[var(--cure-green)]" />
              Launching Soon
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-black/40 px-3 py-1.5 text-[11px] text-white/70 backdrop-blur-md sm:px-3.5 sm:text-xs">
              <MapPin size={12} className="text-[var(--cure-green)]" />
              Starting in Nashik
            </span>
          </div>

          <h1 className="font-display max-w-xl text-[2.15rem] font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Emergency Response
            <br />
            and Daily Healthcare
            <br />
            <span className="text-[var(--cure-green)]">Platform.</span>
          </h1>

          <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-white/65 sm:mt-6 sm:text-lg">
            Connecting patients, ambulances, hospitals, doctors, and diagnostic centers through
            one integrated healthcare ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
            <Button href="#services" variant="ghost" className="w-full sm:w-auto">
              Explore Cure Connect
              <ArrowDown size={16} />
            </Button>
          </div>
        </div>

        <div className="phone-wrap relative mx-auto w-full max-w-[280px] pb-10 sm:max-w-[360px] sm:pb-8 lg:max-w-[380px]">
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-[var(--cure-green)]/10 blur-3xl" />
          <div className="phone-frame relative overflow-hidden">
            <Image
              src="/images/app-dashboard-v3.png"
              alt="Cure Connect mobile app dashboard"
              width={481}
              height={1024}
              className="block h-auto w-full"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-1/2 z-10 flex w-[min(100%,18.5rem)] -translate-x-1/2 items-center justify-center gap-1.5 rounded-full border border-white/15 bg-[#040b08]/90 px-3 py-2 text-center text-[11px] leading-snug text-white/85 shadow-lg backdrop-blur-md sm:w-auto sm:gap-2 sm:whitespace-nowrap sm:px-3.5 sm:text-xs">
            <Ambulance size={14} className="shrink-0 text-[var(--cure-red)]" />
            <span>
              <span className="sm:hidden">
                Launch focus: <span className="font-semibold text-white">Ambulance</span>
              </span>
              <span className="hidden sm:inline">
                Focus at launch:{" "}
                <span className="font-semibold text-white">Ambulance Services</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
