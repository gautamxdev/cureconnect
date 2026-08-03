"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Ambulance,
  Building2,
  FlaskConical,
  Stethoscope,
  UserRound,
} from "lucide-react";

const HUB = { x: 50, y: 50 };
const ORBIT_R = 33;
/** Hub + satellite radii in viewBox units (100×100). */
const HUB_R = 12.5;
const SAT_R = 6;

type SatelliteTone = {
  color: string;
  glow: string;
  border: string;
};

const satellites = [
  {
    id: "patient",
    label: "Patient",
    icon: UserRound,
    angle: -90,
    tone: { color: "#45d5a6", glow: "rgba(69,213,166,0.4)", border: "rgba(69,213,166,0.45)" },
  },
  {
    id: "ambulance",
    label: "Ambulance",
    icon: Ambulance,
    angle: -18,
    tone: { color: "#e74c3c", glow: "rgba(231,76,60,0.38)", border: "rgba(231,76,60,0.45)" },
  },
  {
    id: "hospital",
    label: "Hospital",
    icon: Building2,
    angle: 54,
    tone: { color: "#1b9d75", glow: "rgba(27,157,117,0.38)", border: "rgba(27,157,117,0.45)" },
  },
  {
    id: "doctor",
    label: "Doctor",
    icon: Stethoscope,
    angle: 126,
    tone: { color: "#f39c12", glow: "rgba(243,156,18,0.38)", border: "rgba(243,156,18,0.45)" },
  },
  {
    id: "diagnostic",
    label: "Diagnostic",
    icon: FlaskConical,
    angle: 198,
    tone: { color: "#f1c40f", glow: "rgba(241,196,15,0.38)", border: "rgba(241,196,15,0.45)" },
  },
] as const;

function polarToXY(angleDeg: number, radius: number, cx = HUB.x, cy = HUB.y) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

type EcosystemGraphicProps = {
  className?: string;
  compact?: boolean;
};

export function EcosystemGraphic({ className = "", compact = false }: EcosystemGraphicProps) {
  const reduceMotion = useReducedMotion();

  const nodes = satellites.map((sat) => ({
    ...sat,
    ...polarToXY(sat.angle, ORBIT_R),
  }));

  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0d0c] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:rounded-[1.75rem] sm:p-6 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.14),transparent_58%)]" />
      <p className="relative mb-3 px-1 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40 sm:mb-5 sm:text-[10px] sm:tracking-[0.18em]">
        One Connected Healthcare Ecosystem
      </p>

      <div
        className={`relative mx-auto w-full px-2 pb-5 pt-1 sm:px-3 sm:pb-4 ${compact ? "aspect-square max-w-[min(100%,20rem)] sm:max-w-lg" : "aspect-square max-w-[min(100%,22rem)] sm:max-w-xl"}`}
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          {nodes.map((node, index) => {
            const dx = node.x - HUB.x;
            const dy = node.y - HUB.y;
            const len = Math.hypot(dx, dy) || 1;
            const ux = dx / len;
            const uy = dy / len;
            const x1 = HUB.x + ux * HUB_R;
            const y1 = HUB.y + uy * HUB_R;
            const x2 = node.x - ux * SAT_R;
            const y2 = node.y - uy * SAT_R;

            return (
              <g key={node.id}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.35"
                />
                <line
                  className={reduceMotion ? undefined : "connection-line"}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="0.4"
                  strokeLinecap="round"
                  style={
                    reduceMotion
                      ? undefined
                      : { animationDelay: `${index * 0.22}s` }
                  }
                />
              </g>
            );
          })}
        </svg>

        <motion.div
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex h-[4.25rem] w-[4.25rem] flex-col items-center justify-center gap-0 rounded-full border border-[var(--cure-green)]/35 bg-[#0d1a14] text-center shadow-[0_0_48px_rgba(16,185,129,0.4)] sm:h-24 sm:w-24 md:h-[6.5rem] md:w-[6.5rem]">
            <span className="font-display text-[11px] leading-[1.1] text-white sm:text-sm md:text-[15px]">
              Cure
            </span>
            <span className="font-display text-[11px] leading-[1.1] text-[var(--cure-green-bright)] sm:text-sm md:text-[15px]">
              Connect
            </span>
          </div>
        </motion.div>

        {nodes.map((node, index) => {
          const Icon = node.icon;
          const tone = node.tone as SatelliteTone;

          return (
            <motion.div
              key={node.id}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * index, duration: 0.45 }}
            >
              <div className="relative flex flex-col items-center">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full border bg-[#121a16] sm:h-12 sm:w-12 md:h-14 md:w-14"
                  style={{
                    borderColor: tone.border,
                    color: tone.color,
                    boxShadow: `0 0 24px ${tone.glow}`,
                  }}
                >
                  <Icon size={14} strokeWidth={1.75} className="sm:hidden" />
                  <Icon size={22} strokeWidth={1.75} className="hidden sm:block" />
                </div>
                <span className="mt-1 max-w-[3.5rem] text-center text-[9px] font-medium leading-tight text-white/80 sm:mt-2 sm:max-w-none sm:text-xs sm:whitespace-nowrap md:text-[13px]">
                  {node.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
