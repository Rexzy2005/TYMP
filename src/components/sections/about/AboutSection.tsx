import Image from "next/image";
import { BadgeCheck, Play } from "lucide-react";

import { MotionSection } from "../../ui/MotionSection";
import { HeroCta } from "../../ui/HeroCta";
import { aboutBlock } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

export function AboutSection() {
  const [t1, t2] = aboutBlock.title.split("\n");

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-[100px]">
      {/* Soft warm backdrop to evoke the Figma bg fill (SVG not in repo) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(241,127,63,0.10) 0%, rgba(241,127,63,0.04) 32%, rgba(255,255,255,0) 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-[44px]">
          {/* Image Block — 552 x 414 */}
          <MotionSection className="relative w-full max-w-[552px] shrink-0">
            <div
              className="pointer-events-none absolute"
              style={{ right: -30, top: -50, width: 83, height: 70 }}
            >
              <Image
                src={images.discoveryVector}
                alt=""
                width={83}
                height={70}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="relative aspect-[552/414] w-full overflow-hidden rounded-2xl">
              <Image
                src={aboutBlock.image}
                alt="TYMP podcast journey"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 552px"
              />

              {/* Glass caption pill on image */}
              <div
                className="absolute left-1/2 flex h-12 w-[min(307px,calc(100%-32px))] -translate-x-1/2 items-center justify-between gap-3 rounded-full py-2 pl-4 pr-2"
                style={{ bottom: 24, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
              >
                <span
                  style={{
                    fontFamily: BODY_FONT,
                    fontWeight: 500,
                    fontSize: 18,
                    lineHeight: "27px",
                    letterSpacing: "-0.72px",
                    color: "#FFFFFF",
                  }}
                >
                  {aboutBlock.pill}
                </span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white">
                  <Play size={16} fill="#251814" strokeWidth={0} className="ml-0.5" />
                </span>
              </div>
            </div>
          </MotionSection>

          {/* Content Block */}
          <MotionSection className="flex w-full max-w-[624px] flex-1 flex-col pt-0 text-center lg:pt-[15px] lg:text-left">
            <h2
              className="whitespace-pre-line"
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(34px, 8vw, 48px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#111418",
                maxWidth: 624,
              }}
            >
              {t1}
              {"\n"}
              {t2}
            </h2>

            <p
              className="mt-6"
              style={{
                fontFamily: BODY_FONT,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                letterSpacing: "-0.64px",
                color: "#4E5255",
              }}
            >
              {aboutBlock.body}
            </p>

            <ul className="mt-8 flex flex-col items-start gap-3 lg:items-stretch">
              {aboutBlock.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <BadgeCheck size={22} className="text-[#111418]" strokeWidth={1.6} />
                  <span
                    style={{
                      fontFamily: BODY_FONT,
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "24px",
                      letterSpacing: "-0.64px",
                      color: "#4E5255",
                    }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex justify-center lg:justify-start">
              <HeroCta label="Learn More" href="#episodes" variant="solid" />
            </div>
          </MotionSection>
        </div>

        {/* curly arrow decoration */}
        <div
          className="pointer-events-none absolute"
          style={{ right: 30, top: 240, width: 122, height: 142 }}
        >
          <Image
            src={images.discoveryVectorTwo}
            alt=""
            width={122}
            height={142}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}