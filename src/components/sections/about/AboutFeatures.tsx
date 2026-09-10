import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Bell, Headphones, Volume2, ArrowUpRight } from "lucide-react";

import { MotionSection } from "../../ui/MotionSection";
import { aboutFeatures } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

const featureIconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  headphones: Headphones,
  bell: Bell,
  volume: Volume2,
};

function FeatureIcon({ name }: { name: string }) {
  const Icon = featureIconMap[name];
  if (!Icon) return null;
  return <Icon size={32} strokeWidth={1.8} />;
}

export function AboutFeatures() {
  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        {/* Top 2-Column Block */}
        <MotionSection>
          <div className="grid items-center gap-12 lg:grid-cols-[560px_minmax(0,1fr)] lg:gap-16">
            {/* Left: Heading + Body + CTA */}
            <div className="flex flex-col text-center lg:text-left">
              <h2
                style={{
                  fontFamily: TITLE_FONT,
                  fontWeight: 700,
                  fontSize: "clamp(34px, 4.5vw, 48px)",
                  lineHeight: 1.18,
                  letterSpacing: "-0.03em",
                  color: "#111418",
                }}
              >
                Features That Enhance Your<br />
                <span className="relative inline-block">
                  Listening Experience
                  <span
                    className="pointer-events-none absolute left-0 top-[90%] h-[12px] w-full"
                    aria-hidden
                  >
                    <Image
                      src={images.featuresLine}
                      alt=""
                      width={380}
                      height={12}
                      className="h-full w-full object-contain"
                    />
                  </span>
                </span>
              </h2>

              <p
                className="mt-6"
                style={{
                  fontFamily: BODY_FONT,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "26px",
                  letterSpacing: "-0.4px",
                  color: "#4E5255",
                  maxWidth: 540,
                }}
              >
                {aboutFeatures.body}
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                <Link
                  href={aboutFeatures.cta.href}
                  className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-black/[0.12] pl-6 pr-2 text-base font-semibold text-[#111418] transition-all duration-300 hover:border-[#F17F3F] hover:text-[#F17F3F]"
                >
                  <span>{aboutFeatures.cta.label}</span>
                  <span className="grid size-10 place-items-center rounded-full bg-[#F17F3F] text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: Visual Artwork with floating badges */}
            <div className="relative mx-auto w-full max-w-[468px]">
              {/* Doodle squiggle above photo */}
              <div
                className="pointer-events-none absolute left-[42%] -top-8 z-10 w-[80px]"
                aria-hidden
              >
                <Image
                  src={images.featureBadge}
                  alt=""
                  width={80}
                  height={60}
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Photo */}
              <div className="relative aspect-[468/410] w-full overflow-hidden rounded-[24px]">
                <Image
                  src={aboutFeatures.photo}
                  alt="Listener enjoying podcasts with headphones"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 468px"
                />
              </div>

              {/* Available On Floating Pill */}
              <div
                className="absolute -right-2 sm:-right-4 top-[58%] z-20 flex items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-black/[0.04]"
              >
                <span
                  style={{
                    fontFamily: BODY_FONT,
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#4E5255",
                  }}
                >
                  {aboutFeatures.availabilityLabel}
                </span>
                <div className="flex items-center gap-2">
                  {aboutFeatures.availabilityIcons.map((p) => (
                    <div key={p.name} className="relative h-5 w-5 shrink-0" title={p.name}>
                      <Image src={p.icon} alt={p.name} fill className="object-contain" sizes="20px" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscriber Count Floating Pill */}
              <div
                className="absolute -left-2 sm:-left-4 bottom-4 z-20 flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-black/[0.04]"
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
                    className="grid size-8 place-items-center rounded-full ring-2 ring-white bg-[#F17F3F] text-white"
                    style={{ marginLeft: -8 }}
                  >
                    <BadgeCheck size={16} strokeWidth={2.2} />
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: BODY_FONT,
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#111418",
                  }}
                >
                  {aboutFeatures.subscriberCount}
                </span>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Bottom 3 Feature Cards */}
        <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-3">
          {aboutFeatures.cards.map((card) => (
            <MotionSection key={card.title}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition hover:shadow-md">
                <div>
                  <div className="grid size-[64px] place-items-center rounded-xl bg-[#FFF3ED] text-[#F17F3F]">
                    <FeatureIcon name={card.icon} />
                  </div>

                  <h3
                    className="mt-8"
                    style={{
                      fontFamily: TITLE_FONT,
                      fontWeight: 600,
                      fontSize: 24,
                      lineHeight: "28.8px",
                      letterSpacing: "-0.5px",
                      color: "#111418",
                    }}
                  >
                    {card.title}
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
                    {card.text}
                  </p>
                </div>
              </article>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}