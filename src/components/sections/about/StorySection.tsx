import Image from "next/image";
import Link from "next/link";
import { Zap, Target, Rocket, Gem, ArrowUpRight } from "lucide-react";

import { MotionSection } from "../../ui/MotionSection";
import { aboutStory } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

export function StorySection() {
  const [card1, card2, card3, card4] = aboutStory.cards;

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-[100px]">
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        {/* Heading block */}
        <MotionSection className="mx-auto max-w-[820px] text-center">
          <h2
            style={{
              fontFamily: TITLE_FONT,
              fontWeight: 700,
              fontSize: "clamp(32px, 4.5vw, 48px)",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: "#111418",
            }}
          >
            Inspired to Make a{" "}
            <span className="relative inline-block">
              Difference
              <span
                className="pointer-events-none absolute left-0 top-[92%] h-[12px] w-full"
                aria-hidden
              >
                <Image
                  src={images.inspiredSectionLine}
                  alt=""
                  width={200}
                  height={12}
                  className="h-full w-full object-contain"
                />
              </span>
            </span>
          </h2>
          <p
            className="mx-auto mt-5"
            style={{
              maxWidth: 645,
              fontFamily: BODY_FONT,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: "-0.4px",
              color: "#4E5255",
            }}
          >
            {aboutStory.body}
          </p>
        </MotionSection>

        {/* 3x2 Cards Grid */}
        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {/* Row 1, Col 1: Our Story */}
          <MotionSection>
            <div className="flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition hover:shadow-md">
              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-[#FFF3ED] text-[#F17F3F]">
                  <Zap size={24} strokeWidth={2} />
                </span>
                <h3
                  className="mt-6"
                  style={{
                    fontFamily: TITLE_FONT,
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: "28.8px",
                    letterSpacing: "-0.5px",
                    color: "#111418",
                  }}
                >
                  {card1.title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: BODY_FONT,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: "24px",
                    letterSpacing: "-0.3px",
                    color: "#4E5255",
                  }}
                >
                  {card1.text}
                </p>
              </div>
            </div>
          </MotionSection>

          {/* Row 1, Col 2: Photo Card */}
          <MotionSection>
            <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <Image
                src={images.storyHighlight}
                alt="Man enjoying podcasts on tablet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </MotionSection>

          {/* Row 1, Col 3: Our Mission */}
          <MotionSection>
            <div className="flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition hover:shadow-md">
              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-[#FFF3ED] text-[#F17F3F]">
                  <Target size={24} strokeWidth={2} />
                </span>
                <h3
                  className="mt-6"
                  style={{
                    fontFamily: TITLE_FONT,
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: "28.8px",
                    letterSpacing: "-0.5px",
                    color: "#111418",
                  }}
                >
                  {card2.title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: BODY_FONT,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: "24px",
                    letterSpacing: "-0.3px",
                    color: "#4E5255",
                  }}
                >
                  {card2.text}
                </p>
              </div>
            </div>
          </MotionSection>

          {/* Row 2, Col 1: Our Vision */}
          <MotionSection>
            <div className="flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition hover:shadow-md">
              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-[#FFF3ED] text-[#F17F3F]">
                  <Rocket size={24} strokeWidth={2} />
                </span>
                <h3
                  className="mt-6"
                  style={{
                    fontFamily: TITLE_FONT,
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: "28.8px",
                    letterSpacing: "-0.5px",
                    color: "#111418",
                  }}
                >
                  {card3.title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: BODY_FONT,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: "24px",
                    letterSpacing: "-0.3px",
                    color: "#4E5255",
                  }}
                >
                  {card3.text}
                </p>
              </div>
            </div>
          </MotionSection>

          {/* Row 2, Col 2: Topics Covered Card */}
          <MotionSection>
            <div className="flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-[#F17F3F]/15 bg-[#FFF9F6] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition hover:shadow-md">
              <div>
                <h3
                  style={{
                    fontFamily: TITLE_FONT,
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: "30px",
                    letterSpacing: "-0.5px",
                    color: "#111418",
                  }}
                >
                  {aboutStory.highlight.title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: BODY_FONT,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: "24px",
                    letterSpacing: "-0.3px",
                    color: "#4E5255",
                  }}
                >
                  {aboutStory.highlight.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.04]">
                <Link
                  href={aboutStory.highlight.cta.href}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#111418] transition hover:text-[#F17F3F]"
                >
                  <span>{aboutStory.highlight.cta.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </MotionSection>

          {/* Row 2, Col 3: Our Value */}
          <MotionSection>
            <div className="flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition hover:shadow-md">
              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-[#FFF3ED] text-[#F17F3F]">
                  <Gem size={24} strokeWidth={2} />
                </span>
                <h3
                  className="mt-6"
                  style={{
                    fontFamily: TITLE_FONT,
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: "28.8px",
                    letterSpacing: "-0.5px",
                    color: "#111418",
                  }}
                >
                  {card4.title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: BODY_FONT,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: "24px",
                    letterSpacing: "-0.3px",
                    color: "#4E5255",
                  }}
                >
                  {card4.text}
                </p>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}