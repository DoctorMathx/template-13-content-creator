import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { NewsletterBig } from "@/components/ui/newsletter";
import { PostCard } from "@/components/ui/post-card";
import { posts } from "@/mock/posts";
import { CheckCircle2, Download, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = { title: "Thank you" };

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-canvas border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-3xl">
          <div className="chip chip-accent"><CheckCircle2 className="w-4 h-4" /> Order confirmed</div>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] mt-6"><span className="italic">Thank you</span> for buying.</h1>
          <p className="prose-lede mt-5 max-w-xl">Your files are on the way. Everything you need is below — also in your inbox.</p>
        </div>
      </section>
      <Section pad="md">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Download, title: "Download link sent", body: "Check your inbox. If it's not there in a minute, check spam." },
            { icon: Mail, title: "You're on the list", body: "You'll get the Sunday letter this weekend, and every weekend after." },
            { icon: MessageCircle, title: "Reply if you get stuck", body: "Reply to any email you get from me. I read them all." },
          ].map((s) => { const Icon = s.icon; return (<div key={s.title} className="card p-6"><div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-[color:var(--accent-ink)]"><Icon className="w-4 h-4" /></div><div className="font-display text-lg font-bold mt-4">{s.title}</div><p className="text-[14px] text-[color:var(--charcoal)] leading-relaxed mt-1">{s.body}</p></div>); })}
        </div>
      </Section>
      <Section tone="paper" pad="md">
        <div className="mb-8"><div className="eyebrow">While you wait</div><h2 className="font-serif text-3xl md:text-4xl italic mt-3">Read a few things.</h2></div>
        <div className="grid md:grid-cols-3 gap-8">{posts.slice(0, 3).map((p) => <PostCard key={p.id} p={p} />)}</div>
      </Section>
      <Section pad="lg"><NewsletterBig /></Section>
    </>
  );
}
