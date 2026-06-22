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
    <section className="relative overflow-hidden bg-white py-[100px]">
      <div className="relative mx-auto w-[1240px]">
        {/* ── TOP BLOCK ──────────────────────────────────────── */}
        <div className="flex items-start gap-[44px]">
          {/* Image Block — 552 x 414 */}
          <MotionSection className="relative shrink-0" style={{ width: 552, height: 414 }}>
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
            <div className="relative h-[414px] w-[552px] overflow-hidden rounded-2xl">
              <Image
                src={discovery.image}
                alt="Podcast host recording"
                fill
                className="object-cover"
                sizes="552px"
                priority
              />

              {/* caption pill — bottom, white 20% over dark, with play button */}
              <div
                className="absolute flex items-center justify-between gap-3 rounded-full py-2 pl-4 pr-2"
                style={{ left: 122, bottom: 24, width: 307, height: 48, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
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
          <MotionSection className="flex flex-1 flex-col pt-[15px]">
            {/* Title — Urbanist Bold 48, 2 lines */}
            <h2
              className="whitespace-pre-line"
              style={{ fontFamily: TITLE_FONT, fontWeight: 700, fontSize: 48, lineHeight: "57.6px", letterSpacing: "-0.96px", color: "#111418", width: 624 }}
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
            <ul className="mt-8 flex flex-col gap-3">
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
            <div className="mt-9">
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
          className="mt-[88px] flex items-center justify-between rounded-3xl px-[44px]"
          style={{ height: 164, background: "#F6F6F6" }}
        >
          {/* Listen on + platform icons */}
          <div className="flex items-center gap-[32px]">
            <span style={{ fontFamily: TITLE_FONT, fontWeight: 600, fontSize: 24, lineHeight: "28.8px", letterSpacing: "-0.72px", color: "#111418" }}>
              Listen on
            </span>
            <div className="flex items-center" style={{ gap: 37 }}>
              {listenOn.map((p) => (
                <div key={p.name} className="relative h-11 w-11 shrink-0" title={p.name}>
                  <Image src={p.icon} alt={p.name} fill className="object-contain" sizes="44px" />
                </div>
              ))}
            </div>
          </div>

          {/* Stats — 3 columns with spacing */}
          <div className="flex items-start gap-[60px]">
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