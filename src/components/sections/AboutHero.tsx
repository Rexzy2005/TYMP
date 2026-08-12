import Image from "next/image";
import { Play } from "lucide-react";

import { MotionSection } from "../ui/MotionSection";
import { HeroCta } from "../ui/HeroCta";
import { aboutHero, listenOn } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

function GlowBlobs() {
  return (
    <>
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          left: "8%",
          top: "12%",
          width: 460,
          height: 460,
          background: "#F17F3F",
          opacity: 0.3,
          filter: "blur(150px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          right: "6%",
          top: "8%",
          width: 400,
          height: 400,
          background: "#F17F3F",
          opacity: 0.16,
          filter: "blur(130px)",
        }}
        aria-hidden
      />
    </>
  );
}

function GlassPlayPill({ label }: { label: string }) {
  return (
    <div
      className="absolute left-1/2 bottom-6 z-10 flex -translate-x-1/2 items-center justify-between gap-3 rounded-full px-5 py-3 backdrop-blur-[10px]"
      style={{
        background: "rgba(255,255,255,0.2)",
        border: "1px solid rgba(255,255,255,0.3)",
        maxWidth: "calc(100% - 32px)",
        width: "max-content",
      }}
      aria-hidden
    >
      <span
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 600,
          fontSize: 24,
          lineHeight: "28.8px",
          letterSpacing: "-0.72px",
          color: "#FFFFFF",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <span
        className="grid shrink-0 place-items-center rounded-full"
        style={{
          width: 52,
          height: 52,
          background: "#FFFFFF",
        }}
      >
        <Play
          size={20}
          fill="#F17F3F"
          strokeWidth={0}
          style={{ marginLeft: 3 }}
        />
      </span>
    </div>
  );
}

function HeroStats() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8 lg:gap-12">
      {aboutHero.stats.map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <div className="flex items-baseline">
            <span
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 600,
                fontSize: 40,
                lineHeight: 1,
                letterSpacing: "-0.96px",
                color: "#111418",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: 40,
                lineHeight: 1,
                letterSpacing: "-0.96px",
                color: "#F17F3F",
              }}
            >
              {stat.suffix}
            </span>
          </div>
          <span
            className="mt-2"
            style={{
              fontFamily: BODY_FONT,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: "-0.64px",
              color: "#4E5255",
            }}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function ListenOn() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
      <span
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 600,
          fontSize: 24,
          lineHeight: "28.8px",
          letterSpacing: "-0.72px",
          color: "#111418",
        }}
      >
        Listen on
      </span>
      <div className="flex items-center gap-3 sm:gap-4">
        {listenOn.map((platform) => (
          <span
            key={platform.name}
            className="relative flex shrink-0 items-center justify-center rounded-full"
            style={{
              width: 44,
              height: 44,
              background:
                platform.name === "Spotify"
                  ? "#1ED760"
                  : platform.name === "Pocket Casts"
                  ? "#F17F3F"
                  : "rgba(0,0,0,0.06)",
            }}
            title={platform.name}
          >
            <Image
              src={platform.icon}
              alt={platform.name}
              fill
              className="object-contain"
              sizes="44px"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function AboutHero() {
  // Split the title into two lines: "Get to Know TYMP Amplifying" and "Ideas and Inspiring Minds"
  const titleLine1 = "Get to Know TYMP Amplifying";
  const titleLine2 = "Ideas and Inspiring Minds";

  return (
    <section className="relative bg-white">
      {/* ── Dark hero band ───────────────────────────────────────── */}
      <div className="relative flex min-h-[80vh] flex-col overflow-hidden bg-podhub-ink">
        <GlowBlobs />

        {/* Heading — centered in the upper portion */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-[14vh] pt-28 text-center sm:px-8 lg:pb-[34vh] lg:pt-32">
          <MotionSection className="mx-auto w-full" style={{ maxWidth: 1050 }}>
            {/* Title line 1 */}
            <h1
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(34px, 5.5vw, 64px)",
                lineHeight: 1.2,
                letterSpacing: "-0.04em",
                color: "#FFFFFF",
              }}
            >
              {titleLine1}
            </h1>

            {/* Title line 2 + underline */}
            <div className="relative inline-block">
              <h1
                style={{
                  fontFamily: TITLE_FONT,
                  fontWeight: 700,
                  fontSize: "clamp(34px, 5.5vw, 64px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                }}
              >
                {titleLine2}
              </h1>
              {/* Wavy orange underline under "Inspiring" */}
              <div className="pointer-events-none absolute" style={{ left: "46%", top: "100%", width: 244 }}>
                <Image
                  src={images.inspiredSectionLine}
                  alt=""
                  width={244}
                  height={16}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            <p
              className="mx-auto mt-5"
              style={{
                maxWidth: 645,
                fontFamily: BODY_FONT,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                letterSpacing: "-0.64px",
                color: "#CFD0D1",
              }}
            >
              {aboutHero.subtitle}
            </p>
            <div className="mt-8 flex justify-center lg:mt-10">
              <HeroCta label={aboutHero.cta.label} href={aboutHero.cta.href} variant="solid" />
            </div>
          </MotionSection>
        </div>
      </div>

      {/* ── White card — overlaps the hero's bottom edge ─────────── */}
      <MotionSection className="relative z-20 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        {/* Warm glow halo behind the card */}
        <div
          className="animate-glow-pulse pointer-events-none absolute left-1/2 top-0 z-0 h-[300px] w-[min(1000px,95%)] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(241,127,63,0.5) 0%, rgba(241,127,63,0.15) 45%, rgba(241,127,63,0) 75%)",
            filter: "blur(24px)",
          }}
          aria-hidden
        />
        <div
          className="card-float-hover group relative -mt-16 rounded-[16px] bg-white p-4 shadow-card-float sm:-mt-20 sm:p-6 lg:-mt-[40vh] lg:p-8"
          style={{ border: "1px solid rgba(241,127,63,0.12)" }}
        >
          {/* Image */}
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ height: "clamp(220px, 38vw, 487px)" }}
          >
            <Image
              src={aboutHero.image}
              alt="TYMP podcast hosts recording a conversation"
              fill
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
              sizes="(max-width: 1024px) 100vw, 1136px"
              priority
            />
            {/* Subtle depth gradient */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(25,20,16,0) 55%, rgba(25,20,16,0.28) 100%)",
              }}
              aria-hidden
            />
            <GlassPlayPill label={aboutHero.glassPill} />
          </div>

          {/* Stats + Listen on */}
          <div className="mt-6 flex flex-col gap-8 lg:mt-8 lg:flex-row lg:items-center lg:justify-between">
            <HeroStats />
            <ListenOn />
          </div>
        </div>
      </MotionSection>
    </section>
  );
}
