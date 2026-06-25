import Image from "next/image";

import { MotionSection } from "../ui/MotionSection";
import { HeroCta } from "../ui/HeroCta";
import { blogCta, blogHeader, posts } from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

type Post = (typeof posts)[number];

function BlogHeading({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "mx-auto w-full max-w-[606px] text-center" : "h-[122px] w-[1200px] text-center"}>
      <div className={compact ? "relative mx-auto inline-block" : "relative mx-auto h-[58px] w-[606px]"}>
        <h2
          className="relative z-10 whitespace-nowrap"
          style={{
            fontFamily: TITLE_FONT,
            fontWeight: 700,
            fontSize: compact ? "clamp(34px, 8vw, 48px)" : 48,
            lineHeight: compact ? "1.12" : "57.6px",
            letterSpacing: compact ? "-0.72px" : "-0.96px",
            color: "#111418",
          }}
        >
          {blogHeader.title}
        </h2>
        <Image
          src={images.blogUnderline}
          alt=""
          width={196}
          height={12}
          className={
            compact
              ? "absolute -bottom-1 left-[28%] z-0 h-3 w-[196px] max-w-[44%]"
              : "absolute left-[108px] top-12 z-0 h-3 w-[196px]"
          }
        />
      </div>
      <p
        className={compact ? "mx-auto mt-4 max-w-[502px]" : "mx-auto mt-4 w-[502px]"}
        style={{
          fontFamily: BODY_FONT,
          fontWeight: 400,
          fontSize: compact ? 15 : 16,
          lineHeight: compact ? "22px" : "24px",
          letterSpacing: compact ? "-0.45px" : "-0.64px",
          color: "#4E5255",
        }}
      >
        {blogHeader.body}
      </p>
    </div>
  );
}

function PostMeta({ post, small = false }: { post: Post; small?: boolean }) {
  return (
    <div
      className="flex items-center"
      style={{
        gap: small ? 22 : 28,
        fontFamily: BODY_FONT,
        fontWeight: 400,
        fontSize: small ? 14 : 16,
        lineHeight: small ? "21px" : "24px",
        letterSpacing: small ? "-0.28px" : "-0.64px",
        color: "#F7F7F7",
      }}
    >
      <span>{post.date}</span>
      <span>{post.readTime}</span>
    </div>
  );
}

function BlogImageCard({ post, feature = false }: { post: Post; feature?: boolean }) {
  return (
    <article
      className="group relative w-full overflow-hidden rounded-2xl bg-[#111418]"
      style={{
        aspectRatio: feature ? "792 / 624" : "384 / 302.4",
      }}
    >
      <Image
        src={post.image}
        alt=""
        fill
        sizes={feature ? "(max-width: 1024px) 66vw, 792px" : "(max-width: 1024px) 32vw, 384px"}
        className="object-cover transition duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,20,24,0)_0%,rgba(17,20,24,0.16)_38%,rgba(17,20,24,0.74)_74%,rgba(0,0,0,0.96)_100%)]" />
      <div
        className={feature ? "absolute left-[4.04%] top-[74.36%]" : "absolute left-[6.51%] top-[64.8%]"}
      >
        <PostMeta post={post} small={!feature} />
      </div>
      <h3
        className={feature ? "absolute left-[4.04%] top-[79.49%] w-[82.83%]" : "absolute left-[6.51%] top-[74.07%] w-[86.9%]"}
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 600,
          fontSize: feature ? "clamp(20px, 2.78vw, 40px)" : "clamp(12px, 1.67vw, 24px)",
          lineHeight: feature ? "1.2" : "1.2",
          letterSpacing: feature ? "-0.04em" : "-0.03em",
          color: "#FFFFFF",
        }}
      >
        {post.title}
      </h3>
    </article>
  );
}

export function Blog() {
  const [featuredPost, topPost, bottomPost] = posts;

  return (
    <section className="relative overflow-hidden bg-white pb-[60px] pt-[62px] lg:pb-[100px] lg:pt-[100px]" id="blog">
      <MotionSection className="mx-auto px-6 sm:px-16 lg:px-0">
        <BlogHeading compact />
      </MotionSection>

      <MotionSection className="mx-auto mt-12 hidden w-full max-w-[1200px] grid-cols-[minmax(0,792fr)_384fr] gap-6 px-6 sm:grid sm:px-16 lg:px-0">
        <BlogImageCard post={featuredPost} feature />
        <div className="grid content-between gap-6">
          <BlogImageCard post={topPost} />
          <BlogImageCard post={bottomPost} />
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-12 grid w-full gap-6 px-6 sm:hidden">
        <BlogImageCard post={featuredPost} feature />
        <BlogImageCard post={topPost} />
        <BlogImageCard post={bottomPost} />
      </MotionSection>

      <MotionSection className="mt-10 flex justify-center lg:mt-16">
        <HeroCta label={blogCta.label} href={blogCta.href} variant="outline" />
      </MotionSection>
    </section>
  );
}
