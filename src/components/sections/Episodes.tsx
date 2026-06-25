import Image from "next/image";
import { Mic, ArrowRight, Clock } from "lucide-react";

import { MotionSection } from "../ui/MotionSection";
import { HeroCta } from "../ui/HeroCta";
import { episodes, episodesHeader, episodesCta } from "@/lib/content";
import { images } from "@/lib/assets";

/* ---------------------------------------------------------------------------
   Episodes Section — "Discover the Latest Episodes" (discovery.json)
     Section: 1440 wide, light cream bg
     Container: 1240, centered
     Title: Urbanist Bold 48px #111418, centered, Line2 underline
     Cards: 2x2 grid, 604px wide, white, radius 16
       image left 179.5x252 (radius 16), body 340 right
     CTA: orange outline "Browse More Episodes"
--------------------------------------------------------------------------- */

const META_FONT = "var(--font-public-sans), Public Sans, sans-serif";
const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";

type EpisodeCardProps = {
  number: string;
  title: string;
  host: string;
  category: string;
  duration: string;
  image: string;
};

function EpisodeCard({ number, title, host, category, duration, image }: EpisodeCardProps) {
  return (
    <article
      className="flex w-full flex-col gap-5 rounded-2xl bg-white p-3 sm:flex-row"
      style={{ boxShadow: "0 10px 40px -24px rgba(17,20,24,0.25)" }}
    >
      {/* Image — 179.5 x 252, radius 16 */}
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[252px] sm:w-[180px]">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 180px" />
      </div>

      {/* Body — 340 wide */}
      <div className="flex flex-1 flex-col py-3 pr-3">
        {/* Top info row: Episode # (left) + Author (right) */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className="flex items-center gap-1.5"
            style={{ fontFamily: META_FONT, fontWeight: 400, fontSize: 16, letterSpacing: "-0.64px", color: "#4E5255" }}
          >
            <Mic size={16} className="text-[#4E5255]" />
            {number}
          </span>
          <span style={{ fontFamily: META_FONT, fontWeight: 400, fontSize: 16, letterSpacing: "-0.64px", color: "#111418" }}>
            {host}
          </span>
        </div>

        {/* Title — Urbanist SemiBold 24px */}
        <h3
          className="mt-4 whitespace-pre-line"
          style={{
            fontFamily: TITLE_FONT,
            fontWeight: 600,
            fontSize: "clamp(21px, 4.8vw, 24px)",
            lineHeight: "1.2",
            letterSpacing: "-0.72px",
            color: "#111418",
          }}
        >
          {title}
        </h3>

        {/* Category */}
        <p
          className="mt-2"
          style={{ fontFamily: META_FONT, fontWeight: 400, fontSize: 16, lineHeight: "24px", letterSpacing: "-0.64px", color: "#4E5255" }}
        >
          {category}
        </p>

        {/* Bottom row: duration (left) + play button (right) */}
        <div className="mt-auto flex items-center justify-between pt-6">
          <span
            className="flex items-center gap-1.5"
            style={{ fontFamily: META_FONT, fontWeight: 400, fontSize: 16, letterSpacing: "-0.64px", color: "#4E5255" }}
          >
            <Clock size={16} className="text-[#4E5255]" />
            {duration}
          </span>
          <span className="grid size-12 place-items-center rounded-full border border-[#E2E2E2] text-[#111418] transition hover:border-[#F17F3F] hover:text-[#F17F3F]">
            <ArrowRight size={18} strokeWidth={2} />
          </span>
        </div>
      </div>
    </article>
  );
}

export function Episodes() {
  const [line1, line2] = episodesHeader.title.split("\n");

  return (
    <section id="episodes" className="relative overflow-hidden bg-podhub-cream py-20 lg:py-[100px]">
      {/* Soft colour blushes (very subtle, like the design's blurred blobs) */}
      <div className="pointer-events-none absolute left-[-6%] top-[20%] z-0 h-[420px] w-[420px] rounded-full opacity-[0.07] blur-[140px]" style={{ background: "#FF5900" }} />
      <div className="pointer-events-none absolute right-[-6%] top-[20%] z-0 h-[420px] w-[420px] rounded-full opacity-[0.07] blur-[140px]" style={{ background: "#FF00BF" }} />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        {/* Title — centered with Line2 underline under "Episodes" */}
        <MotionSection className="mx-auto text-center">
          <div className="relative inline-block">
            <h2
              className="whitespace-pre-line text-center"
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(34px, 8vw, 48px)",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                color: "#111418",
              }}
            >
              {line1}
              {"\n"}
              {line2}
            </h2>
            {/* Line2 underline under the word "Episodes" (first line, right side) */}
            <div className="pointer-events-none absolute" style={{ right: 12, top: 44, width: 186, height: 8 }}>
              <Image src={images.line2} alt="" width={186} height={8} className="hidden h-full w-full object-contain sm:block" />
            </div>
          </div>
        </MotionSection>

        {/* Cards — 2x2 grid, 604px each, ~8px gap */}
        <MotionSection className="mt-12 grid grid-cols-1 gap-4 lg:mt-[72px] lg:grid-cols-2 lg:gap-2">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.number} {...ep} />
          ))}
        </MotionSection>

        {/* CTA — orange outline, centered */}
        <MotionSection className="mt-12 flex justify-center lg:mt-[72px]">
          <HeroCta label={episodesCta.label} href={episodesCta.href} variant="outline" />
        </MotionSection>
      </div>
    </section>
  );
}
