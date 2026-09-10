import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";

import { MotionSection } from "../ui/MotionSection";
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
          left: "12%",
          top: "10%",
          width: 480,
          height: 480,
          background: "#F17F3F",
          opacity: 0.28,
          filter: "blur(140px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          right: "10%",
          top: "15%",
          width: 420,
          height: 420,
          background: "#F17F3F",
          opacity: 0.18,
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
      className="absolute left-1/2 bottom-8 z-10 flex -translate-x-1/2 items-center justify-between gap-4 rounded-full px-6 py-3.5 backdrop-blur-md shadow-lg"
      style={{
        background: "rgba(255, 255, 255, 0.22)",
        border: "1px solid rgba(255, 255, 255, 0.35)",
        maxWidth: "calc(100% - 32px)",
      }}
      aria-hidden
    >
      <span
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 600,
          fontSize: "clamp(16px, 2.2vw, 22px)",
          lineHeight: 1.2,
          letterSpacing: "-0.5px",
          color: "#FFFFFF",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <span
        className="grid shrink-0 place-items-center rounded-full shadow-sm"
        style={{
          width: 46,
          height: 46,
          background: "#FFFFFF",
        }}
      >
        <Play
          size={18}
          fill="#F17F3F"
          strokeWidth={0}
          className="ml-0.5"
        />
      </span>
    </div>
  );
}

function HeroStatsCard() {
  return (
    <div
      className="relative z-30 mx-auto w-full max-w-[1040px] rounded-[24px] bg-white px-6 py-8 sm:px-12 sm:py-10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-black/[0.04]"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 text-center sm:text-left">
        {aboutHero.stats.map((stat, idx) => (
          <div key={stat.label} className={`flex flex-col items-center sm:items-start ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-8 lg:pl-12" : ""}`}>
            <div className="flex items-baseline">
              <span
                style={{
                  fontFamily: TITLE_FONT,
                  fontWeight: 700,
                  fontSize: "clamp(40px, 4.5vw, 54px)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "#111418",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: TITLE_FONT,
                  fontWeight: 700,
                  fontSize: "clamp(40px, 4.5vw, 54px)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "#111418",
                }}
              >
                {stat.suffix}
              </span>
            </div>
            <span
              className="mt-3"
              style={{
                fontFamily: BODY_FONT,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                letterSpacing: "-0.4px",
                color: "#4E5255",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ListenOn() {
  return (
    <div className="mt-14 mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
      <span
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 600,
          fontSize: 22,
          lineHeight: "28px",
          letterSpacing: "-0.5px",
          color: "#111418",
        }}
      >
        Listen on
      </span>
      <div className="flex items-center gap-3 sm:gap-4">
        {listenOn.map((platform) => (
          <span
            key={platform.name}
            className="relative flex shrink-0 items-center justify-center rounded-full transition-transform hover:scale-105 shadow-sm"
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
              className="object-contain p-2"
              sizes="44px"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function AboutHero() {
  return (
    <section className="relative bg-white">
      {/* ── Dark Hero Banner ───────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-podhub-ink pb-28 pt-32 sm:pb-36 sm:pt-40 lg:pb-44 lg:pt-44">
        <GlowBlobs />

        <div className="relative z-10 mx-auto w-full max-w-[1040px] px-6 text-center sm:px-8">
          <MotionSection>
            {/* Title Line 1 & Line 2 */}
            <h1
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(36px, 6vw, 64px)",
                lineHeight: 1.15,
                letterSpacing: "-0.035em",
                color: "#FFFFFF",
              }}
            >
              Get to Know TYMP Amplifying<br />
              <span className="relative inline-block">
                Ideas and{" "}
                <span className="relative inline-block">
                  Inspiring
                  <span
                    className="pointer-events-none absolute left-0 top-[88%] h-[12px] w-[140px] sm:w-[170px]"
                    aria-hidden
                  >
                    <Image
                      src={images.inspiredSectionLine}
                      alt=""
                      width={170}
                      height={12}
                      className="h-full w-full object-contain"
                      priority
                    />
                  </span>
                </span>
                {" "}Minds
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="mx-auto mt-6"
              style={{
                maxWidth: 645,
                fontFamily: BODY_FONT,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "26px",
                letterSpacing: "-0.4px",
                color: "#CFD0D1",
              }}
            >
              {aboutHero.subtitle}
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center sm:mt-10">
              <a
                href={aboutHero.cta.href}
                className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-[#F17F3F] pl-6 pr-2 text-base font-semibold text-white shadow-[0_4px_25px_rgba(241,127,63,0.45)] transition-all duration-300 hover:bg-[#ff8f52] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{aboutHero.cta.label}</span>
                <span className="grid size-10 place-items-center rounded-full bg-white text-[#111418] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </span>
              </a>
            </div>
          </MotionSection>
        </div>
      </div>

      {/* ── Overlapping Floating Stats Card ───────────────────────── */}
      <div className="relative z-20 mx-auto -mt-16 w-full max-w-[1240px] px-6 sm:-mt-20 sm:px-8 lg:-mt-24 lg:px-0">
        <MotionSection>
          <HeroStatsCard />
        </MotionSection>
      </div>

      {/* ── Wide Studio Photo Card ─────────────────────────────────── */}
      <div className="relative z-10 mx-auto mt-8 w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        <MotionSection>
          <div
            className="group relative w-full overflow-hidden rounded-[24px] bg-white p-2 sm:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            style={{ border: "4px solid #FFFFFF" }}
          >
            <div className="relative aspect-[16/9] sm:aspect-[2.1/1] w-full overflow-hidden rounded-[20px]">
              <Image
                src={aboutHero.image}
                alt="TYMP podcast hosts recording conversation in studio"
                fill
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1240px) 100vw, 1240px"
                priority
              />
              <GlassPlayPill label={aboutHero.glassPill} />
            </div>
          </div>
        </MotionSection>

        {/* ── Listen On Platforms ──────────────────────────────────── */}
        <MotionSection>
          <ListenOn />
        </MotionSection>
      </div>
    </section>
  );
}
