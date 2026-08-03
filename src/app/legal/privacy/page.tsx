import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Cure Connect, operated by PHDC PRIVATE LIMITED.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section-pad !pt-2">
        <div className="container-cc mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-white/65">
          <p>
            This Privacy Policy explains how Cure Connect, operated by {siteConfig.legalName},
            approaches information shared with us through this website.
          </p>
          <h2 className="font-display text-xl font-medium text-white">Information We Collect</h2>
          <p>
            When you contact us or submit a partnership inquiry, we may collect the information you
            voluntarily provide, such as your name, email address, organization, and message. This
            website does not require account creation.
          </p>
          <h2 className="font-display text-xl font-medium text-white">How We Use Information</h2>
          <p>
            We use the information you share solely to respond to your inquiries, evaluate potential
            partnerships, and communicate with you about Cure Connect. We do not sell your
            information.
          </p>
          <h2 className="font-display text-xl font-medium text-white">Data Storage</h2>
          <p>
            Information submitted through our contact form is stored securely and retained only as
            long as necessary to serve the purpose for which it was provided.
          </p>
          <h2 className="font-display text-xl font-medium text-white">Third-Party Links</h2>
          <p>
            Our website may link to external platforms, including our dedicated partner registration
            website and social media. Those platforms operate under their own privacy policies.
          </p>
          <h2 className="font-display text-xl font-medium text-white">Contact</h2>
          <p>
            For any privacy-related questions, please email us at{" "}
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
