import Image from "next/image";

import { MotionSection } from "../../ui/MotionSection";
import { SocialIconList } from "../../ui/SocialIcons";
import { teamMembers, teamPageHeader } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

type TeamMember = (typeof teamMembers)[number];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article
      className="group flex w-full flex-col rounded-2xl p-6"
      style={{ background: "rgba(234, 184, 25, 0.10)" }}
    >
      <div className="relative aspect-[336/280] w-full overflow-hidden rounded-lg">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 336px"
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
        />
      </div>

      <div className="mt-6 flex w-full flex-wrap items-center justify-between gap-4">
        <div className="min-w-0 max-w-[200px]">
          <h3
            style={{
              fontFamily: TITLE_FONT,
              fontWeight: 600,
              fontSize: 22,
              lineHeight: "26.4px",
              letterSpacing: "-0.66px",
              color: "#FFFFFF",
            }}
          >
            {member.name}
          </h3>
          <p
            className="mt-1"
            style={{
              fontFamily: BODY_FONT,
              fontWeight: 400,
              fontSize: 15,
              lineHeight: "22px",
              letterSpacing: "-0.3px",
              color: "#E7E7E8",
            }}
          >
            {member.role}
          </p>
        </div>
        <SocialIconList names={member.socials} tone="light" size={16} />
      </div>
    </article>
  );
}

function TeamHeading() {
  const [line1, line2] = teamPageHeader.title.split("\n");

  return (
    <div className="mx-auto max-w-[680px] text-center">
      <h1
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 700,
          fontSize: "clamp(30px, 5vw, 48px)",
          lineHeight: "1.2",
          letterSpacing: "-0.96px",
          color: "#FFFFFF",
        }}
      >
        {line1}
        <br />
        {line2.split(teamPageHeader.highlight).map((part, idx, arr) => (
          <span key={idx}>
            {part}
            {idx < arr.length - 1 && (
              <span className="relative inline-block">
                {teamPageHeader.highlight}
                <span
                  className="pointer-events-none absolute left-0 top-[90%] h-[6px] w-full min-w-[110px]"
                  aria-hidden
                >
                  <Image
                    src={images.hostUnderline}
                    alt=""
                    width={125}
                    height={6}
                    className="h-full w-full object-contain"
                  />
                </span>
              </span>
            )}
          </span>
        ))}
      </h1>
      <p
        className="mx-auto mt-5 max-w-[560px]"
        style={{
          fontFamily: BODY_FONT,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.4px",
          color: "#CFD0D1",
        }}
      >
        {teamPageHeader.body}
      </p>
    </div>
  );
}

export function TeamGrid() {
  return (
    <section className="relative overflow-hidden bg-[#1D1413] pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pt-48">
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          left: "80%",
          top: 44.7,
          width: 316.8,
          height: 231.7,
          background: "#EAB819",
          opacity: 0.9,
          filter: "blur(115px)",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          left: "2%",
          top: 706.1,
          width: 316.8,
          height: 231.7,
          background: "#EAB819",
          opacity: 0.9,
          filter: "blur(115px)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-0">
        <MotionSection>
          <TeamHeading />
        </MotionSection>

        <MotionSection className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </MotionSection>
      </div>
    </section>
  );
}
