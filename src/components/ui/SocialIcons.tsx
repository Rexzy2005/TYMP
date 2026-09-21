import {
  X,
  Music,
  Headphones,
  Radio,
  Rss,
  Video,
  Link,
  Camera,
  Globe,
  createLucideIcon,
} from "lucide-react";

const Threads = createLucideIcon("Threads", [
  ["path", { d: "M16.6 8.7c-.8-2.4-2.6-3.8-5.1-3.8-3.9 0-6.5 3-6.5 7.1 0 4.3 2.8 7.1 7 7.1 3.3 0 5.8-1.8 5.8-4.5 0-2.3-1.8-3.8-4.8-3.8h-1.2", key: "th-main" }],
  ["path", { d: "M18.8 10.1c-1.4-1.2-3.5-1.9-6.4-1.9", key: "th-top" }],
  ["path", { d: "M14.2 13.5c-.4 1.3-1.4 2.1-2.7 2.1-1.4 0-2.5-.9-2.5-2.2 0-1.2 1-2 2.8-2h1.1", key: "th-loop" }],
]);

type SocialIconKey =
  | "x"
  | "instagram"
  | "youtube"
  | "tiktok"
  | "spotify"
  | "facebook"
  | "linkedin"
  | "threads"
  | "rss";

type SocialIconProps = {
  name: SocialIconKey | string;
  size?: number;
  className?: string;
};

/* Platform-specific icon using Lucide wherever possible. */
export function SocialIcon({ name, size = 18, className = "" }: SocialIconProps) {
  const props = { size, className };

  switch (name) {
    case "x":
      return <X {...props} />;
    case "instagram":
      return <Camera {...props} />;
    case "youtube":
      return <Video {...props} />;
    case "tiktok":
      return <Video {...props} />;
    case "spotify":
      return <Music {...props} />;
    case "facebook":
      return <Globe {...props} />;
    case "linkedin":
      return <Link {...props} />;
    case "threads":
      return <Threads {...props} />;
    case "rss":
      return <Rss {...props} />;
    default:
      return null;
  }
}

type SocialIconListProps = {
  names: string[];
  size?: number;
  tone?: "light" | "dark";
  className?: string;
};

export function SocialIconList({
  names,
  size = 16,
  tone = "light",
  className = "",
}: SocialIconListProps) {
  const toneClass =
    tone === "light"
      ? "bg-white/10 text-white hover:bg-podhub-orange hover:text-white"
      : "bg-podhub-cream text-podhub-ink hover:bg-podhub-orange hover:text-white";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {names.map((n) => (
        <a
          key={n}
          href="#"
          aria-label={n}
          className={`grid place-items-center rounded-full transition ${toneClass}`}
          style={{ width: size + 16, height: size + 16 }}
        >
          <SocialIcon name={n} size={size} />
        </a>
      ))}
    </div>
  );
}
