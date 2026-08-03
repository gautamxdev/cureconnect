import { Ambulance, FlaskConical, Network, Stethoscope } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    title: "Emergency Ambulance Services",
    description:
      "Connect with ambulance services when timely emergency transportation matters most.",
    icon: Ambulance,
    tone: "red" as const,
    badge: "Initial Launch Focus",
  },
  {
    title: "Doctor Appointments",
    description:
      "Make access to healthcare professionals more convenient through a simplified appointment experience.",
    icon: Stethoscope,
    tone: "brown" as const,
  },
  {
    title: "Home Diagnostics",
    description:
      "Access convenient diagnostic and laboratory services designed to make healthcare testing easier and more accessible.",
    icon: FlaskConical,
    tone: "brown" as const,
  },
  {
    title: "Connected Healthcare Network",
    description:
      "Bringing patients and healthcare providers together through one connected healthcare ecosystem.",
    icon: Network,
    tone: "green" as const,
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="section-pad scroll-mt-24">
      <div className="container-cc">
        <FadeIn>
          <SectionHeading
            title="Healthcare Services, Connected in One Ecosystem"
            subtitle="From emergency support to everyday healthcare needs, Cure Connect is designed to simplify the way people access essential healthcare services."
          />
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.06 * index}>
              <GlassCard {...service} className="h-full min-h-[200px] sm:min-h-[220px]" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
