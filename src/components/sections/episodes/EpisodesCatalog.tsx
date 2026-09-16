"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mic, Clock, ArrowRight, Search, ChevronDown, RotateCw, Check } from "lucide-react";

import { MotionSection } from "../../ui/MotionSection";
import { allEpisodes, episodesCategories } from "@/lib/content";

const META_FONT = "var(--font-public-sans), Public Sans, sans-serif";
const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";

export function EpisodesCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("Episodes Category");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Filter & search logic
  const filteredEpisodes = useMemo(() => {
    return allEpisodes.filter((ep) => {
      const matchesCategory =
        selectedCategory === "Episodes Category" ||
        selectedCategory === "All" ||
        ep.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesSearch =
        ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.host.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.number.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedEpisodes = useMemo(() => {
    return filteredEpisodes.slice(0, visibleCount);
  }, [filteredEpisodes, visibleCount]);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 4, allEpisodes.length));
      setIsLoadingMore(false);
    }, 400);
  };

  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24">
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-0">
        {/* ── Filter Bar: Search Input (Left) & Dropdown (Right) ────────── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          {/* Search Pill Input */}
          <div className="relative w-full sm:w-[340px] md:w-[380px]">
            <div className="flex items-center rounded-full border border-[#E1E2E4] bg-white py-1.5 pl-5 pr-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all focus-within:border-[#EAB819] focus-within:ring-2 focus-within:ring-[#EAB819]/15">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full bg-transparent text-[15px] text-[#111418] placeholder:text-[#9DA0A4] focus:outline-none"
                style={{ fontFamily: META_FONT }}
              />
              <button
                type="button"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-[#111418] text-white transition-transform hover:scale-105 active:scale-95"
                aria-label="Search"
              >
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Category Dropdown Pill */}
          <div className="relative w-full sm:w-[240px] md:w-[260px]">
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-full border border-[#E1E2E4] bg-white px-5 py-3 text-left text-[15px] font-medium text-[#111418] shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all hover:border-[#CFD0D1] focus:outline-none"
              style={{ fontFamily: META_FONT }}
            >
              <span className="truncate">{selectedCategory}</span>
              <ChevronDown
                size={18}
                className={`text-[#717477] transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-full rounded-2xl border border-black/[0.08] bg-white py-2 shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
                {episodesCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-[14px] transition-colors hover:bg-gray-50 ${
                      selectedCategory === cat
                        ? "font-semibold text-[#EAB819]"
                        : "text-[#4E5255]"
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <Check size={16} className="text-[#EAB819]" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Episodes 2-Column Grid ───────────────────────────────────── */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          {displayedEpisodes.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 py-16 text-center">
              <Search size={36} className="text-gray-300 mb-3" />
              <h3 className="text-lg font-semibold text-[#111418]">No episodes found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search query or choosing another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("Episodes Category");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center rounded-full bg-[#EAB819] px-5 py-2 text-sm font-medium text-white shadow hover:bg-[#F5C738]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {displayedEpisodes.map((ep) => (
                <MotionSection key={ep.id}>
                  <Link href={`/episodes/${ep.id}`} className="block h-full cursor-pointer">
                    <article className="group flex h-full flex-col sm:flex-row overflow-hidden rounded-[24px] border border-[#E9EAEC] bg-white p-4 sm:p-5 transition-all duration-300 hover:border-[#EAB819]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                      {/* Left: Host Picture */}
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
                              className="flex items-center gap-1.5 text-[14px] font-medium text-[#111418]"
                              style={{ fontFamily: META_FONT }}
                            >
                              <Mic size={15} className="text-[#EAB819]" />
                              {ep.number}
                            </span>
                            <span
                              className="text-[14px] font-medium text-[#111418]"
                              style={{ fontFamily: META_FONT }}
                            >
                              {ep.host}
                            </span>
                          </div>

                          {/* Title */}
                          <h3
                            className="mt-3 line-clamp-2 text-[#111418] transition-colors group-hover:text-[#EAB819]"
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
                            className="mt-1.5 text-[14px] sm:text-[15px] text-[#717477]"
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
                        <div className="mt-5 flex items-center justify-between border-t border-[#F0F1F2] pt-3.5 sm:mt-6 sm:pt-4">
                          <div
                            className="flex items-center gap-1.5 text-[14px] text-[#717477]"
                            style={{ fontFamily: META_FONT }}
                          >
                            <Clock size={15} className="text-[#717477]" />
                            <span>{ep.duration}</span>
                          </div>

                          <div
                            className="grid size-10 place-items-center rounded-full border border-[#D5D7DA] bg-white text-[#111418] transition-all duration-200 group-hover:border-[#EAB819] group-hover:bg-[#EAB819] group-hover:text-black"
                            aria-label={`Listen to ${ep.title}`}
                          >
                            <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </MotionSection>
              ))}
            </div>
          )}
        </div>

        {/* ── Centered "Load More Topics" Pill Button ─────────────────────── */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="group flex items-center gap-3 rounded-full bg-[#EAB819] py-2.5 pl-6 pr-2.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(234,184,25,0.3)] transition-all hover:bg-[#D4A20D] hover:shadow-[0_12px_28px_rgba(234,184,25,0.4)] active:scale-95 disabled:opacity-75"
            style={{ fontFamily: TITLE_FONT }}
          >
            <span>{isLoadingMore ? "Loading Topics..." : "Load More Topics"}</span>
            <span className="grid size-9 place-items-center rounded-full bg-white text-[#EAB819] transition-transform duration-300 group-hover:rotate-180">
              <RotateCw size={16} className={isLoadingMore ? "animate-spin" : ""} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
