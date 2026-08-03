"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#040b08]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-cc flex items-center justify-between gap-2 px-4 py-2.5 sm:gap-4 sm:px-5 sm:py-3.5 md:px-8">
        <BrandLogo className="min-w-0 shrink" />

        <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-2.5 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--cure-green)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040b08] xl:px-3.5 ${
                isActive(item.href)
                  ? "text-white"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-[var(--cure-green)] shadow-[0_0_10px_rgba(16,185,129,0.8)] xl:left-4 xl:right-4" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            href={siteConfig.partnerRegistrationUrl}
            external
            variant="partner"
            className="hidden lg:inline-flex"
          />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white sm:h-11 sm:w-11 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-y-auto transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[min(85vh,32rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="container-cc flex flex-col gap-1 border-t border-white/10 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-5"
          aria-label="Mobile"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-4 py-3.5 text-base font-medium ${
                isActive(item.href)
                  ? "bg-[var(--cure-green)]/15 text-white"
                  : "text-white/75 hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button
            href={siteConfig.partnerRegistrationUrl}
            external
            variant="partner"
            className="mt-3 w-full"
          />
        </nav>
      </div>
    </header>
  );
}
