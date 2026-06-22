import { Check } from "lucide-react";

import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { PricingToggle } from "../ui/PricingToggle";
import { Button } from "../ui/Button";
import { Tag } from "../ui/Tag";
import { MotionSection } from "../ui/MotionSection";
import { plans, pricingHeader } from "@/lib/content";

type PlanCardProps = {
  name: string;
  price: string;
  badge?: string;
  cta: { label: string; href: string };
  perks: string[];
  featured?: boolean;
  annualPrice?: string;
  showAnnual?: boolean;
};

function PlanCard({
  name,
  price,
  badge,
  cta,
  perks,
  featured = false,
  annualPrice,
  showAnnual = false,
}: PlanCardProps) {
  return (
    <article
      className={`relative flex flex-col gap-6 rounded-2xl p-7 transition ${
        featured
          ? "bg-podhub-ink text-white shadow-card-dark ring-1 ring-podhub-orange/30"
          : "bg-white text-podhub-ink shadow-card ring-1 ring-podhub-line"
      }`}
    >
      {badge && (
        <Tag
          tone="accent"
          className={`absolute -top-3 left-6 ${!featured ? "bg-podhub-orange text-white" : ""}`}
        >
          {badge}
        </Tag>
      )}

      <div>
        <h3 className={`text-lg font-semibold ${featured ? "text-white" : "text-podhub-ink"}`}>
          {name}
        </h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span
            className={`font-display text-4xl font-bold ${featured ? "text-white" : "text-podhub-ink"}`}
          >
            {showAnnual && annualPrice ? annualPrice : price}
          </span>
          {showAnnual && annualPrice && (
            <span className="text-sm text-white/50 line-through">{price}</span>
          )}
        </div>
      </div>

      <ul className="flex flex-col gap-2.5">
        {perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-[10px] font-bold ${
                featured
                  ? "bg-podhub-orange/20 text-podhub-orange"
                  : "bg-podhub-success/15 text-podhub-success"
              }`}
            >
              <Check size={10} strokeWidth={3} />
            </span>
            <span className={featured ? "text-white/80" : "text-podhub-muted"}>
              {perk}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={cta.href}
        variant={featured ? "solid" : "outline"}
        size="md"
        className="mt-auto w-full justify-center"
        trailingArrow
      >
        {cta.label}
      </Button>
    </article>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-podhub-cream py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-20 right-1/2 translate-x-1/2 h-[500px] w-[500px] rounded-full bg-radial-orange opacity-20 blur-3xl" />
      </div>

      <Container className="relative">
        <MotionSection className="text-center">
          <SectionHeader
            eyebrow={pricingHeader.eyebrow}
            title={pricingHeader.title}
          />
          <p className="mx-auto mt-4 max-w-md text-sm text-podhub-muted">
            {pricingHeader.body}
          </p>

          <div className="mt-7 flex justify-center">
            <PricingToggle
              options={[
                { id: "monthly", label: "Monthly" },
                { id: "annually", label: "Annually" },
              ]}
              defaultValue="monthly"
            />
          </div>
        </MotionSection>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              badge={plan.badge}
              cta={plan.cta}
              perks={plan.perks}
              featured={plan.featured}
              annualPrice={
                plan.price !== "Free"
                  ? `$${(parseFloat(plan.price) * 0.8).toFixed(2)}`
                  : undefined
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
