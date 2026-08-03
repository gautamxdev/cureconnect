import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimer for Cure Connect and PHDC PRIVATE LIMITED.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Disclaimer" />
      <section className="section-pad !pt-2">
        <div className="container-cc mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-white/65">
          <p>
            The information provided on this website is for general informational purposes about
            Cure Connect and {siteConfig.legalName}.
          </p>
          <h2 className="font-display text-xl font-medium text-white">No Medical Advice</h2>
          <p>
            Cure Connect does not provide medical advice through this website. Content here should
            not be relied upon as a substitute for professional medical care. In an emergency,
            please contact local emergency services.
          </p>
          <h2 className="font-display text-xl font-medium text-white">Pre-Launch Status</h2>
          <p>
            Cure Connect is launching soon. Services described are planned offerings. We do not
            guarantee response times, availability, or coverage of any service unless expressly and
            officially confirmed.
          </p>
          <h2 className="font-display text-xl font-medium text-white">Contact</h2>
          <p>
            For clarification, contact{" "}
            <a className="text-[var(--cure-green)] hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
