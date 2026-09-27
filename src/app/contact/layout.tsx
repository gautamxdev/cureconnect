import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: "/contact" },
  description:
    "Contact Cure Connect and PHDC PRIVATE LIMITED for partnership inquiries and collaboration opportunities across India.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
