import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonVariant = "solid" | "ghost" | "dark" | "light" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  trailingArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const base =
  "font-display inline-flex items-center justify-center gap-2 rounded-full font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-podhub-orange/40";

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

const variants: Record<ButtonVariant, string> = {
  solid:
    "bg-podhub-orange text-white shadow-orange-glow hover:bg-podhub-orange-dark",
  ghost:
    "border border-white/20 bg-transparent text-white hover:border-podhub-orange hover:text-podhub-orange",
  dark:
    "bg-podhub-ink text-white hover:bg-podhub-ink-2",
  light:
    "bg-white text-podhub-ink hover:bg-podhub-orange-soft",
  outline:
    "border border-podhub-line bg-white text-podhub-ink hover:border-podhub-orange hover:text-podhub-orange",
};

export function Button({
  children,
  variant = "solid",
  size = "md",
  href,
  className = "",
  trailingArrow = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const arrow = trailingArrow ? (
    <ArrowRight
      size={14}
      strokeWidth={2.5}
      className={
        variant === "solid"
          ? "text-podhub-orange"
          : "text-white/80 group-hover:text-podhub-orange"
      }
    />
  ) : null;

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
      {arrow}
    </button>
  );
}
