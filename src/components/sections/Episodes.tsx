import Link from "next/link";
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
  id?: string;
  number: string;
  title: string;
  host: string;
  category: string;
  duration: string;
  image: string;
};

function EpisodeCard({ id = "ep-01", number, title, host, category, duration, image }: EpisodeCardProps) {
  return (
    <Link href={`/episodes/${id}`} className="group block w-full">
      <article
        className="flex w-full flex-col gap-5 rounded-2xl bg-white p-3 sm:flex-row transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
        style={{ boxShadow: "0 10px 40px -24px rgba(17,20,24,0.25)" }}
      >
        {/* Image — 179.5 x 252, radius 16 */}
        <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[252px] sm:w-[180px]">
          <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 180px" />
        </div>

        {/* Body — 340 wide */}
        <div className="flex flex-1 flex-col py-3 pr-3">
          {/* Top info row: Episode # (left) + Author (right) */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className="flex items-center gap-1.5"
              style={{ fontFamily: META_FONT, fontWeight: 400, fontSize: 16, letterSpacing: "-0.64px", color: "#4E5255" }}
            >
              <Mic size={16} className="text-[#EAB819]" />
              {number}
            </span>
            <span style={{ fontFamily: META_FONT, fontWeight: 400, fontSize: 16, letterSpacing: "-0.64px", color: "#111418" }}>
              {host}
            </span>
          </div>

          {/* Title — Urbanist SemiBold 24px */}
          <h3
            className="mt-4 whitespace-pre-line transition-colors group-hover:text-[#EAB819]"
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
            <div className="grid size-12 place-items-center rounded-full border border-[#E2E2E2] text-[#111418] transition-all duration-200 group-hover:border-[#EAB819] group-hover:bg-[#EAB819] group-hover:text-black">
              <ArrowRight size={18} strokeWidth={2} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function Episodes() {
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
              className="text-center"
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(34px, 8vw, 48px)",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                color: "#111418",
              }}
            >
              Discover the Latest{" "}
              <span className="relative inline-block">
                Episodes
                <span
                  className="pointer-events-none absolute left-0 top-[88%] h-[8px] w-full"
                  aria-hidden
                >
                  <Image
                    src={images.line2}
                    alt=""
                    width={186}
                    height={8}
                    className="h-full w-full object-contain"
                  />
                </span>
              </span>
              <br />
              and Featured Highlights
            </h2>
          </div>
        </MotionSection>

        {/* Cards — 2x2 grid, 588px each with balanced 24px gap */}
        <MotionSection className="mt-12 grid grid-cols-1 gap-6 lg:mt-[72px] lg:grid-cols-2 lg:gap-6">
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
