import type { ReactNode } from "react";

type TagTone = "neutral" | "accent" | "dark" | "success";

type TagProps = {
  children: ReactNode;
  tone?: TagTone;
  className?: string;
};

const tones: Record<TagTone, string> = {
  neutral: "bg-podhub-orange-soft text-podhub-orange-dark",
  accent: "bg-podhub-orange text-white",
  dark: "bg-podhub-ink text-white",
  success: "bg-podhub-success/15 text-podhub-success",
};

export function Tag({ children, tone = "neutral", className = "" }: TagProps) {
  return (
    <span
      className={`font-copy inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-normal tracking-[-0.28px] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
