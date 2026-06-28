import Image from "next/image";
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

const socialIcons = [
  { label: "X", Icon: X },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Threads", Icon: ThreadsIcon },
];

function SocialButtons() {
  return (
    <div className="flex items-center gap-2">
      {socialIcons.map(({ label, Icon }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className="grid size-10 place-items-center text-white transition hover:text-podhub-orange"
        >
          <Icon size={24} strokeWidth={2.1} />
        </a>
      ))}
    </div>
  );
}

function HostCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <article
      className="group flex min-h-[519px] w-full max-w-[384px] flex-col rounded-2xl p-6"
      style={{ background: "rgba(241, 127, 63, 0.10)" }}
    >
      <div className="relative aspect-[336/358] w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 420px) 100vw, 336px"
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
        />
      </div>

      <div className="mt-8 flex w-full flex-wrap items-center justify-between gap-4">
        <div className="min-w-0 max-w-[200px]">
          <h3
            style={{
              fontFamily: TITLE_FONT,
              fontWeight: 600,
              fontSize: 24,
              lineHeight: "28.8px",
              letterSpacing: "-0.72px",
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
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: "-0.64px",
              color: "#E7E7E8",
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

function HostCta() {
  return (
    <a
      href={aboutHostsCta.href}
      className="inline-flex h-14 items-center gap-4 rounded-full bg-podhub-orange py-[6px] pl-4 pr-[6px] text-white shadow-orange-glow transition hover:bg-podhub-orange-dark"
      style={{
        fontFamily: TITLE_FONT,
        fontWeight: 700,
        fontSize: 16,
        lineHeight: "16px",
        letterSpacing: "-0.32px",
      }}
    >
      <span className="whitespace-nowrap">{aboutHostsCta.label}</span>
      <span className="grid size-11 place-items-center rounded-full bg-white text-[#111418]">
        <ArrowUpRight size={22} strokeWidth={2.5} />
      </span>
    </a>
  );
}

function HostHeading() {
  const [t1, t2] = aboutHostsHeader.title.split("\n");
  return (
    <div className="relative mx-auto h-[116px] w-[567px] text-center">
      <h2
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 700,
          fontSize: 48,
          lineHeight: "57.6px",
          letterSpacing: "-0.96px",
          color: "#FFFFFF",
        }}
      >
        <span className="block whitespace-nowrap">{t1}</span>
        <span className="block whitespace-nowrap">{t2}</span>
      </h2>
      <Image
        src={images.hostUnderline}
        alt=""
        width={125}
        height={6}
        className="pointer-events-none absolute left-1/2 top-[110px] h-[6px] w-[125px] -translate-x-1/2"
      />
    </div>
  );
}

export function AboutHosts() {
  return (
    <section className="relative overflow-hidden bg-[#1D1413] text-white">
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          left: 1180.8,
          top: 44.7,
          width: 316.8,
          height: 231.7,
          background: "#F17F3F",
          opacity: 0.9,
          filter: "blur(115px)",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          left: 14.4,
          top: 706.1,
          width: 316.8,
          height: 231.7,
          background: "#F17F3F",
          opacity: 0.9,
          filter: "blur(115px)",
        }}
      />

      <div className="relative mx-auto hidden h-[1002px] w-[1440px] xl:block">
        <MotionSection className="absolute left-[436.5px] top-[100px] h-[116px] w-[567px]">
          <HostHeading />
        </MotionSection>

        <MotionSection className="absolute left-[120px] top-[271px] flex gap-6">
          {hosts.map((host) => (
            <HostCard key={host.name} name={host.name} role={host.role} image={host.image} />
          ))}
        </MotionSection>

        <MotionSection className="absolute left-[617px] top-[846px]">
          <HostCta />
        </MotionSection>
      </div>

      <div className="relative mx-auto px-6 py-20 xl:hidden">
        <MotionSection>
          <div className="mx-auto max-w-[620px] text-center">
            <h2 className="font-display whitespace-pre-line text-[38px] leading-[46px] text-white sm:text-5xl sm:leading-[57.6px]">
              {aboutHostsHeader.title}
            </h2>
            <Image
              src={images.hostUnderline}
              alt=""
              width={125}
              height={6}
              className="mx-auto mt-1 h-[6px] w-[125px]"
            />
          </div>
        </MotionSection>

        <MotionSection className="mx-auto mt-14 grid max-w-[1200px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hosts.map((host) => (
            <div key={host.name} className="flex justify-center">
              <HostCard name={host.name} role={host.role} image={host.image} />
            </div>
          ))}
        </MotionSection>

        <MotionSection className="mt-14 flex justify-center">
          <HostCta />
        </MotionSection>
      </div>
    </section>
  );
}