"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Mic,
  Clock,
  Share2,
  Play,
  ArrowRight,
  ArrowUpRight,
  X as CloseIcon,
  Check,
} from "lucide-react";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Newsletter } from "@/components/sections/Newsletter";
import { images } from "@/lib/assets";
import { allEpisodes } from "@/lib/content";

const META_FONT = "var(--font-public-sans), Public Sans, sans-serif";
const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";

interface EpisodeDetailsViewProps {
  episodeId: string;
}

export function EpisodeDetailsView({ episodeId }: EpisodeDetailsViewProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Find the current episode or default to episode 1
  const episode =
    allEpisodes.find((ep) => ep.id === episodeId) || allEpisodes[0];

  // Pick other episodes for "Discover More Latest Episodes"
  const otherEpisodes = allEpisodes
    .filter((ep) => ep.id !== episode.id)
    .slice(0, 2);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111418] antialiased">
      {/* ── 1. Header & Navigation ────────────────────────────────────── */}
      <Navbar />

      <main>
        {/* ── 2. Dark Hero Section ──────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#150F0E] pb-16 pt-36 sm:pb-24 sm:pt-44 lg:pb-32 lg:pt-48">
          {/* Subtle warm glow behind hero title */}
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[650px] rounded-full opacity-20 blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, #EAB819 0%, rgba(234,184,25,0) 70%)",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
            {/* Top metadata tags: Date | Episode Number | Duration */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[13px] sm:text-[15px] font-medium text-[#EAB819]">
              <span
                className="inline-flex items-center gap-1.5 text-white/90"
                style={{ fontFamily: META_FONT }}
              >
                <Calendar size={16} className="text-[#EAB819]" />
                {episode.id === "ep-01" ? "Apr 8, 2025" : episode.date}
              </span>
              <span className="text-white/40">|</span>
              <span
                className="inline-flex items-center gap-1.5 text-white/90"
                style={{ fontFamily: META_FONT }}
              >
                <Mic size={16} className="text-[#EAB819]" />
                {episode.number}
              </span>
              <span className="text-white/40">|</span>
              <span
                className="inline-flex items-center gap-1.5 text-white/90"
                style={{ fontFamily: META_FONT }}
              >
                <Clock size={16} className="text-[#EAB819]" />
                {episode.duration}
              </span>
            </div>

            {/* Main Episode Title */}
            <h1
              className="mx-auto mt-4 max-w-4xl text-center text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
              style={{
                fontFamily: TITLE_FONT,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            >
              {episode.title}
            </h1>

            {/* Large Featured Media Banner Container */}
            <div className="mt-8 sm:mt-12 overflow-hidden rounded-[24px] sm:rounded-[32px] border-2 border-white/20 bg-neutral-900 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={episode.heroImage || episode.image}
                  alt={episode.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1240px) 100vw, 1240px"
                />

                {/* Overlaid Frosted Glass Pills (Bottom Left & Bottom Right) */}
                <div className="absolute inset-x-4 bottom-4 sm:inset-x-8 sm:bottom-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pointer-events-none">
                  {/* Share on Social Media Pill */}
                  <div className="pointer-events-auto">
                    <button
                      type="button"
                      onClick={handleShare}
                      className="group flex items-center justify-between gap-3 sm:gap-4 rounded-full border border-white/25 bg-black/40 px-5 py-2.5 sm:px-6 sm:py-3 text-[14px] sm:text-[15px] font-medium text-white backdrop-blur-md transition-all hover:bg-black/60 active:scale-95 shadow-lg"
                      style={{ fontFamily: META_FONT }}
                    >
                      <span>
                        {copied ? "Link Copied!" : "Share on Social Media"}
                      </span>
                      <span className="grid size-8 sm:size-9 place-items-center rounded-full bg-white text-[#EAB819] transition-transform group-hover:scale-105">
                        {copied ? <Check size={16} /> : <Share2 size={16} />}
                      </span>
                    </button>
                  </div>

                  {/* Play Video Pill */}
                  <div className="pointer-events-auto">
                    <button
                      type="button"
                      onClick={() => setIsVideoOpen(true)}
                      className="group flex items-center justify-between gap-3 sm:gap-4 rounded-full border border-white/25 bg-black/40 px-5 py-2.5 sm:px-6 sm:py-3 text-[14px] sm:text-[15px] font-medium text-white backdrop-blur-md transition-all hover:bg-black/60 active:scale-95 shadow-lg"
                      style={{ fontFamily: META_FONT }}
                    >
                      <span>Play Video</span>
                      <span className="grid size-8 sm:size-9 place-items-center rounded-full bg-white text-[#EAB819] transition-transform group-hover:scale-110">
                        <Play size={16} className="fill-current ml-0.5" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Episode Content Body (Clean White Section) ─────────────── */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[840px] px-5 sm:px-8">
            {/* Host & Listen On Bar */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Left: Host Avatar + Host Name */}
              <div className="flex items-center gap-4">
                <div className="relative size-14 sm:size-16 shrink-0 overflow-hidden rounded-xl border border-black/10 shadow-sm">
                  <Image
                    src={
                      episode.host === "Max Hudson"
                        ? "/assets/episodes/host_max.jpg"
                        : episode.image || "/assets/episodes/host_max.jpg"
                    }
                    alt={episode.host}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#111418]"
                  style={{ fontFamily: TITLE_FONT }}
                >
                  {episode.host}
                </h3>
              </div>

              {/* Right: Listen on + Platforms */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  className="text-base sm:text-lg font-bold text-[#111418]"
                  style={{ fontFamily: TITLE_FONT }}
                >
                  Listen on
                </span>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  {/* Google Podcasts */}
                  <a
                    href="https://podcasts.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative size-8 sm:size-9 overflow-hidden rounded-full shadow-sm transition-transform hover:scale-110"
                    title="Google Podcasts"
                  >
                    <Image
                      src={images.listenGoogle}
                      alt="Google Podcasts"
                      fill
                      className="object-contain"
                    />
                  </a>
                  {/* Spotify */}
                  <a
                    href="https://spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative size-8 sm:size-9 overflow-hidden rounded-full shadow-sm transition-transform hover:scale-110"
                    title="Spotify"
                  >
                    <Image
                      src={images.listenSpotify}
                      alt="Spotify"
                      fill
                      className="object-contain"
                    />
                  </a>
                  {/* Apple Podcasts */}
                  <a
                    href="https://podcasts.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative size-8 sm:size-9 overflow-hidden rounded-full shadow-sm transition-transform hover:scale-110"
                    title="Apple Podcasts"
                  >
                    <Image
                      src={images.listenApple}
                      alt="Apple Podcasts"
                      fill
                      className="object-contain"
                    />
                  </a>
                  {/* Pocket Casts */}
                  <a
                    href="https://pocketcasts.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative size-8 sm:size-9 overflow-hidden rounded-full shadow-sm transition-transform hover:scale-110"
                    title="Pocket Casts"
                  >
                    <Image
                      src={images.listenPocket}
                      alt="Pocket Casts"
                      fill
                      className="object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-8 sm:my-10 border-[#E9EAEC]" />

            {/* Episodes Summary Heading */}
            <h2
              className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#111418]"
              style={{
                fontFamily: TITLE_FONT,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Episodes Summary
            </h2>

            {/* Body Paragraph 1 */}
            <p
              className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-[#4E5255]"
              style={{ fontFamily: META_FONT }}
            >
              Quantum computing might sound like something out of a sci-fi
              movie, but in this episode, we break it down into simple,
              digestible concepts. We explore how quantum computers differ from
              traditional computers, what qubits are, and why concepts like
              superposition and entanglement matter. Whether you&apos;re a tech
              enthusiast or just curious about the future of computing, this
              episode will help you grasp the basics without all the complex
              jargon.
            </p>

            {/* Body Paragraph 2 */}
            <p
              className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-[#4E5255]"
              style={{ fontFamily: META_FONT }}
            >
              We&apos;ll also discuss real-world applications of quantum
              computing, from revolutionizing cryptography to solving complex
              scientific problems at unprecedented speeds. Tune in to discover
              how this emerging technology could shape the future and what it
              means for everyday life.
            </p>

            {/* Quotation Callout Block */}
            <div className="my-8 sm:my-10 flex items-start gap-4 sm:gap-5 pl-1 sm:pl-2">
              <span
                className="select-none font-serif text-5xl sm:text-6xl font-black leading-none text-[#EAB819]"
                aria-hidden="true"
              >
                “
              </span>
              <blockquote
                className="text-lg sm:text-2xl font-bold leading-snug text-[#111418]"
                style={{
                  fontFamily: TITLE_FONT,
                  letterSpacing: "-0.015em",
                }}
              >
                Imagination is more important than knowledge. For knowledge is
                limited, whereas imagination encircles the world.
              </blockquote>
            </div>

            {/* Body Paragraph 3 */}
            <p
              className="text-[15px] sm:text-[16px] leading-relaxed text-[#4E5255]"
              style={{ fontFamily: META_FONT }}
            >
              As we wrap up this episode, we hope you&apos;re feeling a bit more
              at ease with quantum computing &amp; how it might impact our lives.
              Sure, the concepts can seem a bit overwhelming at first, but
              breaking them down makes it all click. From understanding qubits
              and superposition to their real-world applications, quantum
              computing is set to shake up industries in ways we&apos;re just
              beginning to uncover.
            </p>

            {/* ── 4. Featured Guests 2-Column Grid ────────────────────────── */}
            <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
              {/* Guest 1: Jacob Jones */}
              <div>
                <div className="relative aspect-[4/4.3] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] shadow-sm">
                  <Image
                    src="/assets/episodes/guest_jacob.jpg"
                    alt="Jacob Jones - Environmental Activist"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
                <h3
                  className="mt-5 text-xl sm:text-2xl font-bold text-[#111418]"
                  style={{ fontFamily: TITLE_FONT }}
                >
                  About Jacob Jones
                </h3>
                <p
                  className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-[#4E5255]"
                  style={{ fontFamily: META_FONT }}
                >
                  At TYMP, Jacob creates quality podcasts full of value and
                  entertainment. Discover new voices and enjoy great stories —
                  TYMP is your go-to podcast hub.
                </p>
              </div>

              {/* Guest 2: Howard Ronald */}
              <div>
                <div className="relative aspect-[4/4.3] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] shadow-sm">
                  <Image
                    src="/assets/episodes/guest_howard.jpg"
                    alt="Howard Ronald - Design Expert"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
                <h3
                  className="mt-5 text-xl sm:text-2xl font-bold text-[#111418]"
                  style={{ fontFamily: TITLE_FONT }}
                >
                  About Howard Ronald
                </h3>
                <p
                  className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-[#4E5255]"
                  style={{ fontFamily: META_FONT }}
                >
                  A visionary entrepreneur who transforms ideas into reality,
                  inspiring others with her journey of resilience, innovation,
                  and success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Discover More Latest Episodes (Dark Section) ─────────── */}
        <section className="relative overflow-hidden bg-[#150F0E] py-16 sm:py-20 lg:py-28">
          <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-0">
            {/* Header row: Title with flourish line on left, Browse More CTA on right */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between pb-10 sm:pb-12">
              <div>
                <h2
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
                  style={{
                    fontFamily: TITLE_FONT,
                    letterSpacing: "-0.025em",
                  }}
                >
                  Discover More Latest{" "}
                  <span className="relative inline-block">
                    Episodes
                    <Image
                      src={images.line2}
                      alt=""
                      width={180}
                      height={16}
                      className="absolute -bottom-2 left-0 w-full"
                    />
                  </span>
                </h2>
              </div>

              <Link
                href="/episodes"
                className="group inline-flex items-center gap-3 self-start rounded-full bg-[#EAB819] py-2.5 pl-6 pr-2 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(234,184,25,0.25)] transition-all hover:bg-[#F5C738] active:scale-95 sm:self-auto"
                style={{ fontFamily: TITLE_FONT }}
              >
                <span>Browse More</span>
                <span className="grid size-8 place-items-center rounded-full bg-white text-[#EAB819] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            </div>

            {/* 2 Episode Cards Grid (Dark Surface) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {otherEpisodes.map((ep) => (
                <Link
                  key={ep.id}
                  href={`/episodes/${ep.id}`}
                  className="group block"
                >
                  <article className="flex h-full flex-col sm:flex-row overflow-hidden rounded-[24px] border border-white/10 bg-[#231816] p-4 sm:p-5 transition-all duration-300 hover:border-[#EAB819]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {/* Left: Thumbnail */}
                    <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[16px] sm:h-full sm:w-[150px] md:w-[170px] lg:w-[176px]">
                      <Image
                        src={ep.image}
                        alt={ep.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 180px"
                      />
                    </div>

                    {/* Right: Details */}
                    <div className="flex flex-1 flex-col justify-between pt-4 sm:pl-5 sm:pt-0">
                      <div>
                        {/* Top row: Episode Number + Host Name */}
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className="flex items-center gap-1.5 text-[14px] font-medium text-white/70"
                            style={{ fontFamily: META_FONT }}
                          >
                            <Mic size={15} className="text-[#EAB819]" />
                            {ep.number}
                          </span>
                          <span
                            className="text-[14px] font-medium text-white/70"
                            style={{ fontFamily: META_FONT }}
                          >
                            {ep.host}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="mt-3 line-clamp-2 text-white transition-colors group-hover:text-[#EAB819]"
                          style={{
                            fontFamily: TITLE_FONT,
                            fontWeight: 700,
                            fontSize: "clamp(19px, 2.2vw, 24px)",
                            lineHeight: 1.25,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {ep.title}
                        </h3>

                        {/* Category Subtitle */}
                        <p
                          className="mt-1.5 text-[14px] sm:text-[15px] text-white/60"
                          style={{
                            fontFamily: META_FONT,
                            fontWeight: 400,
                            lineHeight: 1.4,
                          }}
                        >
                          {ep.category}
                        </p>
                      </div>

                      {/* Bottom row: Duration on left, Arrow button on right */}
                      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3.5 sm:mt-6 sm:pt-4">
                        <div
                          className="flex items-center gap-1.5 text-[14px] text-white/60"
                          style={{ fontFamily: META_FONT }}
                        >
                          <Clock size={15} className="text-[#EAB819]" />
                          <span>{ep.duration}</span>
                        </div>

                        <div className="grid size-10 place-items-center rounded-full border border-white/25 bg-transparent text-white transition-all duration-200 group-hover:border-[#EAB819] group-hover:bg-[#EAB819] group-hover:text-black">
                          <ArrowRight
                            size={17}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Newsletter Section ─────────────────────────────────────── */}
        <Newsletter />
      </main>

      {/* ── 7. Footer ─────────────────────────────────────────────────── */}
      <Footer />

      {/* ── Interactive Video Player Modal ────────────────────────────── */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-opacity animate-in fade-in"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/25 transition-all"
              aria-label="Close video player"
            >
              <CloseIcon size={20} />
            </button>

            {/* Video container */}
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title={`${episode.title} Video Preview`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
