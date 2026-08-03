"use client";

import { Ambulance, Building2, HeartPulse, Siren } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
const steps = [
  { label: "Emergency", icon: Siren, tone: "red" },
  { label: "Cure Connect", icon: HeartPulse, tone: "green" },
  { label: "Ambulance", icon: Ambulance, tone: "red" },
  { label: "Hospital", icon: Building2, tone: "green" },
] as const;

export function EmergencyFocus() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-pad bg-emergency relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-[var(--cure-red)]/15 blur-[100px]" />
        <div className="absolute bottom-10 right-1/5 h-52 w-52 rounded-full bg-[var(--cure-green)]/15 blur-[90px]" />
      </div>

      <div className="container-cc relative">
        <FadeIn>
          <div className="mx-auto mb-4 flex justify-center">
            <span className="rounded-full border border-[var(--cure-red)]/35 bg-[var(--cure-red)]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#fca5a5]">
              Initial Launch Focus
            </span>
          </div>
          <h2 className="font-display mx-auto max-w-3xl text-center text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-[2.65rem]">
            Starting With Emergency Healthcare
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-white/60">
            At launch, Cure Connect is focusing on emergency ambulance services, with the goal of
            helping people access timely transportation support when it matters most.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-white/55">
            Healthcare emergencies can be stressful and time-sensitive. Cure Connect aims to
            simplify the process of finding and connecting with ambulance services through
            technology.
          </p>
        </FadeIn>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-stretch gap-0 md:mt-12 md:flex-row md:items-stretch md:justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className="flex w-full flex-col items-center md:w-auto md:flex-1 md:flex-row"
              >
                <motion.div
                  className={`flex w-full max-w-xs flex-row items-center gap-3 rounded-2xl px-4 py-3.5 sm:max-w-sm sm:gap-3.5 sm:px-5 sm:py-4 md:mx-auto md:max-w-[170px] md:flex-col md:items-center md:gap-3 md:py-5 ${
                    step.tone === "red" ? "glass-red" : "glass-green"
                  }`}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Icon size={22} className="shrink-0 text-white" />
                  <span className="text-sm font-semibold text-white">{step.label}</span>
                </motion.div>
                {index < steps.length - 1 ? (
                  <>
                    <div className="my-1 h-5 w-px bg-gradient-to-b from-white/30 to-white/5 md:hidden" />
                    <div className="mx-1 hidden h-px flex-1 bg-gradient-to-r from-white/30 to-white/10 md:block" />
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
