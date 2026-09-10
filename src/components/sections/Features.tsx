import Image from "next/image";
import {
  BadgeCheck,
  Bell,
  Headphones,
  Volume2,
} from "lucide-react";

import { MotionSection } from "../ui/MotionSection";
import { HeroCta } from "../ui/HeroCta";
import { features, featuresHeader, featuresRight } from "@/lib/content";
import { images } from "@/lib/assets";

/* ---------------------------------------------------------------------------
   Features Section  (feature_section.json)
     Section: 1440 x 972.6, white bg
     Container: 1240 wide, x=100, y=99.8
     Top block (1200 x 435.6): Content (left, 579) + Image (right, 468)
       Content: eyebrow, 2-line title + orange wavy underline, body, CTA
       Image: photo + squiggle above + Available-on pill + 12M+ pill
         (pills extend into the orange bg area, NOT clipped by photo)
     Bottom block (1200 x 281, mt 56px): 3 feature cards (384 each, 24px gap)
       Card: icon (orange tile) + title (Urbanist 600 / 24) + body (Public Sans 16)
--------------------------------------------------------------------------- */

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

const featureIconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  headphones: Headphones,
  bell: Bell,
  volume: Volume2,
};

function FeatureIcon({ name, size = 38 }: { name: string; size?: number }) {
  const Icon = featureIconMap[name];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.6} />;
}

function FeatureCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <article
      className="flex min-h-[281px] w-full flex-col rounded-2xl bg-white p-8"
      style={{ border: "1px solid #EAEAEA" }}
    >
      {/* Icon — 68x68 light-orange tile, 38px glyph centered */}
      <div
        className="grid size-[68px] place-items-center rounded-xl"
        style={{ background: "#FFE7DC", color: "#F17F3F" }}
      >
        <FeatureIcon name={icon} />
      </div>

      <h3
        className="mt-[48px]"
        style={{ fontFamily: TITLE_FONT, fontWeight: 600, fontSize: 24, lineHeight: "28.8px", letterSpacing: "-0.72px", color: "#111418" }}
      >
        {title}
      </h3>
      <p
        className="mt-3"
        style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, lineHeight: "24px", letterSpacing: "-0.64px", color: "#4E5255", maxWidth: 320 }}
      >
        {text}
      </p>
    </article>
  );
}

export function Features() {
  const [t1, t2] = featuresHeader.title.split("\n");

  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        {/* ── TOP BLOCK — content (left) + image (right), absolute per JSON ── */}
        <div className="relative hidden lg:block" style={{ height: 435.6 }}>
          {/* Left Content — 579 wide, starts at y=63.8 */}
          <MotionSection
            className="absolute"
            style={{ left: 20, top: 63.8, width: 579 }}
          >
            {/* Title wrap — 579 x 116 */}
            <div className="relative" style={{ width: 579 }}>
              <h2
                style={{
                  fontFamily: TITLE_FONT,
                  fontWeight: 700,
                  fontSize: 48,
                  lineHeight: "57.6px",
                  letterSpacing: "-0.96px",
                  color: "#111418",
                }}
              >
                Features That Enhance Your<br />
                Listening{" "}
                <span className="relative inline-block">
                  Experience
                  <span
                    className="pointer-events-none absolute left-0 top-[88%] h-[8px] w-full min-w-[200px]"
                    aria-hidden
                  >
                    <Image
                      src={images.featuresLine}
                      alt=""
                      width={232}
                      height={8}
                      className="h-full w-full object-contain"
                    />
                  </span>
                </span>
              </h2>
            </div>

            {/* Body — Public Sans 16, 579 wide */}
            <p
              className="mt-8"
              style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, lineHeight: "24px", letterSpacing: "-0.64px", color: "#4E5255", width: 579 }}
            >
              {featuresHeader.body}
            </p>

            {/* CTA — outlined "Browse Episodes" */}
            <div className="mt-8">
              <HeroCta label={featuresHeader.cta.label} href={featuresHeader.cta.href} variant="outline" labelColor="#111418" />
            </div>
          </MotionSection>

          {/* Right Image Block — 468 x 435.6, contains everything photo-related */}
          <MotionSection
            className="absolute"
            style={{ left: 752, top: 0, width: 468, height: 435.6 }}
          >
            {/* Squiggle doodle above the photo — feature - Component 1.png, 90.8 x 69.5
               JSON Shape at x=1035.9, image block at x=852 → relative x=183.9 */}
            <div
              className="pointer-events-none absolute"
              style={{ left: 183.9, top: -34.7, width: 90.8, height: 69.5 }}
            >
              <Image
                src={featuresRight.squiggle}
                alt=""
                width={90.8}
                height={69.5}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Orange background shape behind photo — feature_bg.svg, 346.3 x 349.3
               JSON Image Background at x=908.2 y=167.1 → relative to image block (x=56.2, y=46.9) */}
            <div
              className="pointer-events-none absolute"
              style={{ left: 56.2, top: 46.9, width: 346.3, height: 349.3 }}
            >
              <Image
                src={images.featureBg}
                alt=""
                width={346.3}
                height={349.3}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Photo — 468 x 396.2 with rounded corners */}
            <div
              className="absolute overflow-hidden rounded-2xl"
              style={{ left: 0, top: 20.2, width: 468, height: 396.2 }}
            >
              <Image
                src={featuresRight.photo}
                alt="Podcaster wearing headphones"
                fill
                className="object-cover"
                sizes="468px"
              />
            </div>

            {/* Available-on pill — 252 x 56, white, overlapping bottom-right of photo
               JSON Availability Card at x=1058.3 y=381.1 → relative (x=206.3, y=281.3) */}
            <div
              className="absolute flex items-center justify-between rounded-full bg-white px-5 py-3 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.18)]"
              style={{ left: 206.3, top: 281.3, width: 252, height: 56 }}
            >
              <span
                className="whitespace-nowrap"
                style={{ fontFamily: BODY_FONT, fontWeight: 500, fontSize: 16, lineHeight: "24px", letterSpacing: "-0.64px", color: "#4E5255" }}
              >
                {featuresRight.availabilityLabel}
              </span>
              <div className="flex items-center gap-2">
                {featuresRight.availabilityIcons.map((p) => (
                  <div key={p.name} className="relative h-6 w-6 shrink-0" title={p.name}>
                    <Image src={p.icon} alt={p.name} fill className="object-contain" sizes="24px" />
                  </div>
                ))}
              </div>
            </div>

            {/* Subscriber pill — 263 x 64, white, overlapping bottom-left of photo (extends below)
               JSON Subscriber Block at x=931.1 y=465.5 → relative (x=79.1, y=365.7) */}
            <div
              className="absolute flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.18)]"
              style={{ left: 79.1, top: 365.7, width: 263, height: 64 }}
            >
              {/* Two overlapping avatars + orange check circle */}
              <div className="flex items-center">
                {featuresRight.subscriberAvatars.map((img, i) => (
                  <div
                    key={i}
                    className="relative size-8 overflow-hidden rounded-full ring-2 ring-white"
                    style={{ marginLeft: i === 0 ? 0 : -8 }}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="32px" />
                  </div>
                ))}
                <span
                  className="grid size-8 place-items-center rounded-full ring-2 ring-white"
                  style={{ marginLeft: -8, background: "#F17F3F", color: "#FFFFFF" }}
                >
                  <BadgeCheck size={16} strokeWidth={2.2} />
                </span>
              </div>
              <span
                className="whitespace-nowrap"
                style={{ fontFamily: BODY_FONT, fontWeight: 500, fontSize: 18, lineHeight: "27px", letterSpacing: "-0.72px", color: "#111418" }}
              >
                {featuresRight.subscriberCount}
              </span>
            </div>
          </MotionSection>
        </div>

        {/* ── BOTTOM BLOCK — 3 feature cards ── */}
        <div className="grid gap-10 lg:hidden">
          <MotionSection className="mx-auto max-w-[620px] text-center">
            <h2
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(34px, 8vw, 48px)",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                color: "#111418",
              }}
            >
              {featuresHeader.title.replace("\n", " ")}
            </h2>
            <p className="mt-6" style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, lineHeight: "24px", letterSpacing: "-0.64px", color: "#4E5255" }}>
              {featuresHeader.body}
            </p>
            <div className="mt-8 flex justify-center">
              <HeroCta label={featuresHeader.cta.label} href={featuresHeader.cta.href} variant="outline" labelColor="#111418" />
            </div>
          </MotionSection>

          <MotionSection className="relative mx-auto aspect-[468/435.6] w-full max-w-[468px]">
            <Image src={images.featureBg} alt="" fill className="pointer-events-none object-contain" />
            <div className="absolute inset-x-0 top-[5%] aspect-[468/396.2] overflow-hidden rounded-2xl">
              <Image src={featuresRight.photo} alt="Podcaster wearing headphones" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 468px" />
            </div>
          </MotionSection>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-[56px] lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} text={f.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
