import Image from "next/image";

import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { MotionSection } from "../ui/MotionSection";
import { posts, blogHeader, blogCta } from "@/lib/content";

type PostCardProps = {
  title: string;
  category: string;
  featured?: boolean;
  image: string;
};

function PostCard({ title, category, featured = false, image }: PostCardProps) {
  return (
    <article
      className={`group flex gap-4 ${featured ? "flex-col" : ""}`}
    >
      <div
        className={`relative overflow-hidden rounded-xl ${featured ? "aspect-[16/10] w-full" : "h-20 w-20 shrink-0"}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.04]"
          sizes={featured ? "(min-width: 768px) 38rem, 90vw" : "80px"}
        />
      </div>
      <div className={`flex flex-col ${featured ? "mt-4 gap-3" : "justify-center gap-1"}`}>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-podhub-orange">
          {category}
        </span>
        <h3
          className={`font-semibold text-podhub-ink transition group-hover:text-podhub-orange ${featured ? "text-lg leading-snug" : "text-sm line-clamp-2"}`}
        >
          {title}
        </h3>
        {featured && (
          <span className="mt-1 text-xs text-podhub-muted">5 min read · 2 days ago</span>
        )}
      </div>
    </article>
  );
}

export function Blog() {
  const featuredPost = posts.find((p) => p.featured)!;
  const sidePosts = posts.filter((p) => !p.featured);

  return (
    <section className="bg-podhub-bg py-20 md:py-28">
      <Container>
        <MotionSection>
          <SectionHeader
            eyebrow={blogHeader.eyebrow}
            title={blogHeader.title}
          />
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-podhub-muted">
            {blogHeader.body}
          </p>
        </MotionSection>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <MotionSection>
            <PostCard
              title={featuredPost.title}
              category={featuredPost.category}
              featured
              image={featuredPost.image}
            />
          </MotionSection>

          <MotionSection className="flex flex-col gap-5">
            {sidePosts.map((post) => (
              <PostCard
                key={post.title}
                title={post.title}
                category={post.category}
                image={post.image}
              />
            ))}
          </MotionSection>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={blogCta.href} variant="solid" size="lg" trailingArrow>
            {blogCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}