import Image from "next/image";
import { MotionSection } from "../../ui/MotionSection";
import { episodesHeader, stats, listenOn } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

function GlowBlobs() {
  return (
    <>
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          left: "5%",
          top: "8%",
          width: "min(480px, 90vw)",
          height: "min(480px, 90vw)",
          background: "#EAB819",
          opacity: 0.2,
          filter: "blur(140px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          right: "5%",
          top: "12%",
          width: "min(420px, 85vw)",
          height: "min(420px, 85vw)",
          background: "#EAB819",
          opacity: 0.15,
          filter: "blur(130px)",
        }}
        aria-hidden
      />
    </>
  );
}

export function EpisodesHero() {
  return (
    <section className="relative overflow-hidden bg-podhub-ink pt-32 sm:pt-40 lg:pt-48">
      <GlowBlobs />

      {/* ── Top Header: 2 Columns (Headline on Left, Text on Right) ──── */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-0">
        <MotionSection>
          <div className="grid grid-cols-1 items-end justify-between gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-12">
            {/* Left Column: Main Headline matching Figma */}
            <div>
              <h1
                style={{
                  fontFamily: TITLE_FONT,
                  fontWeight: 700,
                  fontSize: "clamp(32px, 6vw, 56px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.035em",
                  color: "#FFFFFF",
                }}
              >
                Take a Look at All the{" "}
                <br className="hidden sm:inline" />
                <span className="relative inline-block">
                  Episodes
                  <span
                    className="pointer-events-none absolute left-0 top-[90%] h-[8px] sm:h-[12px] w-full"
                    aria-hidden
                  >
                    <Image
                      src={images.inspiredSectionLine}
                      alt=""
                      width={200}
                      height={12}
                      className="h-full w-full object-contain"
                      priority
                    />
                  </span>
                </span>{" "}
                Here!
              </h1>
            </div>

            {/* Right Column: Paragraph Text */}
            <div className="lg:pb-3">
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontWeight: 400,
                  fontSize: "clamp(15px, 2vw, 16px)",
                  lineHeight: "26px",
                  letterSpacing: "-0.4px",
                  color: "#CFD0D1",
                }}
              >
                {episodesHeader.subtitle}
              </p>
            </div>
          </div>
        </MotionSection>

        {/* ── Floating Stats Card with Values & Listen On Logos ─────── */}
        <MotionSection>
          <div className="relative z-20 -mb-14 sm:-mb-16 mt-10 sm:mt-12 lg:mt-16 w-full rounded-[20px] sm:rounded-[24px] bg-white p-5 sm:p-7 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-black/[0.04]">
            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              {/* Left: 3 Stats Columns */}
              <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 flex-1">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center sm:items-start ${
                      idx > 0
                        ? "pl-2 sm:pl-6 lg:pl-8 border-l border-gray-100"
                        : ""
                    }`}
                  >
                    <div className="flex items-baseline">
                      <span
                        style={{
                          fontFamily: TITLE_FONT,
                          fontWeight: 700,
                          fontSize: "clamp(24px, 4vw, 46px)",
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
                          fontSize: "clamp(24px, 4vw, 46px)",
                          lineHeight: 1,
                          letterSpacing: "-0.03em",
                          color: "#111418",
                        }}
                      >
                        {stat.suffix}
                      </span>
                    </div>
                    <span
                      className="mt-1.5 sm:mt-2 text-center sm:text-left text-[11px] xs:text-[13px] sm:text-[15px]"
                      style={{
                        fontFamily: BODY_FONT,
                        fontWeight: 400,
                        lineHeight: 1.3,
                        letterSpacing: "-0.3px",
                        color: "#4E5255",
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider on mobile / tablet */}
              <div className="h-px w-full bg-gray-100 lg:hidden" />

              {/* Right: Listen On Row with 4 Platform Logos */}
              <div className="flex flex-row items-center justify-between sm:justify-start gap-4 sm:gap-5 lg:border-l lg:border-gray-100 lg:pl-10 shrink-0">
                <span
                  style={{
                    fontFamily: TITLE_FONT,
                    fontWeight: 600,
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    lineHeight: "26px",
                    letterSpacing: "-0.4px",
                    color: "#111418",
                    whiteSpace: "nowrap",
                  }}
                >
                  Listen on
                </span>
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  {listenOn.map((platform) => (
                    <span
                      key={platform.name}
                      className="relative flex size-9 xs:size-10 sm:size-11 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95"
                      title={platform.name}
                    >
                      <Image
                        src={platform.icon}
                        alt={platform.name}
                        width={44}
                        height={44}
                        className="size-full object-contain"
                        priority
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>

      {/* Decorative transition spacer */}
      <div className="h-10 sm:h-12 lg:h-14 bg-podhub-ink" />
    </section>
  );
}
