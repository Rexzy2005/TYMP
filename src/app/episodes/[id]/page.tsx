import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EpisodeDetailsView } from "@/components/sections/episodes/EpisodeDetailsView";
import { allEpisodes } from "@/lib/content";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return allEpisodes.map((episode) => ({
    id: episode.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const episode = allEpisodes.find((ep) => ep.id === id);

  if (!episode) {
    return {
      title: "Episode Not Found | TYMP",
    };
  }

  return {
    title: `${episode.title} - ${episode.number} | TYMP Podcast`,
    description: `Listen to ${episode.title} hosted by ${episode.host} on TYMP Podcast. ${episode.category} • ${episode.duration}`,
  };
}

export default async function EpisodePage({ params }: PageProps) {
  const { id } = await params;
  const episode = allEpisodes.find((ep) => ep.id === id);

  if (!episode) {
    notFound();
  }

  return <EpisodeDetailsView episodeId={id} />;
}
