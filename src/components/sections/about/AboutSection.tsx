import Image from "next/image";
import { BadgeCheck, Play } from "lucide-react";

import { MotionSection } from "../../ui/MotionSection";
import { aboutBlock } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-[100px]">
      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-[552px_minmax(0,1fr)] lg:gap-16">
          {/* Left Column: Image Block with Doodle Squiggle + Glass Play Pill */}
          <MotionSection className="relative w-full max-w-[552px]">
            {/* Top-left squiggle doodle */}
            <div
              className="pointer-events-none absolute -left-6 -top-8 z-10 w-[72px]"
              aria-hidden
            >
              <Image
                src={images.discoveryVector}
                alt=""
                width={72}
                height={60}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Photo Card */}
            <div className="relative aspect-[552/414] w-full overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/[0.04]">
              <Image
                src={aboutBlock.image}
                alt="TYMP podcast host journey"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 552px"
              />

              {/* Glass caption pill on image */}
              <div
                className="absolute left-1/2 bottom-6 z-10 flex -translate-x-1/2 items-center justify-between gap-3 rounded-full px-5 py-2.5 backdrop-blur-md shadow-md"
                style={{
                  background: "rgba(255, 255, 255, 0.22)",
                  border: "1px solid rgba(255, 255, 255, 0.35)",
                  maxWidth: "calc(100% - 32px)",
                  width: "max-content",
                }}
              >
                <span
                  style={{
                    fontFamily: BODY_FONT,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "24px",
                    letterSpacing: "-0.4px",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  {aboutBlock.pill}
                </span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white shadow-sm">
                  <Play size={14} fill="#EAB819" strokeWidth={0} className="ml-0.5" />
                </span>
              </div>
            </div>
          </MotionSection>

          {/* Right Column: Content Block */}
          <MotionSection className="flex flex-col text-center lg:text-left">
            <h2
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(34px, 4.5vw, 48px)",
                lineHeight: 1.2,
                letterSpacing: "-0.03em",
                color: "#111418",
              }}
            >
              Discover the Passion Behind<br />
              Our Podcast Journey
            </h2>

            <p
              className="mt-6"
              style={{
                fontFamily: BODY_FONT,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "26px",
                letterSpacing: "-0.4px",
                color: "#4E5255",
                maxWidth: 560,
              }}
            >
              {aboutBlock.body}
            </p>

            {/* Checklist */}
            <ul className="mt-8 flex flex-col gap-4 text-left">
              {aboutBlock.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <BadgeCheck size={22} className="text-[#111418] shrink-0" strokeWidth={2} />
                  <span
                    style={{
                      fontFamily: BODY_FONT,
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: "24px",
                      letterSpacing: "-0.3px",
                      color: "#111418",
                    }}
                  >
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}