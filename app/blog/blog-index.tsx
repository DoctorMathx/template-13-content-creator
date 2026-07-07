"use client";
import { useMemo, useState } from "react";
import { PostCard } from "@/components/ui/post-card";
import { NewsletterBig } from "@/components/ui/newsletter";
import { Section } from "@/components/ui/section";
import { posts } from "@/mock/posts";
import type { Post } from "@/lib/types";

type Filter = "all" | Post["category"];
const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "newsletter", label: "Sunday letters" },
  { id: "podcast", label: "Podcast" },
  { id: "essay", label: "Essays" },
];

export function BlogIndex() {
  const [f, setF] = useState<Filter>("all");
  const list = useMemo(() => (f === "all" ? posts : posts.filter((p) => p.category === f)), [f]);
  return (
    <>
      <section className="bg-canvas border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-4xl">
          <div className="eyebrow">Read & listen</div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[80px] leading-[1.02] mt-4"><span className="italic">Every</span> essay, letter, and episode.</h1>
          <p className="prose-lede mt-6 max-w-2xl">Sunday letters, essays, and podcast episodes — six years of them. Most recent first.</p>
        </div>
      </section>
      <section className="sticky top-[68px] z-30 bg-white/95 backdrop-blur border-b border-line">
        <div className="container-x py-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {FILTERS.map((x) => (<button key={x.id} onClick={() => setF(x.id)} className={`chip whitespace-nowrap ${f === x.id ? "chip-dark" : "hover:border-[color:var(--ink)]"}`}>{x.label}</button>))}
        </div>
      </section>
      <Section pad="lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {list.map((p) => <PostCard key={p.id} p={p} />)}
        </div>
      </Section>
      <Section pad="sm"><NewsletterBig /></Section>
    </>
  );
}
