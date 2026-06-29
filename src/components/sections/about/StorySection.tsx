import Image from "next/image";
import { Building2, Globe, HandHeart, Lightbulb } from "lucide-react";

import { MotionSection } from "../../ui/MotionSection";
import { aboutStory } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

function BlushBlobs() {
  return (
    <>
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          left: "4%",
          top: "8%",
          width: 360,
          height: 360,
          background: "#F17F3F",
          opacity: 0.18,
          filter: "blur(120px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          right: "4%",
          top: "40%",
          width: 320,
          height: 320,
          background: "#F17F3F",
          opacity: 0.14,
          filter: "blur(110px)",
        }}
        aria-hidden
      />
    </>
  );
}

const storyIcons = [Lightbulb, Building2, HandHeart, Globe];

function ValueCard({ title, text, Icon }: { title: string; text: string; Icon: React.ComponentType<{ size?: number; strokeWidth?: number }> }) {
  return (
    <div className="flex flex-col">
      <span
        className="grid size-12 place-items-center rounded-xl"
        style={{ background: "#FFE7DC", color: "#F17F3F" }}
      >
        <Icon size={24} strokeWidth={1.6} />
      </span>
      <h3
        className="mt-5"
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 600,
          fontSize: 24,
          lineHeight: "28.8px",
          letterSpacing: "-0.48px",
          color: "#111418",
        }}
      >
        {title}
      </h3>
      <p
        className="mt-3"
        style={{
          fontFamily: BODY_FONT,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.64px",
          color: "#4E5255",
          maxWidth: 320,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function HighlightCard() {
  const { title, text, cta } = aboutStory.highlight;

  return (
    <article
      className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl"
      style={{
        background: "#FFF5EE",
        border: "1px solid rgba(241,127,63,0.18)",
      }}
    >
      {/* Photo at top */}
      <div className="relative h-[230px] w-full overflow-hidden">
        <Image
          src={images.storyHighlight}
          alt="Podcaster enjoying content"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 380px"
        />
      </div>

      <div className="flex flex-1 flex-col items-center px-6 py-7 text-center">
        <h3
          style={{
            fontFamily: TITLE_FONT,
            fontWeight: 600,
            fontSize: 24,
            lineHeight: "30px",
            letterSpacing: "-0.48px",
            color: "#111418",
            maxWidth: 280,
          }}
        >
          {title}
        </h3>
        <p
          className="mt-3"
          style={{
            fontFamily: BODY_FONT,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            letterSpacing: "-0.56px",
            color: "#4E5255",
            maxWidth: 280,
          }}
        >
          {text}
        </p>

        <a
          href={cta.href}
          className="mt-5 inline-flex flex-col items-center gap-1 text-sm font-semibold transition hover:text-podhub-orange-dark"
          style={{
            fontFamily: BODY_FONT,
            color: "#F17F3F",
            letterSpacing: "-0.56px",
          }}
        >
          <span>{cta.label}</span>
          <Image src={images.line2} alt="" width={120} height={6} className="h-1.5 w-[80px] object-contain" />
        </a>
      </div>
    </article>
  );
}

export function StorySection() {
  const [card1, card2, card3, card4] = aboutStory.cards;

  return (
    <section className="relative overflow-hidden bg-white">
      <BlushBlobs />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 py-20 sm:px-8 sm:py-24 lg:px-0 lg:py-[100px]">
        {/* Heading block */}
        <MotionSection className="mx-auto max-w-[820px] text-center">
          <h2
            style={{
              fontFamily: TITLE_FONT,
              fontWeight: 700,
              fontSize: "clamp(32px, 4.5vw, 48px)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#111418",
            }}
          >
            {aboutStory.heading}
          </h2>
          <p
            className="mx-auto mt-5"
            style={{
              maxWidth: 645,
              fontFamily: BODY_FONT,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: "-0.64px",
              color: "#4E5255",
            }}
          >
            {aboutStory.body}
          </p>
        </MotionSection>

        {/* 3-column grid: corner cards + center highlight */}
        <div className="mt-14 grid gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-3 lg:items-stretch lg:gap-x-12 lg:gap-y-12">
          {/* Row 1 */}
          <MotionSection>
            <ValueCard title={card1.title} text={card1.text} Icon={storyIcons[0]} />
          </MotionSection>

          <MotionSection className="lg:row-span-2">
            <HighlightCard />
          </MotionSection>

          <MotionSection>
            <ValueCard title={card2.title} text={card2.text} Icon={storyIcons[1]} />
          </MotionSection>

          {/* Row 2 — only the side columns render here */}
          <MotionSection>
            <ValueCard title={card3.title} text={card3.text} Icon={storyIcons[2]} />
          </MotionSection>

          <MotionSection>
            <ValueCard title={card4.title} text={card4.text} Icon={storyIcons[3]} />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}