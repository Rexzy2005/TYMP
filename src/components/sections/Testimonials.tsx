import Image from "next/image";

import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { MotionSection } from "../ui/MotionSection";
import { testimonial, testimonialHeader } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-podhub-bg py-20 md:py-28">
      <Container>
        <MotionSection>
          <SectionHeader eyebrow={testimonialHeader.eyebrow} title={testimonialHeader.title} />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-podhub-muted">
            {testimonialHeader.body}
          </p>
        </MotionSection>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-[1fr_1.1fr]">
          <MotionSection className="flex flex-col items-start gap-4">
            <div className="flex -space-x-2">
              {testimonial.sideAvatars.map((a, i) => (
                <span
                  key={i}
                  className={`grid size-10 place-items-center rounded-full text-xs font-semibold text-white ring-2 ring-podhub-bg ${a.color}`}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <h3 className="font-display text-2xl text-podhub-ink md:text-3xl">
              "{testimonial.quote}"
            </h3>
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full bg-podhub-orange-soft text-sm font-bold text-podhub-orange">
                {testimonial.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-podhub-ink">
                  {testimonial.author}
                </p>
                <p className="text-xs text-podhub-muted">{testimonial.role}</p>
              </div>
            </div>
          </MotionSection>

          <MotionSection className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-card">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 24rem, 80vw"
              />
            </div>
            <div className="absolute -right-4 -top-4 hidden h-20 w-20 rounded-full bg-radial-orange-strong md:block" />
          </MotionSection>
        </div>
      </Container>
    </section>
  );
}