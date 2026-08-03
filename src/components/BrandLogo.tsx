import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  size?: "sm" | "md";
  className?: string;
};

export function BrandLogo({ href = "/", size = "md", className = "" }: BrandLogoProps) {
  const iconHeight = size === "sm" ? 40 : 48;
  const iconWidth = Math.round(iconHeight * 1.12);
  const iconClass =
    size === "sm" ? "h-9 w-auto sm:h-10" : "h-9 w-auto sm:h-11 md:h-12";
  const text = size === "sm" ? "text-base" : "text-base sm:text-lg md:text-xl";

  const content = (
    <>
      <Image
        src="/images/logo-transparent.png"
        alt="Cure Connect logo"
        width={iconWidth}
        height={iconHeight}
        className={`shrink-0 object-contain ${iconClass}`}
        priority
      />
      <span className={`font-display ${text} font-semibold tracking-tight`}>
        <span className="text-white">Cure</span>
        <span className="text-[var(--cure-green)]">Connect</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <span className={`inline-flex min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}
      aria-label="Cure Connect home"
    >
      {content}
    </Link>
  );
}
