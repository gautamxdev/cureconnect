import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { EmergencyFocus } from "@/components/home/EmergencyFocus";
import { WhyCureConnect } from "@/components/home/WhyCureConnect";
import { NetworkTrust } from "@/components/home/NetworkTrust";
import { LaunchSection } from "@/components/home/LaunchSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesPreview />
      <EmergencyFocus />
      <WhyCureConnect />
      <NetworkTrust />
      <LaunchSection />
    </>
  );
}
