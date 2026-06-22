type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "light",
}: SectionHeaderProps) {
  const centered = align === "center";
  const textColor = tone === "dark" ? "text-white" : "text-podhub-ink";
  const mutedColor = tone === "dark" ? "text-white/64" : "text-podhub-muted";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold text-podhub-orange">{eyebrow}</p> : null}
      <h2 className={`text-3xl font-bold leading-tight md:text-4xl ${textColor}`}>{title}</h2>
      {text ? <p className={`mt-4 text-sm leading-6 md:text-base ${mutedColor}`}>{text}</p> : null}
    </div>
  );
}
