import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { HeroCta } from "../ui/HeroCta";
import { CategoryIcon } from "../ui/CategoryIcon";
import { categories, categoriesHeader } from "@/lib/content";
import { images } from "@/lib/assets";

/* ---------------------------------------------------------------------------
   Categories Section  (category section.json)
     Section: 1440 x 952, dark bg, 2 orange blur blobs
     Container: 1240 x 752, x=100, y=100
     Title block (1200 x 116): title left + "Browse All" CTA right
     Cards wrapper (1200 x 580): 2 rows, 24px gap
       Row 1: 1 Large (588) + 2 Regular (282) — Technology | Comedy | Design
       Row 2: 2 Regular + 1 Large — Health | Business | Education
     Cards: orange 10% fill, 16px radius, dark-on-light orange text
--------------------------------------------------------------------------- */

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

/* Large card (588 x 278) — has description + listeners row */
function LargeCard({
  title,
  count,
  description,
  listeners,
  icon,
}: {
  title: string;
  count: string;
  description: string;
  listeners: string;
  icon: string;
}) {
  return (
    <article
      className="relative flex h-[278px] flex-col justify-between rounded-2xl p-6"
      style={{ background: "rgba(234,184,25,0.10)" }}
    >
      {/* Top: icon + title + count + arrow */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-5">
          <div
            className="grid size-16 shrink-0 place-items-center rounded-xl"
            style={{ background: "rgba(234,184,25,0.10)" }}
          >
            <div className="grid size-12 place-items-center text-podhub-orange">
              <CategoryIcon name={icon} size={26} />
            </div>
          </div>
          <div>
            <h3
              style={{ fontFamily: TITLE_FONT, fontWeight: 600, fontSize: 20, lineHeight: "30px", letterSpacing: "-0.4px", color: "#FFFFFF" }}
            >
              {title}
            </h3>
            <p
              className="mt-1"
              style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, lineHeight: "24px", letterSpacing: "-0.64px", color: "#E7E7E8" }}
            >
              {count}
            </p>
          </div>
        </div>
        <span className="grid size-8 place-items-center text-white">
          <ArrowUpRight size={16} strokeWidth={2} />
        </span>
      </div>

      {/* Bottom: description (left) + listeners (right) */}
      <div className="flex items-end justify-between">
        <p
          className="max-w-[308px]"
          style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, lineHeight: "24px", letterSpacing: "-0.64px", color: "#FFFFFF" }}
        >
          {description}
        </p>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[images.clientOne, images.clientTwo, images.clientThree].map((img, i) => (
              <div
                key={i}
                className="relative size-8 overflow-hidden rounded-full ring-2 ring-[#2A1F18]"
              >
                <Image src={img} alt="" fill className="object-cover" sizes="32px" />
              </div>
            ))}
          </div>
          <span style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, letterSpacing: "-0.64px", color: "#FFFFFF" }}>
            {listeners}
          </span>
        </div>
      </div>
    </article>
  );
}

/* Regular card (282 x 278) — icon+arrow top, title+count mid, listeners bottom */
function RegularCard({
  title,
  count,
  listeners,
  icon,
}: {
  title: string;
  count: string;
  listeners: string;
  icon: string;
}) {
  return (
    <article
      className="relative flex h-[278px] flex-col justify-between rounded-2xl p-6"
      style={{ background: "rgba(234,184,25,0.10)" }}
    >
      {/* Top: icon (left) + arrow (right) */}
      <div className="flex items-start justify-between">
        <div
          className="grid size-16 shrink-0 place-items-center rounded-xl"
          style={{ background: "rgba(234,184,25,0.10)" }}
        >
          <span className="text-podhub-orange">
            <CategoryIcon name={icon} size={26} />
          </span>
        </div>
        <span className="grid size-8 place-items-center text-white">
          <ArrowUpRight size={16} strokeWidth={2} />
        </span>
      </div>

      {/* Bottom: title + count + listeners */}
      <div>
        <h3
          style={{ fontFamily: TITLE_FONT, fontWeight: 600, fontSize: 20, lineHeight: "30px", letterSpacing: "-0.4px", color: "#FFFFFF" }}
        >
          {title}
        </h3>
        <p
          className="mt-1"
          style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, lineHeight: "24px", letterSpacing: "-0.64px", color: "#E7E7E8" }}
        >
          {count}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <div className="flex -space-x-2">
            {[images.clientOne, images.clientTwo, images.clientThree].map((img, i) => (
              <div
                key={i}
                className="relative size-8 overflow-hidden rounded-full ring-2 ring-[#2A1F18]"
              >
                <Image src={img} alt="" fill className="object-cover" sizes="32px" />
              </div>
            ))}
          </div>
          <span style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, letterSpacing: "-0.64px", color: "#FFFFFF" }}>
            {listeners}
          </span>
        </div>
      </div>
    </article>
  );
}

function CategoryCard({ category }: { category: (typeof categories)[number] }) {
  if (category.layout === "large") {
    return <LargeCard title={category.title} count={category.count} description={category.description ?? ""} listeners={category.listeners} icon={category.icon} />;
  }
  return <RegularCard title={category.title} count={category.count} listeners={category.listeners} icon={category.icon} />;
}

export function Categories() {
  const [t1, t2] = categoriesHeader.title.split("\n");

  return (
    <section className="relative overflow-hidden bg-podhub-ink py-20 lg:py-[100px]">
      {/* Orange blur blobs from JSON — top-right + bottom-left */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[232px] w-[317px] rounded-full opacity-90"
        style={{ background: "#EAB819", filter: "blur(160px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[232px] w-[317px] rounded-full opacity-70"
        style={{ background: "#EAB819", filter: "blur(180px)" }}
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        {/* Title block — flex row with title on left and CTA right-aligned */}
        <div className="flex flex-col items-center justify-between gap-8 text-center sm:gap-6 lg:flex-row lg:text-left">
          {/* Title + underline (left) */}
          <div className="relative max-w-[560px]">
            <h2
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(34px, 8vw, 48px)",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              Discover Podcasts That<br />
              Match Your{" "}
              <span className="relative inline-block">
                Mood!
                <span
                  className="pointer-events-none absolute left-0 top-[88%] h-[12px] w-full min-w-[120px]"
                  aria-hidden
                >
                  <Image
                    src={images.discoveryLine}
                    alt=""
                    width={140}
                    height={13}
                    className="h-full w-full object-contain"
                  />
                </span>
              </span>
            </h2>
          </div>

          {/* CTA — aligned cleanly to the right edge of cards */}
          <div className="shrink-0">
            <HeroCta label={categoriesHeader.cta.label} href={categoriesHeader.cta.href} variant="solid" />
          </div>
        </div>

        {/* Cards wrapper */}
        <div className="mt-12 hidden flex-col gap-6 lg:mt-[56px] lg:flex">
          {/* Row 1: Technology (large) | Comedy + Design (regulars) */}
          <div className="grid grid-cols-[588px_282px_282px] gap-6">
            <CategoryCard category={categories[0]} />
            <CategoryCard category={categories[1]} />
            <CategoryCard category={categories[2]} />
          </div>
          {/* Row 2: Health + Business (regulars) | Education (large) */}
          <div className="grid grid-cols-[282px_282px_588px] gap-6">
            <CategoryCard category={categories[3]} />
            <CategoryCard category={categories[4]} />
            <CategoryCard category={categories[5]} />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:hidden">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
