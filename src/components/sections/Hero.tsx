import Image from "next/image";

import { MotionSection } from "../ui/MotionSection";
import { HeroCta } from "../ui/HeroCta";
import { hero as heroData } from "@/lib/content";
import { images } from "@/lib/assets";
import { HeroListenersBadge, HeroVisual } from "./hero/HeroParts";

/* ---------------------------------------------------------------------------
   Hero Section — exact geometry from hero_section.json
     Section:        1440 x 792
     Container:      1240 x 632, x=100 (left pad), y=160 (top)
     Content Block:  530 wide, x=20, y=62.5 in container
     Visual Block:   634 wide, x=586 in container  -> 36px gap

   Vertical rhythm inside Content Block:
     Title (231) + 16 gap -> Subtitle (48) [total 295, this is Title Block]
     Title Block end (295) + 32 gap -> Buttons at y=327, height 56, end 383
     Buttons end (383) + 64 gap -> Listeners at y=447, height 60, end 507
     Content block height = 507, fits in 632 - 62.5 = 569.5
--------------------------------------------------------------------------- */

export function Hero() {
  return (
    <section id="home" className="relative h-[792px] overflow-hidden bg-podhub-ink">
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
      <div
        className="relative mx-auto h-[632px] w-[1240px]"
        style={{ paddingLeft: 100, paddingTop: 160 }}
      >
        <div className="grid h-full grid-cols-[530px_634px] gap-[36px]">
          {/* ── LEFT: Content Block, x=20 in container ─────────── */}
          <MotionSection
            className="flex w-[530px] flex-col"
            style={{ marginLeft: 20, marginTop: 62.5 }}
          >
            {/* Title + Line2 underline (under "Episodes") */}
            <div className="relative" style={{ width: 530, height: 231 }}>
              <div
                className="pointer-events-none absolute z-0"
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
                className="relative z-10 whitespace-pre-line text-left"
                style={{
                  fontFamily: "var(--font-urbanist), Urbanist, sans-serif",
                  fontWeight: 700,
                  fontSize: "64px",
                  lineHeight: "76.8px",
                  letterSpacing: "-2.56px",
                  color: "#FFFFFF",
                }}
              >
                {heroData.title}
              </h1>
            </div>

            {/* Subtitle — 16px below the title (y=247 in content block) */}
            <p
              className="text-left"
              style={{
                marginTop: 16,
                width: 497,
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
              className="flex items-center"
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
            <div style={{ marginTop: 64 }}>
              <HeroListenersBadge
                value={heroData.listenersBadge.value}
                label={heroData.listenersBadge.label}
              />
            </div>
          </MotionSection>

          {/* ── RIGHT: Visual Block (634x632) ─────────────────── */}
          <MotionSection className="relative h-[632px] w-[634px]">
            <HeroVisual podcastCard={heroData.podcastCard} statsCard={heroData.statsCard} />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
