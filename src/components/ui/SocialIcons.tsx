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
} from "lucide-react";

type SocialIconKey =
  | "x"
  | "instagram"
  | "youtube"
  | "tiktok"
  | "spotify"
  | "facebook"
  | "linkedin"
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
