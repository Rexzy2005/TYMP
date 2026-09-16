import Image from "next/image";

import { images } from "@/lib/assets";

type HeroListenersBadgeProps = {
  value: string;
  label: string;
};

export function HeroListenersBadge({ value, label }: HeroListenersBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {[
          { img: images.clientOne, alt: "Listener 1" },
          { img: images.clientTwo, alt: "Listener 2" },
          { img: images.clientThree, alt: "Listener 3" },
        ].map(({ img, alt }) => (
          <div key={alt} className="relative size-[50px] overflow-hidden rounded-full">
            <Image src={img} alt={alt} fill className="object-cover" sizes="50px" />
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <span
          className="text-left text-white"
          style={{
            fontFamily: "var(--font-urbanist), Urbanist, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "30px",
            letterSpacing: "-0.4px",
            color: "#FFFFFF",
          }}
        >
          {value}
        </span>
        <span
          className="text-left"
          style={{
            fontFamily: "var(--font-urbanist), Urbanist, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "30px",
            letterSpacing: "-0.4px",
            color: "#FFFFFF",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

type HeroPodcastCardProps = {
  title: string;
  host: string;
};

export function HeroPodcastCard({ title }: HeroPodcastCardProps) {
  return (
    <div className="relative h-[144px] w-[279px] overflow-hidden rounded-2xl" style={{ background: "#FFFFFF" }}>
      <Image src={images.podcastPlayerCard} alt={title} fill className="object-cover" sizes="279px" />
    </div>
  );
}

type HeroStatsCardProps = {
  value: string;
  label: string;
};

export function HeroStatsCard({ value, label }: HeroStatsCardProps) {
  return (
    <div className="relative flex h-[90px] w-[229px] items-center gap-3 overflow-hidden rounded-2xl p-3" style={{ background: "#FFFFFF" }}>
      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl" style={{ background: "#FCF4D4" }}>
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-podhub-orange"
          aria-hidden
        >
          <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
          <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
          <circle cx="12" cy="12" r="2" />
          <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
          <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className="text-left"
          style={{
            fontFamily: "var(--font-urbanist), Urbanist, sans-serif",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "28.8px",
            letterSpacing: "-0.72px",
            color: "#111418",
          }}
        >
          {value}
        </span>
        <span
          className="text-left"
          style={{
            fontFamily: "var(--font-public-sans), Public Sans, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "-0.64px",
            color: "#4E5255",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

type HeroVisualProps = {
  podcastCard: { title: string; host: string };
  statsCard: { value: string; label: string };
};

export function HeroVisual({ podcastCard, statsCard }: HeroVisualProps) {
  return (
    <div className="relative aspect-[634/632] w-full max-w-[634px]">
      {/* Orange blurred glow — tight spread, sits behind the human */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          left: "20.5%",
          top: "44.3%",
          width: "59.9%",
          height: "53.8%",
          background: "#EAB819",
          opacity: 0.85,
          filter: "blur(70px)",
        }}
      />

      {/* Hero photo — 615x629, anchored to the bottom */}
      <div
        className="pointer-events-none absolute"
        style={{ right: 0, bottom: 0, width: "97%", height: "99.5%" }}
      >
        <Image
          src={images.hero}
          alt="PodHub host"
          width={615}
          height={629}
          priority
          className="h-full w-full object-cover"
          sizes="615px"
        />
      </div>

      {/* Decorative icon above head */}
      <div
        className="pointer-events-none absolute z-[1]"
        style={{ left: "25.1%", top: "3%", width: "7.9%", height: "7.9%" }}
      >
        <Image
          src={images.heroIcon}
          alt=""
          width={50}
          height={50}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Podcast card — bottom-left */}
      <div className="absolute z-10 origin-bottom-left scale-[0.78] sm:scale-90 lg:scale-100" style={{ left: 0, bottom: "6.6%" }}>
        <HeroPodcastCard title={podcastCard.title} host={podcastCard.host} />
      </div>

      {/* Stats card — overlapping */}
      <div className="absolute z-10 origin-top-right scale-[0.76] sm:scale-90 lg:scale-100" style={{ right: "0.5%", top: "45.9%" }}>
        <HeroStatsCard value={statsCard.value} label={statsCard.label} />
      </div>
    </div>
  );
}
