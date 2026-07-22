import Image from "next/image";
import Link from "next/link";

interface SiteLogoProps {
  /**
   * "light" uses the reversed lockup (white wordmark + tagline) for dark
   * backgrounds; "dark" uses the brand colours (#69226F wordmark, black
   * tagline) for light backgrounds.
   */
  variant?: "light" | "dark";
  /** Rendered height of the lockup in px — width follows the 447:113 ratio */
  height?: number;
  className?: string;
  /** Render as a plain image instead of a link back to the homepage */
  asLink?: boolean;
}

// Official lockup exported from the Turbologo source file, cropped to artwork
// bounds. Ratio is fixed at 447 x 113.
const RATIO = 447 / 113;

export default function SiteLogo({
  variant = "light",
  height = 44,
  className = "",
  asLink = true,
}: SiteLogoProps) {
  const src =
    variant === "light"
      ? "/images/logo-full-light.svg"
      : "/images/logo-full.svg";

  const image = (
    <Image
      src={src}
      alt="SkillKwiz — How much do you know?"
      width={Math.round(height * RATIO)}
      height={height}
      priority
      className="w-auto object-contain"
      style={{ height }}
    />
  );

  if (!asLink) {
    return <span className={`inline-flex shrink-0 ${className}`}>{image}</span>;
  }

  return (
    <Link
      href="/"
      aria-label="SkillKwiz home"
      className={`inline-flex items-center shrink-0 ${className}`}
    >
      {image}
    </Link>
  );
}
