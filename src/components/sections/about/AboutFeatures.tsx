import Image from "next/image";
import { BadgeCheck, Bell, Headphones, Volume2 } from "lucide-react";

import { MotionSection } from "../../ui/MotionSection";
import { HeroCta } from "../../ui/HeroCta";
import { aboutFeatures } from "@/lib/content";
import { images } from "@/lib/assets";

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
      <div
        className="grid size-[68px] place-items-center rounded-xl"
        style={{ background: "#FFE7DC", color: "#F17F3F" }}
      >
        <FeatureIcon name={icon} />
      </div>

      <h3
        className="mt-[48px]"
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 600,
          fontSize: 24,
          lineHeight: "28.8px",
          letterSpacing: "-0.72px",
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
    </article>
  );
}

function FeatureVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[468px]">
      {/* Squiggle doodle above the photo */}
      <div
        className="pointer-events-none absolute"
        style={{ left: "39%", top: -36, width: 91, height: 70 }}
      >
        <Image
          src={aboutFeatures.squiggle}
          alt=""
          width={91}
          height={70}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Orange background shape behind photo */}
      <div
        className="pointer-events-none absolute"
        style={{ left: "12%", top: 47, width: 346, height: 349 }}
      >
        <Image
          src={aboutFeatures.bgShape}
          alt=""
          width={346}
          height={349}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Photo */}
      <div
        className="relative aspect-[468/396] w-full overflow-hidden rounded-2xl"
        style={{ marginTop: 20 }}
      >
        <Image
          src={aboutFeatures.photo}
          alt="Podcaster wearing headphones"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 468px"
        />
      </div>

      {/* Available-on pill */}
      <div
        className="absolute z-10 flex items-center justify-between rounded-full bg-white px-5 py-3 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.18)]"
        style={{ right: 0, top: "60%", width: 252, height: 56 }}
      >
        <span
          style={{
            fontFamily: BODY_FONT,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "-0.64px",
            color: "#4E5255",
          }}
        >
          {aboutFeatures.availabilityLabel}
        </span>
        <div className="flex items-center gap-2">
          {aboutFeatures.availabilityIcons.map((p) => (
            <div key={p.name} className="relative h-6 w-6 shrink-0" title={p.name}>
              <Image src={p.icon} alt={p.name} fill className="object-contain" sizes="24px" />
            </div>
          ))}
        </div>
      </div>

      {/* Subscriber pill */}
      <div
        className="absolute z-10 flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.18)]"
        style={{ left: 0, top: "78%", width: 263, height: 64 }}
      >
        <div className="flex items-center">
          {aboutFeatures.subscriberAvatars.map((img, i) => (
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
          style={{
            fontFamily: BODY_FONT,
            fontWeight: 500,
            fontSize: 18,
            lineHeight: "27px",
            letterSpacing: "-0.72px",
            color: "#111418",
          }}
        >
          {aboutFeatures.subscriberCount}
        </span>
      </div>
    </div>
  );
}

function TopBlock() {
  const [t1, t2] = aboutFeatures.title.split("\n");
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[64px]">
      {/* Left: heading + body + CTA */}
      <div className="flex max-w-[560px] flex-col text-center lg:text-left">
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
          <span style={{ display: "inline" }}>{t1} </span>
          <span style={{ display: "inline" }}>{t2}</span>
        </h2>

        <p
          className="mt-6"
          style={{
            fontFamily: BODY_FONT,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "-0.64px",
            color: "#4E5255",
            maxWidth: 560,
          }}
        >
          {aboutFeatures.body}
        </p>

        <div className="mt-8 flex justify-center lg:justify-start">
          <HeroCta
            label={aboutFeatures.cta.label}
            href={aboutFeatures.cta.href}
            variant="outline"
            labelColor="#111418"
          />
        </div>
      </div>

      {/* Right: visual */}
      <div className="flex justify-center lg:justify-end">
        <FeatureVisual />
      </div>
    </div>
  );
}

export function AboutFeatures() {
  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        <MotionSection>
          <TopBlock />
        </MotionSection>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {aboutFeatures.cards.map((card) => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}