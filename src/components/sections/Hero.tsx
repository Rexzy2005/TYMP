import Image from "next/image";

import { MotionSection } from "../ui/MotionSection";
import { HeroCta } from "../ui/HeroCta";
import { hero as heroData } from "@/lib/content";
import { images } from "@/lib/assets";
import { HeroListenersBadge, HeroVisual } from "./hero/HeroParts";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[760px] justify-center overflow-hidden bg-podhub-ink pb-16 pt-28 sm:pt-32 lg:h-[792px] lg:pb-0 lg:pt-0">
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

      {/* Container: 1240 x 632, x=100 left pad, y=160 top */}
      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:h-[632px] lg:px-0 lg:pt-[160px]">
        <div className="grid h-full items-center gap-10 lg:grid-cols-[minmax(0,530px)_minmax(0,634px)] lg:gap-[36px]">
          {/* ── LEFT: Content Block, x=20 in container ─────────── */}
          <MotionSection
            className="mx-auto flex w-full max-w-[530px] flex-col text-center lg:mx-0 lg:text-left"
            style={{ marginTop: 0 }}
          >
            {/* Title + Line2 underline (under "Episodes") */}
            <div className="relative w-full lg:h-[231px]">
              
              <div
                className="pointer-events-none absolute z-0 hidden lg:block"
                style={{ left: 0, top: 148, width: 220, height: 10 }}
              >
                <Image
                  src={images.line2}
                  alt=""
                  width={220}
                  height={10}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>

              <h1
                className="relative z-10 whitespace-pre-line text-center lg:text-left"
                style={{
                  fontFamily: "var(--font-urbanist), Urbanist, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(44px, 9vw, 64px)",
                  lineHeight: "1.08",
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                }}
              >
                {heroData.title}
              </h1>
            </div>

            {/* Subtitle — 16px below the title (y=247 in content block) */}
            <p
              className="mx-auto text-center lg:mx-0 lg:text-left"
              style={{
                marginTop: 16,
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
              />
            </div>

            {/* Listeners — 64px below buttons (y=447 in content block) */}
            <div className="flex justify-center lg:justify-start" style={{ marginTop: 48 }}>
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
