import Image from "next/image";

import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { SocialIconList } from "../ui/SocialIcons";
import { MotionSection } from "../ui/MotionSection";
import { hosts, hostsHeader, hostsCta } from "@/lib/content";

function HostCard({
  name,
  role,
  image,
  socials,
}: {
  name: string;
  role: string;
  image: string;
  socials: string[];
}) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-podhub-ink-2 ring-1 ring-white/5 transition hover:ring-podhub-orange/40">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 768px) 22rem, 90vw"
        />
        <div className="absolute bottom-4 right-4 rounded-full bg-podhub-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
          Hosts
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <div>
          <h3 className="text-base font-semibold text-white">{name}</h3>
          <p className="mt-0.5 text-xs text-white/55">{role}</p>
        </div>
        <SocialIconList names={socials} size={14} />
      </div>
    </article>
  );
}

export function Hosts() {
  return (
    <section
      id="hosts"
      className="relative overflow-hidden bg-podhub-ink py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-radial-orange opacity-50" />
      </div>

      <Container className="relative">
        <MotionSection>
          <SectionHeader
            eyebrow={hostsHeader.eyebrow}
            title={hostsHeader.title}
            align="center"
            tone="dark"
          />
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/60">
            {hostsHeader.body}
          </p>
        </MotionSection>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {hosts.map((h) => (
            <HostCard
              key={h.name}
              name={h.name}
              role={h.role}
              image={h.image}
              socials={h.socials}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={hostsCta.href} variant="solid" size="lg" trailingArrow>
            {hostsCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}