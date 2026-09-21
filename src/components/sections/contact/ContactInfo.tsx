import { Mail, Phone } from "lucide-react";
import Image from "next/image";

import { MotionSection } from "../../ui/MotionSection";
import { contactInfoHeader, contactInfoCards, contactAddress } from "@/lib/content";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

const ICONS = { mail: Mail, phone: Phone } as const;

function InfoCard({ card }: { card: (typeof contactInfoCards)[number] }) {
  const Icon = ICONS[card.icon as keyof typeof ICONS];

  return (
    <a
      href={card.href}
      className="flex w-full items-center gap-4 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] sm:w-[280px]"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#FCF4D4]">
        <Icon size={20} className="text-[#EAB819]" />
      </span>
      <div className="min-w-0">
        <p style={{ fontFamily: TITLE_FONT, fontWeight: 700, fontSize: 17, color: "#111418" }}>{card.label}</p>
        <p className="truncate" style={{ fontFamily: BODY_FONT, fontSize: 15, color: "#4E5255" }}>
          {card.value}
        </p>
      </div>
    </a>
  );
}

function MapEmbed() {
  const query = encodeURIComponent(`${contactAddress.line1}, ${contactAddress.line2}`);

  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${query}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[1200/607] w-full overflow-hidden rounded-2xl"
      aria-label={`Open ${contactAddress.line1}, ${contactAddress.line2} in Google Maps`}
    >
      <Image
        src="/assets/contact/map.png"
        alt={`Map showing our studio location at ${contactAddress.line1}, ${contactAddress.line2}`}
        fill
        sizes="(max-width: 1240px) 100vw, 1240px"
        className="object-cover transition duration-500 group-hover:scale-[1.015]"
      />
    </a>
  );
}

export function ContactInfo() {
  return (
    <section className="relative bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-0">
        <MotionSection className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[480px]">
            <h2
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#111418",
              }}
            >
              {contactInfoHeader.title}
            </h2>
            <p className="mt-4" style={{ fontFamily: BODY_FONT, fontSize: 16, lineHeight: "24px", color: "#4E5255" }}>
              {contactInfoHeader.body}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            {contactInfoCards.map((card) => (
              <InfoCard key={card.label} card={card} />
            ))}
          </div>
        </MotionSection>

        <MotionSection className="mt-10 sm:mt-12">
          <MapEmbed />
        </MotionSection>
      </div>
    </section>
  );
}
