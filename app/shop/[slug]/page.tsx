import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, productBySlug } from "@/mock/products";
import { testimonials } from "@/mock/testimonials";
import { faqs } from "@/mock/faqs";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProductCard } from "@/components/ui/product-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { siteConfig } from "@/lib/site-config";
import { formatPrice, typeLabel } from "@/lib/utils";
import { ArrowRight, Check, ShieldCheck, Zap } from "lucide-react";

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const p = productBySlug(slug); return { title: p?.title ?? "Shop", description: p?.shortDescription }; }

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();
  const related = products.filter((x) => x.id !== p.id).slice(0, 3);
  return (
    <>
      <section className="bg-canvas border-b border-line">
        <div className="container-x py-14 md:py-20">
          <div className="text-[13px] muted"><Link href="/shop" className="hover:text-[color:var(--ink)]">Shop</Link> <span className="mx-1.5">/</span> <span>{typeLabel(p.type)}</span></div>
          <div className="grid lg:grid-cols-12 gap-10 mt-8 items-start">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvas border border-line"><Image src={p.cover} alt={p.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority /></div>
            </div>
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 flex-wrap"><span className="chip chip-accent">{typeLabel(p.type)}</span>{p.badge === "bestseller" && <span className="badge badge-best">Bestseller</span>}{p.badge === "new" && <span className="badge badge-new">New</span>}</div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[64px] leading-[1.02] mt-5">{p.title}</h1>
              <p className="prose-lede mt-5 max-w-xl">{p.fullDescription ?? p.shortDescription}</p>
              <div className="mt-7 flex items-baseline gap-3">
                <div className="font-display text-4xl font-bold tabular-nums">{formatPrice(p.price)}</div>
                {p.compareAtPrice && <div className="text-lg muted line-through tabular-nums">{formatPrice(p.compareAtPrice)}</div>}
                {p.interval && <div className="text-[14px] muted">/ {p.interval}</div>}
              </div>
              <div className="mt-2 text-[13px] muted">{p.format}</div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/checkout" className="btn btn-accent btn-lg">Buy now <ArrowRight className="w-4 h-4" /></Link>
                <button className="btn btn-outline btn-lg">Add to cart</button>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-[12px] muted">
                {siteConfig.commerce.trust.map((t) => (<div key={t} className="flex items-start gap-1.5"><ShieldCheck className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[color:var(--accent-ink)]" /><span>{t}</span></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {(p.outcomes || p.includes || p.whoFor) && (
        <Section pad="md">
          <div className="grid lg:grid-cols-3 gap-8">
            {p.outcomes && (<div><div className="eyebrow mb-3">What you get</div><h2 className="font-display text-2xl font-bold">Outcomes</h2><ul className="mt-5 space-y-3">{p.outcomes.map((o) => (<li key={o} className="flex items-start gap-3 text-[14.5px] text-[color:var(--charcoal)]"><span className="w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3 h-3 text-[color:var(--accent-ink)]" /></span>{o}</li>))}</ul></div>)}
            {p.whoFor && (<div><div className="eyebrow mb-3">Who it&apos;s for</div><h2 className="font-display text-2xl font-bold">Made for</h2><ul className="mt-5 space-y-3">{p.whoFor.map((o) => (<li key={o} className="flex items-start gap-3 text-[14.5px] text-[color:var(--charcoal)]"><span className="w-5 h-5 rounded-full bg-paper flex items-center justify-center shrink-0 mt-0.5"><Zap className="w-3 h-3" /></span>{o}</li>))}</ul></div>)}
            {p.includes && (<div><div className="eyebrow mb-3">Includes</div><h2 className="font-display text-2xl font-bold">You&apos;ll receive</h2><ul className="mt-5 space-y-3">{p.includes.map((o) => (<li key={o} className="flex items-start gap-3 text-[14.5px] text-[color:var(--charcoal)]"><span className="w-5 h-5 rounded-full bg-paper flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3 h-3" /></span>{o}</li>))}</ul></div>)}
          </div>
        </Section>
      )}

      <Section tone="paper" pad="md">
        <SectionHeader eyebrow="Reader notes" title="What people say after." />
        <div className="grid md:grid-cols-3 gap-5">{testimonials.slice(0, 3).map((t) => <TestimonialCard key={t.id} t={t} />)}</div>
      </Section>

      <Section pad="md">
        <div className="grid lg:grid-cols-12 gap-12"><div className="lg:col-span-5"><SectionHeader eyebrow="FAQ" title="Product questions." /><Link href="/faq" className="btn btn-outline">Full FAQ</Link></div><div className="lg:col-span-7"><FaqAccordion items={faqs.slice(0, 5)} /></div></div>
      </Section>

      <Section tone="canvas" pad="md">
        <SectionHeader eyebrow="Also in the shop" title="You might like these." />
        <div className="grid md:grid-cols-3 gap-5">{related.map((r) => <ProductCard key={r.id} p={r} />)}</div>
      </Section>

      <Section pad="sm"><CtaSection eyebrow="Ready" title="One click and it's yours." primary={{ label: `Buy — ${formatPrice(p.price)}`, href: "/checkout" }} secondary={{ label: "See more in the shop", href: "/shop" }} tone="dark" /></Section>
    </>
  );
}
