import Image from "next/image";

import { MotionSection } from "../ui/MotionSection";
import { HeroCta } from "../ui/HeroCta";
import { hero as heroData } from "@/lib/content";
import { images } from "@/lib/assets";
import { HeroListenersBadge, HeroVisual } from "./hero/HeroParts";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[720px] justify-center overflow-hidden bg-podhub-ink pb-16 pt-24 sm:pt-28 lg:h-[780px] lg:pb-0 lg:pt-0">
      {/* Tight orange glow behind the human — contained spread */}
      <div
        className="pointer-events-none absolute z-0 h-[380px] w-[380px] rounded-full"
        style={{
          right: "16%",
          top: "32%",
          background: "#F17F3F",
          opacity: 0.5,
          filter: "blur(110px)",
        }}
      />

      {/* Container: 1240 x 632, x=100 left pad, y=100 top */}
      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0 lg:pt-[100px]">
        <div className="grid h-full items-center gap-10 lg:grid-cols-[minmax(0,540px)_minmax(0,634px)] lg:gap-[36px]">
          {/* ── LEFT: Content Block ─────────── */}
          <MotionSection
            className="mx-auto flex w-full max-w-[540px] flex-col text-center lg:mx-0 lg:text-left"
            style={{ marginTop: 0 }}
          >
            {/* Title + White Line2 underline (under "Episodes,") */}
            <div className="relative w-full">
              <h1
                className="relative z-10 text-center lg:text-left"
                style={{
                  fontFamily: "var(--font-urbanist), Urbanist, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(44px, 8.5vw, 64px)",
                  lineHeight: "1.12",
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                }}
              >
                Turn Ideas Into<br />
                <span className="relative inline-block">
                  Episodes,
                  <span
                    className="pointer-events-none absolute left-0 top-[86%] h-[8px] w-[186px] sm:h-[10px] sm:w-[220px]"
                    aria-hidden
                  >
                    <Image
                      src={images.line2}
                      alt=""
                      width={220}
                      height={10}
                      className="h-full w-full object-contain brightness-0 invert"
                      priority
                    />
                  </span>
                </span>{" "}
                Dreams<br />
                Into Reality
              </h1>
            </div>

            {/* Subtitle — 16px below the title */}
            <p
              className="mx-auto text-center lg:mx-0 lg:text-left"
              style={{
                marginTop: 20,
                maxWidth: 497,
                fontFamily: "var(--font-public-sans), Public Sans, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.64px",
                color: "#E7E7E8",
              }}
            >
              {heroData.subtitle}
            </p>

            {/* Buttons — 32px below subtitle, 16px gap between */}
            <div
              className="flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
              style={{ marginTop: 32, gap: 16 }}
            >
              <HeroCta
                label={heroData.primaryCta.label}
                href={heroData.primaryCta.href}
                variant="solid"
              />
              <HeroCta
                label={heroData.secondaryCta.label}
                href={heroData.secondaryCta.href}
                variant="outline"
                labelColor="#FFFFFF"
                borderColor="rgba(255, 255, 255, 0.3)"
              />
            </div>

            {/* Listeners — below buttons */}
            <div className="flex justify-center lg:justify-start" style={{ marginTop: 44 }}>
              <HeroListenersBadge
                value={heroData.listenersBadge.value}
                label={heroData.listenersBadge.label}
              />
            </div>
          </MotionSection>

          {/* ── RIGHT: Visual Block (634x632) ─────────────────── */}
          <MotionSection className="relative mx-auto w-full max-w-[634px]">
            <HeroVisual podcastCard={heroData.podcastCard} statsCard={heroData.statsCard} />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
