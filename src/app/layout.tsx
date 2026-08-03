import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#040b08",
};

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cureconnect.app"),
  title: {
    default: "Cure Connect | Connected Healthcare Platform | PHDC PRIVATE LIMITED",
    template: "%s | Cure Connect",
  },
  description:
    "Cure Connect is an integrated healthcare platform connecting patients, ambulances, hospitals, doctors, and diagnostic centers through one connected healthcare ecosystem. Launching soon.",
  keywords: [
    "Cure Connect",
    "Cure Connect healthcare",
    "Cure Connect Nashik",
    "Healthcare platform Nashik",
    "Ambulance services Nashik",
    "Healthcare technology India",
    "Emergency ambulance services",
    "Doctor appointment platform",
    "Home diagnostics",
    "Healthcare partners",
  ],
  openGraph: {
    title: "Cure Connect | Connected Healthcare Platform | PHDC PRIVATE LIMITED",
    description:
      "An integrated healthcare platform connecting patients, ambulances, hospitals, doctors, and diagnostic centers. Launching soon in Nashik.",
    type: "website",
    locale: "en_IN",
    siteName: "Cure Connect",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cure Connect | Connected Healthcare Platform",
    description:
      "Emergency Response and Daily Healthcare Platform by PHDC PRIVATE LIMITED. Launching soon in Nashik.",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
