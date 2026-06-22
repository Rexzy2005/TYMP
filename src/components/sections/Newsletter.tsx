import { Mail } from "lucide-react";

import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { NewsletterForm } from "../ui/NewsletterForm";
import { AvatarStack } from "../ui/AvatarStack";
import { MotionSection } from "../ui/MotionSection";
import { newsletter } from "@/lib/content";

export function Newsletter() {
  return (
    <section id="newsletter" className="bg-podhub-cream py-20 md:py-28">
      <Container>
        <MotionSection>
          <div className="relative overflow-hidden rounded-3xl bg-podhub-ink p-8 text-white shadow-card-dark md:p-14">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-podhub-orange/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-podhub-orange/15 blur-3xl" />

            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div className="space-y-5">
                <SectionHeader
                  eyebrow={newsletter.eyebrow}
                  title={newsletter.title}
                  align="left"
                  tone="dark"
                />
                <p className="max-w-md text-sm text-white/65">{newsletter.body}</p>
                <NewsletterForm ctaLabel={newsletter.cta.label} />
              </div>

              <div className="flex flex-col items-center gap-5">
                <div className="relative flex h-40 w-40 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-podhub-orange/30" />
                  <span className="absolute inset-3 rounded-full border border-podhub-orange/20" />
                  <span className="absolute inset-6 rounded-full bg-podhub-orange/20" />
                  <span className="grid size-14 place-items-center rounded-full bg-podhub-orange text-2xl text-white shadow-orange-glow">
                    <Mail size={24} strokeWidth={1.5} />
                  </span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center -space-x-2">
                    <AvatarStack items={newsletter.subscriberAvatars} size="md" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">
                    {newsletter.subscriberCount}+ Users are currently subscribed
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Join our growing community of podcast lovers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
