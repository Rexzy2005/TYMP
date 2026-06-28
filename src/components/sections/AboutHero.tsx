import Image from "next/image";
import { Play } from "lucide-react";

import { MotionSection } from "../ui/MotionSection";
import { HeroCta } from "../ui/HeroCta";
import { aboutHero, listenOn } from "@/lib/content";

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
    <div className="absolute inset-0 z-10 flex items-center justify-center" aria-hidden>
      <div
        className="flex items-center gap-3 rounded-full px-5 py-3 backdrop-blur-md"
        style={{
          background: "rgba(255,255,255,0.2)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <span
          className="grid size-9 shrink-0 place-items-center rounded-full"
          style={{ background: "rgba(255,255,255,0.25)" }}
        >
          <Play size={14} fill="#FFFFFF" strokeWidth={0} className="ml-[2px] text-white" />
        </span>
        <span
          style={{
            fontFamily: TITLE_FONT,
            fontWeight: 600,
            fontSize: 24,
            lineHeight: "28.8px",
            letterSpacing: "-0.48px",
            color: "#FFFFFF",
          }}
        >
          {label}
        </span>
      </div>
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
                fontWeight: 700,
                fontSize: "clamp(36px, 3.4vw, 48px)",
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
                fontSize: "clamp(36px, 3.4vw, 48px)",
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

/* "Listen on" + icons sit in ONE horizontal row (matches the design) */
function ListenOn() {
  return (
    <div className="flex items-center gap-8">
      <span
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 600,
          fontSize: 24,
          lineHeight: "28.8px",
          letterSpacing: "-0.48px",
          color: "#111418",
        }}
      >
        Listen on
      </span>
      <div className="flex items-center gap-4">
        {listenOn.map((platform) => (
          <span key={platform.name} className="relative size-11 shrink-0" title={platform.name}>
            <Image src={platform.icon} alt={platform.name} fill className="object-contain" sizes="44px" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function AboutHero() {
  return (
    <section className="relative bg-podhub-ink">
      {/* ── Dark hero — fills the viewport (≈100vh) ────────── */}
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-podhub-ink">
        <GlowBlobs />

        {/* Heading — held in the upper portion so the card can overlap below it */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-[38vh] pt-28 text-center sm:px-8 lg:pt-32">
          <MotionSection className="mx-auto w-full" style={{ maxWidth: 1050 }}>
            <h1
              className="whitespace-pre-line"
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(34px, 5.5vw, 64px)",
                lineHeight: 1.2,
                letterSpacing: "-0.04em",
                color: "#FFFFFF",
              }}
            >
              {aboutHero.title}
            </h1>
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

      {/* ── White card — stacked onto the bottom of the dark hero ── */}
      <MotionSection className="relative z-20 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <div
          className="-mt-24 rounded-[16px] bg-white p-4 shadow-[0_-24px_60px_-24px_rgba(0,0,0,0.4)] sm:-mt-28 sm:p-6 lg:-mt-[36vh] lg:p-8"
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
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1136px"
              priority
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
