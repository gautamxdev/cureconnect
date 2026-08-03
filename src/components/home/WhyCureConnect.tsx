import {
  HeartHandshake,
  Layers,
  Network,
  Rocket,
  Siren,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    title: "Connected Healthcare Ecosystem",
    description:
      "Bringing patients and healthcare providers together through one integrated platform.",
    icon: Network,
    tone: "green" as const,
  },
  {
    title: "Emergency-Focused",
    description:
      "Starting with ambulance services to simplify access to emergency transportation.",
    icon: Siren,
    tone: "red" as const,
  },
  {
    title: "Technology-Enabled",
    description:
      "Using technology to make healthcare access and coordination more convenient.",
    icon: Sparkles,
    tone: "navy" as const,
  },
  {
    title: "Multiple Healthcare Services",
    description:
      "Bringing ambulance services, doctor appointments, and diagnostics together within one ecosystem.",
    icon: Layers,
    tone: "brown" as const,
  },
  {
    title: "Built for Growth",
    description:
      "Designed with a vision to expand healthcare accessibility across India.",
    icon: Rocket,
    tone: "navy" as const,
  },
  {
    title: "Healthcare Partnerships",
    description:
      "Working with healthcare providers to build a stronger and more connected healthcare network.",
    icon: HeartHandshake,
    tone: "green" as const,
  },
];

export function WhyCureConnect() {
  return (
    <section className="section-pad bg-atmosphere">
      <div className="container-cc">
        <FadeIn>
          <SectionHeading title="Why Cure Connect?" />
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <FadeIn key={item.title} delay={0.05 * index}>
              <GlassCard {...item} className="h-full" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
