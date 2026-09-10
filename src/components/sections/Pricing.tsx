"use client";

import Image from "next/image";
import { ArrowUpRight, Crown } from "lucide-react";
import { useState } from "react";

import { MotionSection } from "../ui/MotionSection";
import { plans, pricingHeader } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

type Plan = (typeof plans)[number];
type BillingCycle = "monthly" | "annually";

function BillingToggle({
  value,
  onChange,
}: {
  value: BillingCycle;
  onChange: (value: BillingCycle) => void;
}) {
  const isAnnual = value === "annually";

  return (
    <div
      className="relative h-12 w-[207px] rounded-full border border-[#E2E2E2] bg-white"
      style={{ boxShadow: "0 3px 10px rgba(17, 20, 24, 0.04)" }}
      role="tablist"
      aria-label="Billing cycle"
    >
      <div
        className="absolute top-1 h-10 rounded-full bg-[#251814] transition-all duration-300"
        style={{
          left: isAnnual ? 103 : 4,
          width: isAnnual ? 100 : 97,
        }}
      />
      <button
        type="button"
        role="tab"
        aria-selected={!isAnnual}
        onClick={() => onChange("monthly")}
        className="absolute left-[4px] top-1 h-10 w-[97px] rounded-full"
        style={{
          fontFamily: BODY_FONT,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.64px",
          color: isAnnual ? "#111418" : "#FFFFFF",
        }}
      >
        Monthly
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={isAnnual}
        onClick={() => onChange("annually")}
        className="absolute left-[103px] top-1 h-10 w-[100px] rounded-full"
        style={{
          fontFamily: BODY_FONT,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.64px",
          color: isAnnual ? "#FFFFFF" : "#111418",
        }}
      >
        Annually
      </button>
    </div>
  );
}

function getDisplayPrice(price: string, billingCycle: BillingCycle) {
  if (price === "Free") return price;
  const monthlyAmount = Number(price.replace("$", ""));
  if (!Number.isFinite(monthlyAmount)) return price;
  const amount = billingCycle === "monthly" ? monthlyAmount : monthlyAmount * 10;
  return `$${amount.toFixed(2)}`;
}

function VoiceCheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 10v4" stroke="#111418" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 7v10" stroke="#111418" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11 4v16" stroke="#111418" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 8v8" stroke="#111418" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 11v2" stroke="#111418" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="m15.5 17.3 1.7 1.7 3.3-4"
        stroke="#111418"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureList({ perks }: { perks: string[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {perks.map((perk) => (
        <li key={perk} className="flex h-6 items-center gap-3">
          <VoiceCheckIcon />
          <span
            style={{
              fontFamily: BODY_FONT,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: "-0.64px",
              color: "#4E5255",
            }}
          >
            {perk}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PlanCta({ href, label, featured }: { href: string; label: string; featured?: boolean }) {
  return (
    <a
      href={href}
      className="flex h-14 w-full items-center justify-between rounded-full py-[6px] pl-4 pr-[6px] transition"
      style={{
        border: `1px solid #F17F3F`,
        background: featured ? "#F17F3F" : "#FFFFFF",
        color: featured ? "#FFFFFF" : "#111418",
      }}
    >
      <span
        className="whitespace-nowrap"
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 700,
          fontSize: 16,
          lineHeight: "16px",
          letterSpacing: "-0.32px",
        }}
      >
        {label}
      </span>
      <span
        className="grid size-11 shrink-0 place-items-center rounded-full"
        style={{
          background: featured ? "#FFFFFF" : "#F17F3F",
          color: featured ? "#111418" : "#FFFFFF",
        }}
      >
        <ArrowUpRight size={22} strokeWidth={2.4} />
      </span>
    </a>
  );
}

function PopularBadge() {
  return (
    <div className="inline-flex h-[29px] items-center gap-1 rounded-full bg-white px-2">
      <Crown size={18} strokeWidth={1.6} className="text-podhub-orange" />
      <span
        style={{
          fontFamily: BODY_FONT,
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "21px",
          letterSpacing: "-0.28px",
          color: "#F17F3F",
        }}
      >
        Most Popular
      </span>
    </div>
  );
}

function PlanCard({ plan, billingCycle }: { plan: Plan; billingCycle: BillingCycle }) {
  const featured = Boolean(plan.featured);
  const displayPrice = getDisplayPrice(plan.price, billingCycle);
  const billingLabel = billingCycle === "monthly" ? "/per month" : "/per year";

  return (
    <article
      className="relative w-full max-w-[384px] rounded-2xl xl:w-[384px] xl:max-w-none"
      style={{
        height: featured ? 519 : 474,
        background: featured ? "#F6F6F6" : "#FFFFFF",
        border: `1px solid ${featured ? "#F17F3F" : "#E2E2E2"}`,
      }}
    >
      <div className="absolute left-6 right-6 top-8 sm:left-8 sm:right-8">
        {featured ? <PopularBadge /> : null}
        <div style={{ marginTop: featured ? 18 : 0 }}>
          <h3
            style={{
              fontFamily: TITLE_FONT,
              fontWeight: 600,
              fontSize: 32,
              lineHeight: "44.8px",
              letterSpacing: "-0.64px",
              color: "#111418",
            }}
          >
            {plan.name}
          </h3>
          <p
            className="mt-1"
            style={{
              maxWidth: 320,
              fontFamily: BODY_FONT,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: "-0.64px",
              color: "#4E5255",
            }}
          >
            {plan.description}
          </p>
        </div>
      </div>

      <div
        className="absolute left-6 right-6 h-px sm:left-8 sm:right-8"
        style={{ top: featured ? 198 : 153, background: featured ? "#F17F3F" : "#E2E2E2" }}
      />

      <div className="absolute left-6 right-6 sm:left-8 sm:right-8" style={{ top: featured ? 223 : 178 }}>
        <FeatureList perks={plan.perks} />
      </div>

      <div className="absolute left-6 right-6 sm:left-8 sm:right-8" style={{ top: featured ? 351 : 306 }}>
        <div className="flex h-12 items-end">
          <span
            style={{
              fontFamily: TITLE_FONT,
              fontWeight: 600,
              fontSize: 40,
              lineHeight: "48px",
              letterSpacing: "-1.6px",
              color: "#111418",
            }}
          >
            {displayPrice}
          </span>
          <span
            className="mb-[7px]"
            style={{
              fontFamily: BODY_FONT,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: "-0.64px",
              color: "#111418",
            }}
          >
            {billingLabel}
          </span>
        </div>
      </div>

      <div className="absolute left-6 right-6 sm:left-8 sm:right-8" style={{ top: featured ? 431 : 386 }}>
        <PlanCta href={plan.cta.href} label={plan.cta.label} featured={featured} />
      </div>
    </article>
  );
}

function UpgradeHeading() {
  return (
    <div className="relative mx-auto text-center">
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
        <span className="relative inline-block">
          Upgrade
          <span
            className="pointer-events-none absolute left-0 top-[88%] h-[10px] w-full min-w-[180px]"
            aria-hidden
          >
            <Image
              src={images.upgradeUnderline}
              alt=""
              width={196}
              height={12}
              className="h-full w-full object-contain"
            />
          </span>
        </span>{" "}
        Your Listening Today
      </h2>
      <p
        className="mx-auto mt-4 max-w-[548px]"
        style={{
          fontFamily: BODY_FONT,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.64px",
          color: "#4E5255",
        }}
      >
        {pricingHeader.body}
      </p>
    </div>
  );
}

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-20 lg:py-0">
      <Image
        src={images.upgradeBgPattern}
        alt=""
        fill
        sizes="1440px"
        className="pointer-events-none z-0 object-cover opacity-70"
        priority={false}
      />

      <div className="relative z-10 mx-auto hidden max-w-[1240px] flex-col items-center px-6 py-[100px] sm:px-8 lg:px-0 xl:flex">
        <MotionSection>
          <UpgradeHeading />
        </MotionSection>

        <MotionSection className="mt-8">
          <BillingToggle value={billingCycle} onChange={setBillingCycle} />
        </MotionSection>

        <MotionSection className="mt-14 grid w-full max-w-[1200px] grid-cols-[384px_384px_384px] items-start justify-center gap-6">
          <div style={{ paddingTop: 22.5 }}>
            <PlanCard plan={plans[0]} billingCycle={billingCycle} />
          </div>
          <PlanCard plan={plans[1]} billingCycle={billingCycle} />
          <div style={{ paddingTop: 22.5 }}>
            <PlanCard plan={plans[2]} billingCycle={billingCycle} />
          </div>
        </MotionSection>
      </div>

      <div className="relative mx-auto px-6 py-20 xl:hidden">
        <MotionSection>
          <div className="mx-auto max-w-[640px] text-center">
            <div className="relative inline-block">
              <h2 className="font-display text-[38px] leading-[46px] text-[#111418] sm:text-5xl sm:leading-[57.6px]">
                {pricingHeader.title}
              </h2>
              <Image
                src={images.upgradeUnderline}
                alt=""
                width={196}
                height={12}
                className="pointer-events-none absolute left-0 top-[calc(100%-10px)] h-3 w-[196px]"
              />
            </div>
            <p className="font-copy mx-auto mt-5 max-w-[548px] text-base leading-6 tracking-[-0.64px] text-[#4E5255]">
              {pricingHeader.body}
            </p>
          </div>
        </MotionSection>

        <MotionSection className="mt-8 flex justify-center">
          <BillingToggle value={billingCycle} onChange={setBillingCycle} />
        </MotionSection>

        <MotionSection className="mx-auto mt-12 grid max-w-[1200px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="flex w-full justify-center">
              <PlanCard plan={plan} billingCycle={billingCycle} />
            </div>
          ))}
        </MotionSection>
      </div>
    </section>
  );
}
