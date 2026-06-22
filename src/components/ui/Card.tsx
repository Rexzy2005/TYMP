import type { ReactNode } from "react";

type CardTone = "light" | "dark" | "outline";

type CardProps = {
  children: ReactNode;
  tone?: CardTone;
  className?: string;
  hoverable?: boolean;
};

const tones: Record<CardTone, string> = {
  light: "bg-white text-podhub-heading shadow-card",
  dark: "bg-podhub-ink-2 text-white border border-white/5",
  outline: "bg-transparent border border-podhub-line text-podhub-heading",
};

export function Card({
  children,
  tone = "light",
  className = "",
  hoverable = false,
}: CardProps) {
  const hover = hoverable
    ? "transition hover:-translate-y-1 hover:shadow-orange-glow"
    : "";
  return <div className={`rounded-2xl ${tones[tone]} ${hover} ${className}`}>{children}</div>;
}