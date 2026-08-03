"use client";

import { type FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";

const categories = [
  "Hospital",
  "Ambulance Provider",
  "Doctor",
  "Diagnostic Center",
  "General Question",
] as const;

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-white/12 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-white/35 focus:border-[var(--cure-green)]/50 focus:ring-1 focus:ring-[var(--cure-green)]/40";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const org = String(data.get("organization") || "");
    const category = String(data.get("category") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Cure Connect Partnership Inquiry — ${category}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org}\nCategory: ${category}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero-pad relative overflow-hidden pb-10 md:pb-14">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.16),transparent_45%)]" />
        <div className="container-cc max-w-4xl px-5 text-center md:px-8">
          <FadeIn>
            <h1 className="font-display text-[2.15rem] font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s
              <span className="mt-2 block text-gradient-green">Connect</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Have a partnership inquiry, collaboration opportunity, or question about Cure
              Connect? We&apos;d love to hear from you. Reach out any time.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad !pt-2">
        <div className="container-cc grid gap-6 md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <div className="glass h-full rounded-[1.75rem] p-6 sm:p-8">
              <h2 className="font-display text-2xl font-medium text-white">Cure Connect</h2>
              <p className="mt-1 text-sm text-white/45">{siteConfig.legalName}</p>
              <p className="mt-6 flex items-start gap-2 text-sm text-white/65">
                <MapPin size={16} className="mt-0.5 text-[var(--cure-green)]" />
                {siteConfig.location}
              </p>

              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-4 transition hover:border-[var(--cure-green)]/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--cure-green)]/15 text-[var(--cure-green)]">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
                    Email Us
                  </span>
                  <span className="text-sm break-all text-white/85">{siteConfig.email}</span>
                </span>
              </a>

              <div className="mt-5 space-y-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                  Community
                </p>
                <Button
                  href={siteConfig.whatsappCommunityUrl}
                  external
                  variant="ghost"
                  className="w-full"
                >
                  Join Our WhatsApp Community
                  <MessageCircle size={16} />
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="glass rounded-[1.75rem] p-6 sm:p-8"
              aria-label="Partnership Inquiry"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-white/55">
                  Your name
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm text-white/55">
                  Email address
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm text-white/55 sm:col-span-2">
                  Organization (optional)
                  <input
                    name="organization"
                    placeholder="Organization (optional)"
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm text-white/55 sm:col-span-2">
                  Category
                  <select
                    name="category"
                    required
                    defaultValue="Hospital"
                    className={fieldClass}
                  >
                    {categories.map((c) => (
                      <option key={c} value={c} className="bg-[#0b1411]">
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm text-white/55 sm:col-span-2">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className={`${fieldClass} resize-y`}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--cure-green)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-8px_rgba(16,185,129,0.55)] transition hover:brightness-110"
              >
                Send Message
              </button>
              {submitted ? (
                <p className="mt-3 text-center text-xs text-white/50">
                  Opening your email client to send the inquiry…
                </p>
              ) : null}
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
