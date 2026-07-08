import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { NewsletterBig } from "@/components/ui/newsletter";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "About" };

const TIMELINE = [
  { y: "2019", t: "Started writing on Twitter", body: "Late-night threads about design, work, and being a young Nigerian creative online." },
  { y: "2020", t: "Started the blog", body: "Long-form pieces nobody read. But I kept writing, once a week." },
  { y: "2021", t: "Migrated to a newsletter", body: "First 200 subscribers. First moment of thinking: this could be something." },
  { y: "2023", t: "10,000 subscribers", body: "Started shipping paid guides. Left the day job. Never looked back." },
  { y: "2024", t: "Podcast launched", body: "You're Making It went out for the first time. Now at 180k monthly plays." },
  { y: "2026", t: "42,000 readers", body: "Sunday letter is the most-read independent creative newsletter in Nigeria." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-canvas border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-4xl">
          <div className="eyebrow">About</div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[80px] leading-[1.02] mt-4"><span className="italic">Hi.</span> I&apos;m Tobi.</h1>
          <p className="prose-lede mt-6 max-w-2xl">{siteConfig.creator.shortBio}</p>
        </div>
      </section>

      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5"><div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvas border border-line"><Image src={siteConfig.creator.portrait} alt={siteConfig.creator.name} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" /></div></div>
          <div className="lg:col-span-7">
            <div className="space-y-4 max-w-xl text-[16px] leading-relaxed text-[color:var(--charcoal)]">{siteConfig.creator.longBio.map((p) => <p key={p}>{p}</p>)}</div>
          </div>
        </div>
      </Section>

      <div className="container-x"><div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-canvas border border-line"><Image src="/img/hero-scene.jpg" alt="A working session" fill sizes="1200px" className="object-cover" /></div></div>

      <Section tone="paper" pad="lg">
        <SectionHeader eyebrow="A short timeline" title="Six years of shipping." />
        <div className="max-w-3xl mx-auto">
          {TIMELINE.map((e, i) => (
            <div key={e.y} className="flex gap-6 md:gap-10 py-6 border-b border-line last:border-0">
              <div className="w-16 shrink-0"><div className="font-display text-2xl font-bold tabular-nums text-[color:var(--accent-ink)]">{e.y}</div></div>
              <div><div className="font-display text-xl font-bold">{e.t}</div><p className="text-[14.5px] muted mt-1 leading-relaxed">{e.body}</p></div>
            </div>
          ))}
        </div>
      </Section>

      <Section pad="lg"><NewsletterBig /></Section>
    </>
  );
}
