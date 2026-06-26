import Image from "next/image";
import { BadgeCheck, Play } from "lucide-react";

import { MotionSection } from "../ui/MotionSection";
import { HeroCta } from "../ui/HeroCta";
import { discovery, stats, listenOn } from "@/lib/content";
import { images } from "@/lib/assets";

/* ---------------------------------------------------------------------------
   About / Discovery Section  (about section.json)
     Section: 1440 x 866, white bg
     Container: 1240, centered (x=100), y=100
     Top block (1200 x 414):
       Image Block 552 x 414 (left)  +  Content Block 584 (right, x=616)
     Bottom block (1200 x 164): light grey rounded panel
       "Listen on" + 4 platform icons (left) | 3 stats (right)
--------------------------------------------------------------------------- */

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

export function Discovery() {
  const [t1, t2] = discovery.title.split("\n");

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-[100px]">
      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        {/* ── TOP BLOCK ──────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-[44px]">
          {/* Image Block — 552 x 414 */}
          <MotionSection className="relative w-full max-w-[552px] shrink-0">
            {/* squiggle decoration — discovery Vector.svg (top-right) */}
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

            {/* photo with rounded corners (rx=16 baked into svg) */}
            <div className="relative aspect-[552/414] w-full overflow-hidden rounded-2xl">
              <Image
                src={discovery.image}
                alt="Podcast host recording"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 552px"
                priority
              />

              {/* caption pill — bottom, white 20% over dark, with play button */}
              <div
                className="absolute left-1/2 flex h-12 w-[min(307px,calc(100%-32px))] -translate-x-1/2 items-center justify-between gap-3 rounded-full py-2 pl-4 pr-2"
                style={{ bottom: 24, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
              >
                <span
                  style={{ fontFamily: BODY_FONT, fontWeight: 500, fontSize: 18, lineHeight: "27px", letterSpacing: "-0.72px", color: "#FFFFFF" }}
                >
                  Discover the Journey Behind Us
                </span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white">
                  <Play size={16} fill="#251814" strokeWidth={0} className="ml-0.5" />
                </span>
              </div>
            </div>
          </MotionSection>

          {/* Content Block — flex fill */}
          <MotionSection className="flex w-full max-w-[624px] flex-1 flex-col pt-0 text-center lg:pt-[15px] lg:text-left">
            {/* Title — Urbanist Bold 48, 2 lines */}
            <h2
              className="whitespace-pre-line"
              style={{ fontFamily: TITLE_FONT, fontWeight: 700, fontSize: "clamp(34px, 8vw, 48px)", lineHeight: "1.2", letterSpacing: "-0.02em", color: "#111418", maxWidth: 624 }}
            >
              {t1}
              {"\n"}
              {t2}
            </h2>

            {/* Body */}
            <p
              className="mt-6"
              style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, lineHeight: "24px", letterSpacing: "-0.64px", color: "#4E5255" }}
            >
              {discovery.body}
            </p>

            {/* Bullets */}
            <ul className="mt-8 flex flex-col items-start gap-3 lg:items-stretch">
              {discovery.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <BadgeCheck size={22} className="text-[#111418]" strokeWidth={1.6} />
                  <span style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, lineHeight: "24px", letterSpacing: "-0.64px", color: "#4E5255" }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA — Learn More, solid orange */}
            <div className="mt-9 flex justify-center lg:justify-start">
              <HeroCta label={discovery.cta.label} href={discovery.cta.href} variant="solid" />
            </div>
          </MotionSection>
        </div>

        {/* curly arrow decoration — discovery Vector2.svg (right side) */}
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

        {/* ── BOTTOM BLOCK — stats panel (1200 x 164) ─────────── */}
        <MotionSection
          className="mt-14 flex flex-col items-center justify-between gap-8 rounded-3xl px-6 py-8 lg:mt-[88px] lg:flex-row lg:px-[44px]"
          style={{ minHeight: 164, background: "#F6F6F6" }}
        >
          {/* Listen on + platform icons */}
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-[32px]">
            <span style={{ fontFamily: TITLE_FONT, fontWeight: 600, fontSize: 24, lineHeight: "28.8px", letterSpacing: "-0.72px", color: "#111418" }}>
              Listen on
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-[37px]">
              {listenOn.map((p) => (
                <div key={p.name} className="relative h-11 w-11 shrink-0" title={p.name}>
                  <Image src={p.icon} alt={p.name} fill className="object-contain" sizes="44px" />
                </div>
              ))}
            </div>
          </div>

          {/* Stats — 3 columns with spacing */}
          <div className="grid w-full grid-cols-1 gap-8 text-center sm:grid-cols-3 lg:w-auto lg:gap-[60px] lg:text-left">
            {stats.map((s) => (
              <div key={s.label} className="flex min-w-[140px] flex-col">
                <span
                  style={{ fontFamily: TITLE_FONT, color: "#111418", whiteSpace: "nowrap" }}
                >
                  <span style={{ fontWeight: 600, fontSize: 40 }}>{s.value}</span>
                  <span style={{ fontWeight: 700, fontSize: 40 }}>{s.suffix}</span>
                </span>
                <span
                  className="mt-1 whitespace-nowrap"
                  style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, lineHeight: "24px", letterSpacing: "-0.64px", color: "#4E5255" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
