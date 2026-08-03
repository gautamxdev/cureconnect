export const siteConfig = {
  name: "Cure Connect",
  wordmark: { cure: "Cure", connect: "Connect" },
  legalName: "PHDC PRIVATE LIMITED",
  founder: "Gauri Kolhe",
  founderTitle: "Founder, Cure Connect",
  email: "cureconnect.app@gmail.com",
  location: "Nashik, Maharashtra, India",
  launchCity: "Nashik",
  tagline: "Emergency Response and Daily Healthcare Platform",
  shortTagline: "Healthcare, Connected.",
  description:
    "Cure Connect is an integrated healthcare platform available on Android and iOS, designed to simplify access to healthcare services. Our platform connects patients, ambulances, hospitals, doctors, and diagnostic centers through a single ecosystem. We focus on reducing delays in emergency situations while improving everyday healthcare coordination.",
  vision:
    "Our vision is to make healthcare support more accessible, connected, and efficient across India — starting close to home and growing thoughtfully.",
  partnerRegistrationUrl: "https://cureconnecthospital.pages.dev/login",
  whatsappCommunityUrl:
    "https://chat.whatsapp.com/Lfjc3lKBhrL4qn9Chwjy3q?s=qt&p=i&ilr=0&amv=2",
  instagramUrl:
    "https://www.instagram.com/cureconnect.app?igsh=emRjeWx2ZWI0c2d3&utm_source=qr",
  platforms: ["Android", "iOS"] as const,
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Partner With Us", href: "/partner" },
    { label: "Our Story", href: "/story" },
    { label: "Contact Us", href: "/contact" },
  ],
  footerLegal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
  ],
} as const;
