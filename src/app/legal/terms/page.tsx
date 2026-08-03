import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for the Cure Connect organization website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="section-pad !pt-2">
        <div className="container-cc mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-white/65">
          <p>
            These Terms & Conditions govern your use of the Cure Connect organization website
            operated by {siteConfig.legalName}.
          </p>
          <h2 className="font-display text-xl font-medium text-white">Website Use</h2>
          <p>
            This website is provided for informational purposes to introduce Cure Connect and its
            upcoming services. By using this website, you agree to use it lawfully and respectfully.
          </p>
          <h2 className="font-display text-xl font-medium text-white">Pre-Launch Information</h2>
          <p>
            Cure Connect is preparing for launch. Information on this website describes intended
            services and vision and may evolve as the platform develops.
          </p>
          <h2 className="font-display text-xl font-medium text-white">Partnerships</h2>
          <p>
            Partnership opportunities are facilitated through our separate, dedicated partner
            registration platform. Submitting an inquiry does not constitute a binding agreement.
          </p>
          <h2 className="font-display text-xl font-medium text-white">Intellectual Property</h2>
          <p>
            The Cure Connect name, logo, and content on this website are the property of{" "}
            {siteConfig.legalName} and may not be used without permission.
          </p>
          <h2 className="font-display text-xl font-medium text-white">Contact</h2>
          <p>
            For questions about these terms, please email{" "}
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
