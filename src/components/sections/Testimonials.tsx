"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { MotionSection } from "../ui/MotionSection";
import { testimonialHeader, testimonials } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

function SliderButton({
  direction,
  active = false,
  onClick,
}: {
  direction: "previous" | "next";
  active?: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "previous" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      aria-label={direction === "previous" ? "Previous testimonial" : "Next testimonial"}
      onClick={onClick}
      className="grid size-12 place-items-center rounded-full border transition hover:-translate-y-0.5"
      style={{
        borderColor: "#EAB819",
        background: active ? "#EAB819" : "#FFFFFF",
        color: active ? "#FFFFFF" : "#EAB819",
      }}
    >
      <Icon size={20} strokeWidth={1.8} />
    </button>
  );
}

function Squiggle() {
  return (
    <svg
      width="83"
      height="70"
      viewBox="0 0 83 70"
      fill="none"
      aria-hidden
      className="pointer-events-none"
    >
      <path
        d="M8 38c13 0 14-13 6-21 10 8 23 5 25-10 4 12 14 18 25 9"
        stroke="#111418"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 55c10-3 15-9 14-18"
        stroke="#111418"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

type QuoteCardProps = {
  item: (typeof testimonials)[number];
  direction?: number;
  scale?: number;
  className?: string;
};

function QuoteCard({ item, direction = 1, scale = 1, className = "" }: QuoteCardProps) {
  const width = 356 * scale;
  const height = 337 * scale;

  return (
    <motion.article
      key={item.author}
      initial={{ opacity: 0, x: direction * 28, y: 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: direction * -28, y: -8 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute rounded-2xl bg-white ${className}`}
      style={{
        width,
        height,
        padding: 32 * scale,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05), 0 0 20px rgba(0,0,0,0.05)",
      }}
    >
      <Quote
        size={48 * scale}
        strokeWidth={1.7}
        color="#EAB819"
        className="-scale-x-100"
      />

      <p
        className="mt-8"
        style={{
          width: 292 * scale,
          fontFamily: BODY_FONT,
          fontWeight: 400,
          fontSize: 16 * scale,
          lineHeight: `${27 * scale}px`,
          letterSpacing: -0.64 * scale,
          color: "#4E5255",
        }}
      >
        {item.quote}
      </p>

      <div style={{ marginTop: 24 * scale }}>
        <p
          style={{
            fontFamily: TITLE_FONT,
            fontWeight: 700,
            fontSize: 20 * scale,
            lineHeight: `${28.8 * scale}px`,
            letterSpacing: -0.72 * scale,
            color: "#111418",
          }}
        >
          {item.author}
        </p>
        <p
          style={{
            fontFamily: BODY_FONT,
            fontWeight: 400,
            fontSize: 14 * scale,
            lineHeight: `${24 * scale}px`,
            letterSpacing: -0.56 * scale,
            color: "#4E5255",
          }}
        >
          {item.role}
        </p>
      </div>
    </motion.article>
  );
}

function ImageStackCard({
  item,
  slot,
  active = false,
}: {
  item: (typeof testimonials)[number];
  slot: 0 | 1 | 2;
  active?: boolean;
}) {
  const positions = {
    0: { left: 301, top: 0, width: 367, height: 488, zIndex: 30, opacity: 1 },
    1: { left: 326, top: 22, width: 367, height: 444, zIndex: 20, opacity: 0.58 },
    2: { left: 350, top: 48, width: 367, height: 390, zIndex: 10, opacity: 0.36 },
  }[slot];

  return (
    <motion.div
      layout
      className="absolute overflow-hidden rounded-2xl bg-white"
      initial={active ? { opacity: 0, x: 72, scale: 0.96 } : false}
      animate={{
        left: positions.left,
        top: positions.top,
        width: positions.width,
        height: positions.height,
        opacity: positions.opacity,
        scale: active ? 1 : 0.985,
      }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      style={{
        zIndex: positions.zIndex,
        boxShadow: "3px 3px 12px rgba(0,0,0,0.05)",
      }}
    >
      <Image
        src={item.image}
        alt={active ? item.author : ""}
        fill
        priority={active}
        sizes={active ? "367px" : "330px"}
        className="object-cover"
        aria-hidden={!active}
      />
      {!active && <div className="absolute inset-0 bg-white/30" />}
    </motion.div>
  );
}

function TestimonialCardStack({
  activeIndex,
  direction,
}: {
  activeIndex: number;
  direction: number;
}) {
  const active = testimonials[activeIndex];
  const next = testimonials[(activeIndex + 1) % testimonials.length];
  const following = testimonials[(activeIndex + 2) % testimonials.length];

  return (
    <div className="relative h-[488px] w-[704px]">
      <div className="absolute" style={{ left: 253, top: -54 }}>
        <Squiggle />
      </div>

      <ImageStackCard item={following} slot={2} />
      <ImageStackCard item={next} slot={1} />

      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={active.author}
          custom={direction}
          className="absolute overflow-hidden rounded-2xl bg-white"
          initial={{ opacity: 0, x: direction * 86, rotate: direction * 2, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, x: direction * -86, rotate: direction * -2, scale: 0.97 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          style={{
            left: 301,
            top: 0,
            width: 367,
            height: 488,
            zIndex: 30,
            boxShadow: "3px 3px 12px rgba(0,0,0,0.05)",
          }}
        >
          <Image
            src={active.image}
            alt={active.author}
            fill
            priority
            sizes="367px"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" custom={direction}>
        <QuoteCard
          key={active.author}
          item={active}
          direction={direction}
          className="left-6 top-[108px] z-40"
        />
      </AnimatePresence>
    </div>
  );
}

function MobileCardStack({
  activeIndex,
  direction,
}: {
  activeIndex: number;
  direction: number;
}) {
  const active = testimonials[activeIndex];
  const next = testimonials[(activeIndex + 1) % testimonials.length];
  const following = testimonials[(activeIndex + 2) % testimonials.length];

  return (
    <div className="relative mx-auto mt-10 h-[390px] w-full max-w-[560px] sm:h-[430px]">
      <div className="absolute right-[42%] top-[-36px] hidden sm:block">
        <Squiggle />
      </div>
      <div className="absolute right-[-16px] top-12 h-[270px] w-[214px] overflow-hidden rounded-2xl bg-white opacity-35 shadow-[3px_3px_12px_rgba(0,0,0,0.05)] sm:h-[330px] sm:w-[250px]">
        <Image
          src={following.image}
          alt=""
          fill
          sizes="250px"
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="absolute right-0 top-7 h-[300px] w-[230px] overflow-hidden rounded-2xl bg-white opacity-55 shadow-[3px_3px_12px_rgba(0,0,0,0.05)] sm:h-[356px] sm:w-[268px]">
        <Image
          src={next.image}
          alt=""
          fill
          sizes="268px"
          className="object-cover"
          aria-hidden
        />
      </div>
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={active.author}
          className="absolute right-4 top-0 h-[330px] w-[250px] overflow-hidden rounded-2xl bg-white shadow-[3px_3px_12px_rgba(0,0,0,0.05)] sm:h-[390px] sm:w-[294px]"
          initial={{ opacity: 0, x: direction * 54, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: direction * -54, scale: 0.98 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={active.image}
            alt={active.author}
            fill
            sizes="(min-width: 640px) 294px, 250px"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait" custom={direction}>
        <QuoteCard
          key={active.author}
          item={active}
          direction={direction}
          scale={0.86}
          className="left-0 top-24 z-30"
        />
      </AnimatePresence>
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((index) => (index + 1) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#FEFCF8]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_94%,rgba(234,184,25,0.22)_0%,rgba(234,184,25,0.10)_18%,rgba(234,184,25,0)_42%)]" />

      <div className="relative mx-auto hidden h-[685px] max-w-[1240px] px-6 sm:px-8 lg:px-0 xl:block">
        <MotionSection
          className="absolute left-0 top-[190px] w-[430px]"
        >
          <div className="relative">
            <h2
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: 48,
                lineHeight: "57.6px",
                letterSpacing: -0.96,
                color: "#111418",
              }}
            >
              Stories from Our<br />
              <span className="relative inline-block">
                Awesome
                <span
                  className="pointer-events-none absolute left-0 top-[88%] h-[8px] w-full min-w-[180px]"
                  aria-hidden
                >
                  <Image
                    src={images.awesomeLine}
                    alt=""
                    width={201}
                    height={7}
                    className="h-full w-full object-contain"
                  />
                </span>
              </span>{" "}
              Listeners
            </h2>
          </div>

          <p
            className="mt-6"
            style={{
              width: 429,
              fontFamily: BODY_FONT,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: -0.64,
              color: "#4E5255",
            }}
          >
            {testimonialHeader.body}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <SliderButton direction="previous" onClick={showPrevious} />
            <SliderButton direction="next" active onClick={showNext} />
          </div>
        </MotionSection>

        <MotionSection className="absolute right-0 top-[100px]">
          <TestimonialCardStack activeIndex={activeIndex} direction={direction} />
        </MotionSection>
      </div>

      <div className="relative mx-auto px-6 py-20 xl:hidden">
        <MotionSection className="mx-auto max-w-[560px]">
          <div className="relative">
            <h2 className="font-display text-[36px] leading-[43px] text-[#111418] sm:text-[42px] sm:leading-[50px]">
              Stories from Our<br />
              <span className="relative inline-block">
                Awesome
                <span
                  className="pointer-events-none absolute left-0 top-[88%] h-[8px] w-full min-w-[140px]"
                  aria-hidden
                >
                  <Image
                    src={images.awesomeLine}
                    alt=""
                    width={201}
                    height={7}
                    className="h-full w-full object-contain"
                  />
                </span>
              </span>{" "}
              Listeners
            </h2>
          </div>
          <p className="mt-5 text-sm leading-6 text-[#4E5255]">{testimonialHeader.body}</p>
          <div className="mt-7 flex items-center gap-3">
            <SliderButton direction="previous" onClick={showPrevious} />
            <SliderButton direction="next" active onClick={showNext} />
          </div>
          <MobileCardStack activeIndex={activeIndex} direction={direction} />
        </MotionSection>
      </div>
    </section>
  );
}
