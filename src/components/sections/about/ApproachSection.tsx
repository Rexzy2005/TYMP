import Image from "next/image";
import { Check } from "lucide-react";

import { MotionSection } from "../../ui/MotionSection";
import { aboutApproach } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

function GlowBlobs() {
  return (
    <>
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          left: "6%",
          top: "20%",
          width: 320,
          height: 234,
          background: "#F17F3F",
          opacity: 0.3,
          filter: "blur(120px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          right: "4%",
          bottom: "8%",
          width: 317,
          height: 232,
          background: "#F17F3F",
          opacity: 0.22,
          filter: "blur(110px)",
        }}
        aria-hidden
      />
    </>
  );
}

function FeatureItem({ title, text, highlight = false }: { title: string; text?: string; highlight?: boolean }) {
  return (
    <li className="flex flex-col">
      <div className="flex items-start gap-3">
        <span
          className="mt-1 grid size-6 shrink-0 place-items-center rounded-full"
          style={{
            background: highlight ? "#F17F3F" : "#3A2520",
            color: highlight ? "#FFFFFF" : "#F17F3F",
          }}
        >
          <Check size={14} strokeWidth={2.5} />
        </span>
        <span
          style={{
            fontFamily: TITLE_FONT,
            fontWeight: 600,
            fontSize: 24,
            lineHeight: "28.8px",
            letterSpacing: "-0.48px",
            color: highlight ? "#F17F3F" : "#FFFFFF",
          }}
        >
          {title}
        </span>
      </div>
      {text ? (
        <p
          className="ml-9 mt-2"
          style={{
            fontFamily: BODY_FONT,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "-0.64px",
            color: "#CFD0D1",
            maxWidth: 486,
          }}
        >
          {text}
        </p>
      ) : null}
    </li>
  );
}

export function ApproachSection() {
  const featuredIndex = aboutApproach.features.findIndex((f) => f.text);

  return (
    <section className="relative overflow-hidden bg-[#1D1413] text-white">
      <GlowBlobs />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 py-20 sm:px-8 sm:py-24 lg:px-0 lg:py-[100px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-16">
          {/* Left — image + eyebrow + body */}
          <MotionSection className="flex w-full flex-col lg:w-[552px]">
            {/* Photo */}
            <div className="relative aspect-[552/414] w-full overflow-hidden rounded-2xl">
              <Image
                src={images.approachImage}
                alt="Podcaster at desk with headphones"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 552px"
              />
              {/* subtle dark gradient for legibility of any overlay text */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, rgba(29,20,19,0) 60%, rgba(29,20,19,0.45) 100%)",
                }}
                aria-hidden
              />
            </div>

            {/* Eyebrow + body below the photo */}
            <div className="mt-8 flex flex-col">
              <span
                style={{
                  fontFamily: TITLE_FONT,
                  fontWeight: 600,
                  fontSize: 24,
                  lineHeight: "28.8px",
                  letterSpacing: "-0.48px",
                  color: "#F17F3F",
                }}
              >
                {aboutApproach.title}
              </span>

              <p
                className="mt-4"
                style={{
                  fontFamily: BODY_FONT,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "24px",
                  letterSpacing: "-0.64px",
                  color: "#CFD0D1",
                  maxWidth: 552,
                }}
              >
                {aboutApproach.body}
              </p>

              {/* Decorative orange bar */}
              <div
                className="mt-6 h-1 w-24 rounded-full"
                style={{ background: "linear-gradient(90deg, #F17F3F, rgba(241,127,63,0.3))" }}
                aria-hidden
              />
            </div>
          </MotionSection>

          {/* Right — heading + features list */}
          <MotionSection className="flex w-full flex-col lg:w-[558px]">
            <h2
              className="whitespace-pre-line"
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              {aboutApproach.heading}
            </h2>

            <ul className="mt-8 flex flex-col gap-5">
              {aboutApproach.features.map((f, i) => (
                <FeatureItem
                  key={f.title}
                  title={f.title}
                  text={f.text}
                  highlight={i === featuredIndex}
                />
              ))}
            </ul>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}