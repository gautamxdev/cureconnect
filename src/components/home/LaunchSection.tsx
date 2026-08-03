import { MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";

export function LaunchSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.14),transparent_60%)]" />
      <div className="container-cc relative">
        <FadeIn>
          <div className="glass-green mx-auto max-w-4xl rounded-2xl px-5 py-10 text-center sm:rounded-[2rem] sm:px-12 sm:py-16">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--cure-green)]/40 bg-[var(--cure-green)]/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--cure-green-bright)]">
              <span className="launch-pulse h-1.5 w-1.5 rounded-full bg-[var(--cure-green-bright)]" />
              Launching Soon
            </span>
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
              Cure Connect is Launching Soon!
            </h2>
            <p className="mt-3 text-lg text-white/70">
              Starting our journey in {siteConfig.launchCity}.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
              We are preparing to bring Cure Connect&apos;s connected healthcare ecosystem to users,
              beginning with a focus on emergency ambulance services.
            </p>
            <p className="mt-8 text-sm font-medium text-white/85">
              Want to be part of our healthcare network?
            </p>
            <div className="mt-5 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                href={siteConfig.partnerRegistrationUrl}
                external
                variant="partner"
                className="w-full sm:w-auto"
              />
              <Button
                href={siteConfig.whatsappCommunityUrl}
                external
                variant="ghost"
                className="w-full sm:w-auto"
              >
                Join Our Community
                <MessageCircle size={16} />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
