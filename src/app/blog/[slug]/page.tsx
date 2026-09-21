import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogArticleView } from "@/components/sections/blog/BlogArticleView";
import { posts } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | TYMP",
    };
  }

  return {
    title: `${post.title} | TYMP Blog`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogArticleView slug={slug} />;
}
