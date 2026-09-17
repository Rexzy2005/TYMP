"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, RotateCw, Check } from "lucide-react";

import { MotionSection } from "../../ui/MotionSection";
import { blogCategories, blogExploreHeader, posts } from "@/lib/content";

const META_FONT = "var(--font-public-sans), Public Sans, sans-serif";
const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "Select Category" ||
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedPosts = useMemo(
    () => filteredPosts.slice(0, visibleCount),
    [filteredPosts, visibleCount]
  );

  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, filteredPosts.length));
      setIsLoadingMore(false);
    }, 400);
  };

  return (
    <section className="relative overflow-hidden bg-[#1D1413] py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-0">
        {/* Header row: title on left, search + category on right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2
            className="whitespace-pre-line text-white"
            style={{
              fontFamily: TITLE_FONT,
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
          >
            {blogExploreHeader.title}
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Category Dropdown Pill */}
            <div className="relative w-full sm:w-[220px]">
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-full border border-white/15 bg-transparent px-5 py-3 text-left text-[15px] font-medium text-white transition-all hover:border-white/30 focus:outline-none"
                style={{ fontFamily: META_FONT }}
              >
                <span className="truncate">{selectedCategory}</span>
                <ChevronDown
                  size={18}
                  className={`text-white/60 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-full rounded-2xl border border-black/[0.08] bg-white py-2 shadow-[0_12px_32px_rgba(0,0,0,0.24)]">
                  {blogCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsDropdownOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-[14px] transition-colors hover:bg-gray-50 ${
                        selectedCategory === cat ? "font-semibold text-[#EAB819]" : "text-[#4E5255]"
                      }`}
                    >
                      <span>{cat}</span>
                      {selectedCategory === cat && <Check size={16} className="text-[#EAB819]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Pill Input */}
            <div className="w-full sm:w-[240px]">
              <div className="flex items-center rounded-full border border-white/15 bg-transparent py-1.5 pl-5 pr-1.5 transition-all focus-within:border-[#EAB819]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Blog"
                  className="w-full bg-transparent text-[15px] text-white placeholder:text-white/40 focus:outline-none"
                  style={{ fontFamily: META_FONT }}
                />
                <button
                  type="button"
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EAB819] text-white transition-transform hover:scale-105 active:scale-95"
                  aria-label="Search"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3-column post grid */}
        <div className="mt-10 sm:mt-12">
          {displayedPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] py-16 text-center">
              <Search size={36} className="mb-3 text-white/25" />
              <h3 className="text-lg font-semibold text-white">No articles found</h3>
              <p className="mt-1 text-sm text-white/50">
                Try adjusting your search query or choosing another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("Select Category");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center rounded-full bg-[#EAB819] px-5 py-2 text-sm font-medium text-white shadow hover:bg-[#F5C738]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayedPosts.map((post) => (
                <MotionSection key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article className="flex h-full flex-col overflow-hidden rounded-[20px]">
                      <div className="relative aspect-[384/280] w-full overflow-hidden rounded-[20px]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="pt-4">
                        <div
                          className="flex items-center gap-3 text-[14px] text-white/50"
                          style={{ fontFamily: META_FONT }}
                        >
                          <span>{post.date}</span>
                          <span aria-hidden>•</span>
                          <span>{post.readTime}</span>
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
                          {post.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                </MotionSection>
              ))}
            </div>
          )}
        </div>

        {/* Load More Topics */}
        {hasMore && (
          <div className="mt-12 flex justify-center sm:mt-16">
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
        )}
      </div>
    </section>
  );
}
