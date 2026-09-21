"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Newsletter } from "@/components/sections/Newsletter";
import { SocialIconList } from "@/components/ui/SocialIcons";
import { images } from "@/lib/assets";
import { posts, featuredPostBody } from "@/lib/content";

const META_FONT = "var(--font-public-sans), Public Sans, sans-serif";
const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";

interface BlogArticleViewProps {
  slug: string;
}

/* A self-contained "podcast studio" banner, standing in for a licensed photo
   we don't have in the asset pack — dark acoustic-foam wall, twin mics either
   side of a glowing wordmark, plus an animated waveform. */
function StudioBanner() {
  return (
    <div className="relative aspect-[1520/560] w-full overflow-hidden rounded-2xl sm:rounded-[28px]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 140% at 50% 20%, #5a1414 0%, #2a0d0d 45%, #150808 100%)",
        }}
      />
      {/* foam-panel pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="foam" width="46" height="40" patternUnits="userSpaceOnUse">
            <polygon points="23,2 44,20 23,38 2,20" fill="none" stroke="#000" strokeOpacity="0.35" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#foam)" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center gap-6 sm:gap-14">
        {[0, 1].map((side) => (
          <svg key={side} width="64" height="140" viewBox="0 0 64 140" className="opacity-90 sm:hidden">
            <rect x="24" y="0" width="16" height="70" rx="8" fill="#0e0e10" stroke="#c7c9cc" strokeWidth="2" />
            <rect x="14" y="70" width="36" height="8" rx="4" fill="#c7c9cc" />
            <rect x="28" y="78" width="8" height="40" fill="#c7c9cc" />
            <ellipse cx="32" cy="122" rx="22" ry="6" fill="#0e0e10" stroke="#c7c9cc" strokeWidth="2" />
          </svg>
        ))}
        <svg
          width="120"
          height="260"
          viewBox="0 0 64 140"
          className="hidden opacity-90 sm:block"
        >
          <rect x="24" y="0" width="16" height="70" rx="8" fill="#0e0e10" stroke="#c7c9cc" strokeWidth="2" />
          <rect x="14" y="70" width="36" height="8" rx="4" fill="#c7c9cc" />
          <rect x="28" y="78" width="8" height="40" fill="#c7c9cc" />
          <ellipse cx="32" cy="122" rx="22" ry="6" fill="#0e0e10" stroke="#c7c9cc" strokeWidth="2" />
        </svg>

        <div className="flex flex-col items-center">
          <span
            className="whitespace-nowrap text-[22px] font-extrabold uppercase tracking-[0.3em] text-transparent sm:text-[42px]"
            style={{
              fontFamily: TITLE_FONT,
              WebkitTextStroke: "1px #f4b8ff",
              textShadow: "0 0 18px #e879f9, 0 0 42px #a21caf",
            }}
          >
            Podcast
          </span>
          <div className="mt-3 flex items-end gap-[3px] sm:mt-5 sm:gap-1">
            {[6, 12, 18, 26, 34, 26, 18, 12, 20, 30, 22, 14, 8].map((h, i) => (
              <span
                key={i}
                className="w-[2px] rounded-full bg-white/90 sm:w-[3px]"
                style={{ height: h * 0.55, boxShadow: "0 0 6px rgba(255,255,255,0.7)" }}
              />
            ))}
          </div>
        </div>

        <svg
          width="120"
          height="260"
          viewBox="0 0 64 140"
          className="hidden scale-x-[-1] opacity-90 sm:block"
        >
          <rect x="24" y="0" width="16" height="70" rx="8" fill="#0e0e10" stroke="#c7c9cc" strokeWidth="2" />
          <rect x="14" y="70" width="36" height="8" rx="4" fill="#c7c9cc" />
          <rect x="28" y="78" width="8" height="40" fill="#c7c9cc" />
          <ellipse cx="32" cy="122" rx="22" ry="6" fill="#0e0e10" stroke="#c7c9cc" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function ShareRow() {
  return (
    <div className="mt-10 flex items-center gap-4 sm:mt-12">
      <span className="text-[16px] font-semibold text-[#111418]" style={{ fontFamily: TITLE_FONT }}>
        Share:
      </span>
      <SocialIconList names={["x", "linkedin", "facebook"]} tone="dark" size={16} />
    </div>
  );
}

export function BlogArticleView({ slug }: BlogArticleViewProps) {
  const [scrollIndex, setScrollIndex] = useState(0);

  const post = posts.find((p) => p.slug === slug) ?? posts[0];
  const hasFullBody = featuredPostBody.slug === post.slug;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 4);
  const maxIndex = Math.max(0, related.length - 3);

  return (
    <div className="min-h-screen bg-white text-[#111418] antialiased">
      <Navbar />

      <main>
        {/* ── Dark hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#150F0E] pb-14 pt-32 sm:pb-20 sm:pt-40 lg:pt-48">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 size-[650px] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
            style={{ background: "radial-gradient(circle, #EAB819 0%, rgba(234,184,25,0) 70%)" }}
          />

          <div className="relative z-10 mx-auto w-full max-w-[900px] px-5 sm:px-8">
            <div
              className="flex flex-wrap items-center justify-center gap-3 text-[14px] font-medium text-[#EAB819] sm:gap-4"
              style={{ fontFamily: META_FONT }}
            >
              <span className="inline-flex items-center gap-1.5 text-white/90">
                {post.date}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white/90">{post.readTime}</span>
            </div>

            <h1
              className="mx-auto mt-4 max-w-3xl text-center text-white"
              style={{
                fontFamily: TITLE_FONT,
                fontWeight: 700,
                fontSize: "clamp(28px, 5vw, 48px)",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
              }}
            >
              {post.title}
            </h1>
            <p
              className="mx-auto mt-4 max-w-xl text-center text-white/60"
              style={{ fontFamily: META_FONT, fontSize: 16, lineHeight: "26px" }}
            >
              {post.excerpt}
            </p>

            <div className="mt-10 sm:mt-12">
              <StudioBanner />
            </div>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────────────────────── */}
        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[780px] px-5 sm:px-8">
            {hasFullBody ? (
              <>
                {featuredPostBody.intro.map((p, i) => (
                  <p
                    key={i}
                    className="mt-5 text-[15px] leading-relaxed text-[#4E5255] first:mt-0 sm:text-[16px]"
                    style={{ fontFamily: META_FONT }}
                  >
                    {p}
                  </p>
                ))}

                {featuredPostBody.sections.map((section, si) => (
                  <div key={si} className="mt-12 sm:mt-14">
                    <h2
                      className="text-[26px] font-bold text-[#111418] sm:text-[32px]"
                      style={{ fontFamily: TITLE_FONT, lineHeight: 1.2, letterSpacing: "-0.02em" }}
                    >
                      {section.heading}
                    </h2>

                    {section.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        className="mt-4 text-[15px] leading-relaxed text-[#4E5255] sm:text-[16px]"
                        style={{ fontFamily: META_FONT }}
                      >
                        {p}
                      </p>
                    ))}

                    {"image" in section && section.image && (
                      <div className="relative mt-6 aspect-[792/340] w-full overflow-hidden rounded-2xl">
                        <Image
                          src={section.image}
                          alt={section.heading}
                          fill
                          className="object-cover"
                          sizes="(max-width: 780px) 100vw, 780px"
                        />
                      </div>
                    )}

                    {"list" in section && !("subheading" in section) && section.list && (
                      <ul className="mt-6 space-y-2.5">
                        {section.list.map((item, li) => (
                          <li
                            key={li}
                            className="flex gap-3 text-[15px] leading-relaxed text-[#4E5255] sm:text-[16px]"
                            style={{ fontFamily: META_FONT }}
                          >
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#4E5255]" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {"quote" in section && section.quote && (
                      <blockquote className="my-8 rounded-2xl border border-[#EAB819]/25 bg-[#FCF4D4]/40 p-6">
                        <p
                          className="text-[16px] italic leading-relaxed text-[#111418] sm:text-[18px]"
                          style={{ fontFamily: META_FONT }}
                        >
                          &ldquo;{section.quote.text}&rdquo;
                        </p>
                        <p
                          className="mt-3 text-[14px] font-semibold text-[#111418]"
                          style={{ fontFamily: TITLE_FONT }}
                        >
                          — {section.quote.author}
                        </p>
                      </blockquote>
                    )}

                    {"subheading" in section && section.subheading && (
                      <h3
                        className="mt-8 text-[19px] font-bold text-[#111418] sm:text-[22px]"
                        style={{ fontFamily: TITLE_FONT }}
                      >
                        {section.subheading}
                      </h3>
                    )}

                    {"subheading" in section && "list" in section && section.list && (
                      <ul className="mt-4 space-y-2.5">
                        {section.list.map((item, li) => (
                          <li
                            key={li}
                            className="flex gap-3 text-[15px] leading-relaxed text-[#4E5255] sm:text-[16px]"
                            style={{ fontFamily: META_FONT }}
                          >
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#4E5255]" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {"imagePair" in section && section.imagePair && (
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        {section.imagePair.map((src, ii) => (
                          <div key={ii} className="relative aspect-[386/342] w-full overflow-hidden rounded-2xl">
                            <Image
                              src={src}
                              alt={section.heading}
                              fill
                              className="object-cover"
                              sizes="(max-width: 780px) 50vw, 380px"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {"proTip" in section && section.proTip && (
                      <p
                        className="mt-6 text-[15px] leading-relaxed text-[#111418] sm:text-[16px]"
                        style={{ fontFamily: META_FONT }}
                      >
                        <span className="font-bold">Pro Tip:</span> {section.proTip}
                      </p>
                    )}

                    {"closing" in section && section.closing && (
                      <p
                        className="mt-6 text-[15px] leading-relaxed text-[#4E5255] sm:text-[16px]"
                        style={{ fontFamily: META_FONT }}
                      >
                        {section.closing}
                      </p>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <>
                <p
                  className="text-[15px] leading-relaxed text-[#4E5255] sm:text-[16px]"
                  style={{ fontFamily: META_FONT }}
                >
                  {post.excerpt}
                </p>
                <p
                  className="mt-5 text-[15px] leading-relaxed text-[#4E5255] sm:text-[16px]"
                  style={{ fontFamily: META_FONT }}
                >
                  In this article, {post.author} walks through practical, easy-to-apply ideas
                  you can put to use the next time you hit play — no special equipment or
                  prior experience required, just a willingness to experiment with your own
                  listening habits.
                </p>
                <p
                  className="mt-5 text-[15px] leading-relaxed text-[#4E5255] sm:text-[16px]"
                  style={{ fontFamily: META_FONT }}
                >
                  As always, the best approach is the one that fits naturally into your day.
                  Try a few of these ideas, keep what works, and let the rest go.
                </p>
              </>
            )}

            <ShareRow />
          </div>
        </section>

        {/* ── Discover More Latest Blogs ───────────────────────────── */}
        <section className="relative overflow-hidden bg-[#150F0E] py-16 sm:py-20 lg:py-24">
          <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-0">
            <div className="flex items-end justify-between gap-6 pb-10 sm:pb-12">
              <h2
                className="text-white"
                style={{
                  fontFamily: TITLE_FONT,
                  fontWeight: 700,
                  fontSize: "clamp(26px, 4vw, 40px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                Discover More{" "}
                <span className="relative inline-block">
                  Latest Blogs
                  <Image
                    src={images.line2}
                    alt=""
                    width={180}
                    height={16}
                    className="absolute -bottom-2 left-0 w-full"
                  />
                </span>
              </h2>

              <div className="hidden shrink-0 items-center gap-3 sm:flex">
                <button
                  type="button"
                  onClick={() => setScrollIndex((i) => Math.max(0, i - 1))}
                  disabled={scrollIndex === 0}
                  aria-label="Previous"
                  className="grid size-11 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10 disabled:opacity-30"
                >
                  <ArrowRight size={18} className="rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => setScrollIndex((i) => Math.min(maxIndex, i + 1))}
                  disabled={scrollIndex >= maxIndex}
                  aria-label="Next"
                  className="grid size-11 place-items-center rounded-full bg-[#EAB819] text-white transition hover:bg-[#F5C738] disabled:opacity-30"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(calc(-${scrollIndex} * (100% / 3 + 1.5rem)))` }}
              >
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block w-full shrink-0 sm:w-[calc((100%-3rem)/3)]"
                  >
                    <article className="overflow-hidden rounded-[20px]">
                      <div className="relative aspect-[463/250] w-full overflow-hidden rounded-[20px]">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="pt-4">
                        <div
                          className="flex items-center gap-3 text-[14px] text-white/50"
                          style={{ fontFamily: META_FONT }}
                        >
                          <span>{p.date}</span>
                          <span aria-hidden>•</span>
                          <span>{p.readTime}</span>
                        </div>
                        <h3
                          className="mt-2 line-clamp-2 text-white transition-colors group-hover:text-[#EAB819]"
                          style={{
                            fontFamily: TITLE_FONT,
                            fontWeight: 600,
                            fontSize: 20,
                            lineHeight: 1.3,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {p.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center sm:hidden">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-3 rounded-full bg-[#EAB819] py-2.5 pl-6 pr-2 text-[15px] font-semibold text-white"
                style={{ fontFamily: TITLE_FONT }}
              >
                <span>Browse More</span>
                <span className="grid size-8 place-items-center rounded-full bg-white text-[#EAB819]">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
