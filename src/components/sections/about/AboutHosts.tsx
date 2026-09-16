import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, createLucideIcon } from "lucide-react";

import { MotionSection } from "../../ui/MotionSection";
import { hosts, aboutHostsHeader, aboutHostsCta } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

const InstagramIcon = createLucideIcon("Instagram", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "5", key: "ig-frame" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "ig-lens" }],
  ["circle", { cx: "17.5", cy: "6.5", r: "1.2", fill: "currentColor", stroke: "none", key: "ig-dot" }],
]);

const ThreadsIcon = createLucideIcon("Threads", [
  ["path", { d: "M16.6 8.7c-.8-2.4-2.6-3.8-5.1-3.8-3.9 0-6.5 3-6.5 7.1 0 4.3 2.8 7.1 7 7.1 3.3 0 5.8-1.8 5.8-4.5 0-2.3-1.8-3.8-4.8-3.8h-1.2", key: "th-main" }],
  ["path", { d: "M18.8 10.1c-1.4-1.2-3.5-1.9-6.4-1.9", key: "th-top" }],
  ["path", { d: "M14.2 13.5c-.4 1.3-1.4 2.1-2.7 2.1-1.4 0-2.5-.9-2.5-2.2 0-1.2 1-2 2.8-2h1.1", key: "th-loop" }],
]);

function GlowBlobs() {
  return (
    <>
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          left: "10%",
          top: "15%",
          width: 360,
          height: 360,
          background: "#EAB819",
          opacity: 0.25,
          filter: "blur(130px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          right: "10%",
          bottom: "15%",
          width: 360,
          height: 360,
          background: "#EAB819",
          opacity: 0.2,
          filter: "blur(130px)",
        }}
        aria-hidden
      />
    </>
  );
}

function SocialButtons() {
  return (
    <div className="flex items-center gap-2">
      <a
        href="#"
        aria-label="X"
        className="grid size-9 place-items-center rounded-full text-white/80 transition hover:text-[#EAB819]"
      >
        <X size={18} strokeWidth={2} />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="grid size-9 place-items-center rounded-full text-white/80 transition hover:text-[#EAB819]"
      >
        <InstagramIcon size={18} strokeWidth={2} />
      </a>
      <a
        href="#"
        aria-label="Threads"
        className="grid size-9 place-items-center rounded-full text-white/80 transition hover:text-[#EAB819]"
      >
        <ThreadsIcon size={18} strokeWidth={2} />
      </a>
    </div>
  );
}

function HostCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <article
      className="group flex h-full w-full flex-col rounded-2xl bg-[#251B17] p-6 border border-white/10 transition-all duration-300 hover:border-[#EAB819]/40 shadow-lg"
    >
      <div className="relative aspect-[336/358] w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-6 flex w-full items-center justify-between gap-4">
        <div>
          <h3
            style={{
              fontFamily: TITLE_FONT,
              fontWeight: 600,
              fontSize: 22,
              lineHeight: "28px",
              letterSpacing: "-0.5px",
              color: "#FFFFFF",
            }}
          >
            {name}
          </h3>
          <p
            className="mt-1"
            style={{
              fontFamily: BODY_FONT,
              fontWeight: 400,
              fontSize: 15,
              lineHeight: "22px",
              letterSpacing: "-0.3px",
              color: "#CFD0D1",
            }}
          >
            {role}
          </p>
        </div>

        <SocialButtons />
      </div>
    </article>
  );
}

export function AboutHosts() {
  return (
    <section className="relative overflow-hidden bg-podhub-ink py-20 text-white lg:py-[100px]">
      <GlowBlobs />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        {/* Heading */}
        <MotionSection className="mx-auto max-w-[680px] text-center">
          <h2
            style={{
              fontFamily: TITLE_FONT,
              fontWeight: 700,
              fontSize: "clamp(34px, 4.5vw, 48px)",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            Meet Our{" "}
            <span className="relative inline-block">
              Team
              <span
                className="pointer-events-none absolute left-0 top-[90%] h-[8px] w-full"
                aria-hidden
              >
                <Image
                  src={images.hostUnderline}
                  alt=""
                  width={140}
                  height={8}
                  className="h-full w-full object-contain"
                />
              </span>
            </span>{" "}
            That Make<br />
            Every Story Special
          </h2>
        </MotionSection>

        {/* 3 Host Cards Grid */}
        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {hosts.map((host) => (
            <MotionSection key={host.name}>
              <HostCard name={host.name} role={host.role} image={host.image} />
            </MotionSection>
          ))}
        </div>

        {/* Centered CTA */}
        <MotionSection className="mt-14 flex justify-center">
          <Link
            href={aboutHostsCta.href}
            className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-[#EAB819] pl-6 pr-2 text-base font-semibold text-white shadow-[0_4px_25px_rgba(234,184,25,0.45)] transition-all duration-300 hover:bg-[#F5C738] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{aboutHostsCta.label}</span>
            <span className="grid size-10 place-items-center rounded-full bg-white text-[#111418] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </span>
          </Link>
        </MotionSection>
      </div>
    </section>
  );
}