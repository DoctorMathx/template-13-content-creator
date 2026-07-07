import type { Post } from "@/lib/types";

const cover = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=80`;

export const posts: Post[] = [
  { id: "p1", title: "The Sunday letter, no. 214: On being read", slug: "letter-214-being-read", category: "newsletter", excerpt: "For most of my twenties I believed the way to become a serious writer was to be seen becoming one.", cover: cover("photo-1455390582262-044cdead277a"), publishedAt: "2026-06-30", readMins: 6, tags: ["newsletter", "craft"] },
  { id: "p2", title: "How to price a paid newsletter without guilt", slug: "pricing-paid-newsletter", category: "essay", excerpt: "The three questions I ask before setting a price on anything I sell to my audience.", cover: cover("photo-1554224155-6726b3ff858f"), publishedAt: "2026-06-22", readMins: 9, tags: ["money", "essays"] },
  { id: "p3", title: "Ep. 42: The economics of a small newsletter, with Ada Nwosu", slug: "podcast-042-ada-nwosu", category: "podcast", excerpt: "Ada runs a 12k-subscriber newsletter that earns more than her old salary. Here's how.", cover: cover("photo-1590602847861-f357a9332bbc"), publishedAt: "2026-06-18", audioDuration: "48 min", tags: ["podcast", "money"] },
  { id: "p4", title: "The one-page media kit that gets you sponsors", slug: "one-page-media-kit", category: "essay", excerpt: "A concrete template — steal it, adapt it, use it to get your first paid sponsor.", cover: cover("photo-1552664730-d307ca884978"), publishedAt: "2026-06-10", readMins: 7, tags: ["sponsors", "essays"] },
  { id: "p5", title: "The Sunday letter, no. 213: Small rooms", slug: "letter-213-small-rooms", category: "newsletter", excerpt: "On why the best professional rooms I've ever been in were also the smallest.", cover: cover("photo-1517502884422-41eaead166d4"), publishedAt: "2026-06-08", readMins: 5, tags: ["newsletter"] },
  { id: "p6", title: "Ep. 41: A quiet TikTok strategy that works", slug: "podcast-041-tiktok", category: "podcast", excerpt: "How I grew my TikTok to 310k without ever dancing, chasing trends, or losing sleep.", cover: cover("photo-1611262588024-d12430b98920"), publishedAt: "2026-06-01", audioDuration: "37 min", tags: ["podcast", "social"] },
];

export const postBySlug = (s: string) => posts.find((p) => p.slug === s);
export const featuredPost = () => posts[0];
