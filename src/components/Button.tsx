import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "emergency" | "ghost" | "outline" | "partner";

type ButtonProps = {
  children?: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--cure-green)] text-white shadow-[0_10px_40px_-8px_rgba(16,185,129,0.55)] hover:brightness-110",
  emergency:
    "bg-gradient-to-br from-[#e5534b] to-[#b82d24] text-white shadow-[0_8px_32px_-4px_rgba(229,83,75,0.55),0_0_24px_-6px_rgba(184,45,36,0.45)] hover:brightness-110",
  partner:
    "border border-black/35 bg-gradient-to-b from-[#ea5c54] via-[#d9433a] to-[#b82d24] text-white shadow-[0_4px_20px_-4px_rgba(229,83,75,0.28),0_0_12px_-6px_rgba(184,45,36,0.2)] hover:brightness-105 hover:shadow-[0_6px_24px_-4px_rgba(229,83,75,0.32),0_0_14px_-5px_rgba(184,45,36,0.22)]",
  secondary: "glass-brown text-white hover:brightness-110",
  ghost:
    "bg-white/[0.04] text-white border border-white/20 hover:bg-white/[0.08] hover:border-white/30",
  outline:
    "border border-[var(--cure-green)]/45 text-white hover:bg-[var(--cure-green)]/10",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  onClick,
}: ButtonProps) {
  const isPartner = variant === "partner";

  const classes = [
    "inline-flex items-center justify-center rounded-full text-sm tracking-wide transition-all duration-300 active:scale-[0.98]",
    isPartner
      ? "gap-2 px-4 py-2.5 font-medium sm:gap-2.5 sm:px-6 sm:py-3"
      : "gap-2 px-5 py-3 font-semibold sm:px-6 sm:py-3.5",
    variants[variant],
    className,
  ].join(" ");

  const content = isPartner ? (
    <>
      <span className="text-sm font-medium tracking-wide sm:text-[15px]">Become a Partner</span>
      <ArrowRight size={18} strokeWidth={1.5} className="shrink-0 opacity-90" />
    </>
  ) : (
    children
  );

  const isHash = href.startsWith("#");
  const isMailOrTel = href.startsWith("mailto:") || href.startsWith("tel:");

  if (external || isMailOrTel) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  if (isHash) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
