import Image from "next/image";

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
          width: 380,
          height: 380,
          background: "#F17F3F",
          opacity: 0.25,
          filter: "blur(140px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          right: "6%",
          bottom: "10%",
          width: 360,
          height: 360,
          background: "#F17F3F",
          opacity: 0.2,
          filter: "blur(130px)",
        }}
        aria-hidden
      />
    </>
  );
}

export function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-podhub-ink py-20 text-white lg:py-[100px]">
      <GlowBlobs />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        <div className="grid items-start gap-12 lg:grid-cols-[552px_minmax(0,1fr)] lg:gap-16">
          {/* Left Column: Image + Approach copy */}
          <MotionSection className="relative flex flex-col">
            {/* Top-left squiggle doodle */}
            <div
              className="pointer-events-none absolute -top-8 -left-5 z-10 w-[64px]"
              aria-hidden
            >
              <Image
                src={images.storyVector}
                alt=""
                width={64}
                height={50}
                className="h-auto w-full object-contain brightness-0 invert"
              />
            </div>

            {/* Photo Card */}
            <div className="relative aspect-[552/402] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src={images.approachImage}
                alt="Podcaster speaking into microphone"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 552px"
              />
            </div>

            {/* Below photo: Our Approach */}
            <div className="mt-8 flex flex-col">
              <h3
                style={{
                  fontFamily: TITLE_FONT,
                  fontWeight: 700,
                  fontSize: 28,
                  lineHeight: "34px",
                  letterSpacing: "-0.5px",
                  color: "#FFFFFF",
                }}
              >
                {aboutApproach.title}
              </h3>
              <p
                className="mt-4"
                style={{
                  fontFamily: BODY_FONT,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "26px",
                  letterSpacing: "-0.4px",
                  color: "#CFD0D1",
                  maxWidth: 520,
                }}
              >
                {aboutApproach.body}
              </p>
            </div>
          </MotionSection>

          {/* Right Column: Heading + Features Timeline */}
          <MotionSection className="flex flex-col pt-2 lg:pt-0">
            {/* Heading */}
            <h2
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(34px, 4.5vw, 48px)",
                lineHeight: 1.18,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              Where Every{" "}
              <span className="relative inline-block">
                Story Finds
                <span
                  className="pointer-events-none absolute left-0 top-[90%] h-[10px] w-full"
                  aria-hidden
                >
                  <Image
                    src={images.discoveryLine}
                    alt=""
                    width={220}
                    height={10}
                    className="h-full w-full object-contain"
                  />
                </span>
              </span>
              <br />
              an Audience
            </h2>

            {/* Features list with continuous left vertical border */}
            <div className="mt-10 border-l-2 border-white/15 pl-6 sm:pl-8 space-y-7">
              {aboutApproach.features.map((feature) => {
                const isHighlight = !!feature.text;
                return (
                  <div key={feature.title} className="relative group">
                    {/* Active orange left border line indicator */}
                    {isHighlight && (
                      <span
                        className="absolute -left-[26px] sm:-left-[34px] top-0 bottom-0 w-[3px] rounded-full bg-[#F17F3F]"
                        aria-hidden
                      />
                    )}

                    <h4
                      style={{
                        fontFamily: TITLE_FONT,
                        fontWeight: 600,
                        fontSize: 24,
                        lineHeight: "30px",
                        letterSpacing: "-0.5px",
                        color: isHighlight ? "#F17F3F" : "rgba(255, 255, 255, 0.75)",
                      }}
                      className="transition-colors group-hover:text-white"
                    >
                      {feature.title}
                    </h4>

                    {feature.text && (
                      <p
                        className="mt-2.5"
                        style={{
                          fontFamily: BODY_FONT,
                          fontWeight: 400,
                          fontSize: 15,
                          lineHeight: "24px",
                          letterSpacing: "-0.3px",
                          color: "#CFD0D1",
                          maxWidth: 480,
                        }}
                      >
                        {feature.text}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}