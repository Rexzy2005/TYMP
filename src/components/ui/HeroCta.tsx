import { ArrowUpRight } from "lucide-react";

/* ---------------------------------------------------------------------------
   HeroCta — the reusable pill CTA used across the site.
   Matches the hero buttons exactly (design guide):
     height 56, label Urbanist 700 / 16px / -0.32px,
     trailing 44px circle with a 45deg up-right arrow.

   variant "solid":  orange fill, white label, white circle + dark arrow
   variant "outline": transparent, orange border, label color via prop,
                      orange circle + white arrow
--------------------------------------------------------------------------- */
type HeroCtaProps = {
  label: string;
  href: string;
  variant?: "solid" | "outline";
  labelColor?: string;
  borderColor?: string;
  className?: string;
};

export function HeroCta({
  label,
  href,
  variant = "solid",
  labelColor,
  borderColor,
  className = "",
}: HeroCtaProps) {
  const isSolid = variant === "solid";

  return (
    <a
      href={href}
      className={`box-border inline-flex h-[56px] items-center gap-4 rounded-full py-[6px] pl-6 pr-[6px] transition ${
        isSolid ? "hover:bg-[#d9662a]" : "hover:opacity-90"
      } ${className}`}
      style={{
        background: isSolid ? "#F17F3F" : "transparent",
        border: isSolid ? "1px solid #F17F3F" : `1px solid ${borderColor ?? "#F17F3F"}`,
        boxShadow: isSolid ? "0 14px 40px -12px rgba(241,127,63,0.55)" : "none",
        fontFamily: "var(--font-urbanist), Urbanist, sans-serif",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "16px",
        letterSpacing: "-0.32px",
        color: isSolid ? "#FFFFFF" : labelColor ?? "#111418",
      }}
    >
      <span className="whitespace-nowrap">{label}</span>
      <span
        className="grid size-11 shrink-0 place-items-center rounded-full"
        style={{ background: isSolid ? "#FFFFFF" : "#F17F3F" }}
      >
        <ArrowUpRight
          size={18}
          strokeWidth={2.5}
          style={{ color: isSolid ? "#111418" : "#FFFFFF" }}
        />
      </span>
    </a>
  );
}
