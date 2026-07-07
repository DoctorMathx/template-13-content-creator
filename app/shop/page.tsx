import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProductCard } from "@/components/ui/product-card";
import { NewsletterBig } from "@/components/ui/newsletter";
import { products } from "@/mock/products";

export const metadata: Metadata = { title: "The Shop" };

export default function ShopPage() {
  return (
    <>
      <section className="bg-canvas border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-4xl">
          <div className="eyebrow">The small shop</div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[80px] leading-[1.02] mt-4">Everything <span className="italic">Tobi</span> sells.</h1>
          <p className="prose-lede mt-6 max-w-2xl">A few carefully made things — guides, workshops, a paid newsletter. Nothing here is a rehash of the free stuff.</p>
        </div>
      </section>
      <Section pad="lg">
        <SectionHeader title="Everything for sale." lede={`${products.length} products, all made by me.`} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{products.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </Section>
      <Section pad="sm"><NewsletterBig /></Section>
    </>
  );
}
