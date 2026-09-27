"use client";

import Image from "next/image";
import {
  Ambulance,
  ArrowDown,
  CarFront,
  Download,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-24 lg:min-h-[100svh]">
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

      <div className="container-cc relative z-10 grid items-center gap-12 px-5 pb-14 pt-6 sm:pt-10 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20 lg:pt-6">
        <div>
          <div className="mb-5 sm:mb-7">
            <span className="inline-flex max-w-full flex-wrap items-center gap-y-1 rounded-full border border-white/15 bg-black/20 px-3.5 py-2 text-white backdrop-blur-md sm:px-5 sm:py-3">
              <span className="launch-pulse mr-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--cure-green-bright)] sm:mr-3 sm:h-3 sm:w-3" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.22em]">
                Live Now
              </span>
              <span className="mx-2.5 h-4 w-px bg-white/20 sm:mx-4 sm:h-5" />
              <span className="inline-flex items-center">
                <Download size={15} strokeWidth={1.7} className="mr-1.5 text-white/75 sm:mr-2" />
                <span className="text-[13px] text-white/70 sm:text-base">On Google Play</span>
              </span>
            </span>
          </div>

          <h1 className="font-display max-w-xl text-[2.15rem] font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Emergency Response
            <br />
            and Daily Healthcare
            <br />
            <span className="text-[var(--cure-green)]">Platform.</span>
          </h1>

          <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-white/65 sm:mt-6 sm:text-lg">
            Connecting patients, ambulances, hospitals, doctors, and diagnostic centers through
            one integrated healthcare ecosystem.
          </p>

          <div className="mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2">
            <a
              href={siteConfig.patientAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get the Cure Connect Patient App on Google Play"
              className="group flex min-h-[4.5rem] items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-3.5 backdrop-blur-xl transition-colors hover:border-[var(--cure-green)]/35 hover:bg-white/[0.1] sm:min-h-20 sm:p-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--cure-green)]/15 text-[var(--cure-green-bright)]">
                <UserRound size={25} strokeWidth={1.7} />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-[11px]">
                  Patient App
                </span>
                <span className="mt-0.5 block text-base font-semibold text-white sm:text-lg">
                  Get on Google Play
                </span>
              </span>
            </a>

            <a
              href={siteConfig.driverAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get the Cure Connect Driver App on Google Play"
              className="group flex min-h-[4.5rem] items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-3.5 backdrop-blur-xl transition-colors hover:border-[var(--cure-red)]/35 hover:bg-white/[0.1] sm:min-h-20 sm:p-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--cure-red)]/15 text-[#ff746d]">
                <CarFront size={25} strokeWidth={1.7} />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-[11px]">
                  Driver App
                </span>
                <span className="mt-0.5 block text-base font-semibold text-white sm:text-lg">
                  Get on Google Play
                </span>
              </span>
            </a>
          </div>

          <div className="mt-4 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <Button
              href={siteConfig.partnerRegistrationUrl}
              external
              variant="partner"
              className="min-h-[3.25rem] w-full text-base sm:min-h-14 sm:flex-1"
            />
            <Button
              href="#services"
              variant="ghost"
              className="min-h-[3.25rem] w-full text-base sm:min-h-14 sm:flex-1"
            >
              Explore Cure Connect
              <ArrowDown size={19} strokeWidth={1.7} />
            </Button>
          </div>
        </div>

        <div className="phone-wrap relative mx-auto w-full max-w-[280px] pb-10 sm:max-w-[360px] sm:pb-8 lg:max-w-[380px]">
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-[var(--cure-green)]/10 blur-3xl" />
          <div className="phone-frame phone-frame-dashboard relative overflow-hidden">
            <Image
              src="/images/app-dashboard-mobile.jpg"
              alt="Cure Connect mobile app dashboard"
              width={519}
              height={1024}
              className="block h-auto w-full"
              sizes="(max-width: 639px) 280px, (max-width: 1023px) 360px, 380px"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-1/2 z-10 flex w-[min(100%,18.5rem)] -translate-x-1/2 items-center justify-center gap-1.5 rounded-full border border-white/15 bg-[#040b08]/90 px-3 py-2 text-center text-[11px] leading-snug text-white/85 shadow-lg backdrop-blur-md sm:w-auto sm:gap-2 sm:whitespace-nowrap sm:px-3.5 sm:text-xs">
            <Ambulance size={14} className="shrink-0 text-[var(--cure-red)]" />
            <span>
              <span className="sm:hidden">
                Service focus: <span className="font-semibold text-white">Ambulance</span>
              </span>
              <span className="hidden sm:inline">
                Primary service:{" "}
                <span className="font-semibold text-white">Ambulance Services</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
