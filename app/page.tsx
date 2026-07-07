import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Headphones, PenLine, PlayCircle, Radio, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProductCard } from "@/components/ui/product-card";
import { PostCard } from "@/components/ui/post-card";
import { NewsletterBig } from "@/components/ui/newsletter";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CtaSection } from "@/components/ui/cta-section";
import { siteConfig } from "@/lib/site-config";
import { featured, flagship } from "@/mock/products";
import { posts, featuredPost } from "@/mock/posts";
import { testimonials } from "@/mock/testimonials";

export default function HomePage() {
  const hero = featuredPost();
  const grid = posts.slice(1, 5);
  const shop = featured();
  const fl = flagship();

  return (
    <>
      {/* Warm editorial hero */}
      <section className="bg-canvas border-b border-line">
        <div className="container-x pt-16 md:pt-24 pb-16 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="chip chip-accent"><Sparkles className="w-3 h-3" /> {siteConfig.hero.tag}</div>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-[80px] lg:text-[104px] font-normal tracking-tight leading-[.98] mt-6">
                Hi, I&apos;m <span className="italic">{siteConfig.creator.name.split(" ")[0]}.</span><br />I write on Sundays.
              </h1>
              <p className="prose-lede mt-7 max-w-xl">
                {siteConfig.creator.shortBio}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/#newsletter" className="btn btn-accent btn-lg">Subscribe free <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/shop" className="btn btn-outline btn-lg">See the shop</Link>
              </div>
              <div className="mt-10 flex items-center gap-5 text-[13px] muted">
                <span>Find me on</span>
                <a href={siteConfig.brand.social.instagram} className="hover:text-[color:var(--ink)]">Instagram</a>
                <a href={siteConfig.brand.social.youtube} className="hover:text-[color:var(--ink)]">YouTube</a>
                <a href={siteConfig.brand.social.tiktok} className="hover:text-[color:var(--ink)]">TikTok</a>
                <a href={siteConfig.brand.social.twitter} className="hover:text-[color:var(--ink)]">Twitter</a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvas border border-line">
                <Image src={siteConfig.creator.portrait} alt={siteConfig.creator.name} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" priority />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-left-6 rounded-2xl bg-white border border-line px-4 py-3 shadow-lg max-w-[240px]">
                <div className="text-[10px] uppercase tracking-[.2em] muted">Sunday letter</div>
                <div className="text-[14px] font-medium mt-1">42,000 readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-white border-b border-line">
        <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {siteConfig.socialProof.map((s) => (
            <div key={s.label} className="border-r last:border-r-0 md:border-r border-line px-3">
              <div className="font-display text-3xl font-bold tabular-nums text-[color:var(--ink)]">{s.value}</div>
              <div className="text-[12px] muted mt-1">{s.label} · {s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured essay + grid */}
      <Section pad="lg" id="essays">
        <SectionHeader eyebrow="Latest" title="Read & listen." lede="Sunday letters, essays, and podcast episodes — most recent first." action={<Link href="/blog" className="btn btn-outline btn-sm">All posts <ArrowRight className="w-3.5 h-3.5" /></Link>} />
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7"><PostCard p={hero} size="lg" /></div>
          <div className="lg:col-span-5 grid gap-8">{grid.slice(0, 3).map((p) => <PostCard key={p.id} p={p} />)}</div>
        </div>
      </Section>

      {/* Podcast strip */}
      <Section tone="paper" pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="chip chip-accent"><Headphones className="w-3 h-3" /> The podcast</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-5"><span className="italic">You&apos;re Making It</span> — a fortnightly show.</h2>
            <p className="prose-lede mt-5 max-w-lg">Long, honest conversations with African creatives who&apos;ve built quiet, sustainable careers. 42 episodes. 180k monthly plays.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={siteConfig.brand.social.youtube} className="btn btn-primary">Listen on YouTube <PlayCircle className="w-4 h-4" /></a>
              <Link href="/blog?type=podcast" className="btn btn-outline">All episodes</Link>
            </div>
          </div>
          <div className="lg:col-span-7 grid gap-4">
            {posts.filter((p) => p.category === "podcast").slice(0, 2).map((p) => (
              <Link key={p.id} href={`/blog?slug=${p.slug}`} className="card p-5 flex items-center gap-4 group">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-canvas border border-line shrink-0"><Image src={p.cover} alt="" fill sizes="96px" className="object-cover" /></div>
                <div className="min-w-0 flex-1">
                  <div className="text-[12px] muted flex items-center gap-2"><Headphones className="w-3 h-3" /> Ep. {p.slug.split("-")[1]} · {p.audioDuration}</div>
                  <div className="font-display text-lg font-bold mt-1 line-clamp-2">{p.title}</div>
                </div>
                <button className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-[color:var(--accent-ink)] shrink-0 group-hover:bg-[color:var(--accent)] group-hover:text-white transition"><PlayCircle className="w-5 h-5" /></button>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter big signup */}
      <Section pad="lg" id="newsletter"><NewsletterBig tone="dark" /></Section>

      {/* Shop */}
      <Section pad="lg">
        <SectionHeader eyebrow="The small shop" title="A few things you can buy." lede="Every product is something I made or use myself. No affiliates, no fluff." action={<Link href="/shop" className="btn btn-outline btn-sm">See shop <ArrowRight className="w-3.5 h-3.5" /></Link>} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{shop.slice(0, 3).map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </Section>

      {/* Flagship */}
      <Section tone="paper" pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6"><div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvas border border-line max-w-md"><Image src={fl.cover} alt={fl.title} fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" /></div></div>
          <div className="lg:col-span-6">
            <span className="sticker">Bestseller</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-4">{fl.title}</h2>
            <p className="prose-lede mt-5 max-w-xl">{fl.fullDescription ?? fl.shortDescription}</p>
            <ul className="mt-6 space-y-2.5">{(fl.outcomes ?? []).slice(0, 3).map((o) => <li key={o} className="flex items-start gap-3 text-[15px] text-[color:var(--charcoal)]"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] mt-2 shrink-0" />{o}</li>)}</ul>
            <div className="mt-8 flex items-center gap-4">
              <Link href={`/shop/${fl.slug}`} className="btn btn-accent btn-lg">Get it — ₦{fl.price.toLocaleString("en-NG")} <ArrowRight className="w-4 h-4" /></Link>
              <div className="text-[13px] muted">30-day money back</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Reader notes */}
      <Section pad="lg">
        <SectionHeader eyebrow="Reader notes" title="What people write back." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{testimonials.slice(0, 6).map((t) => <TestimonialCard key={t.id} t={t} />)}</div>
      </Section>

      {/* About */}
      <Section tone="canvas" pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5"><div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvas border border-line max-w-md"><Image src={siteConfig.creator.portrait} alt={siteConfig.creator.name} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" /></div></div>
          <div className="lg:col-span-7">
            <div className="eyebrow">About</div>
            <h2 className="font-serif text-4xl md:text-5xl italic leading-[1.05] mt-3">The short version.</h2>
            <div className="mt-6 space-y-4 max-w-xl text-[16px] leading-relaxed text-[color:var(--charcoal)]">
              {siteConfig.creator.longBio.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="mt-6"><Link href="/about" className="btn btn-outline">Longer version</Link></div>
          </div>
        </div>
      </Section>

      <Section pad="sm"><CtaSection eyebrow="One click" title="Get the Sunday letter." description="A weekly essay for African creatives, in your inbox every Sunday morning." primary={{ label: "Subscribe free", href: "/#newsletter" }} secondary={{ label: "Read past letters", href: "/blog" }} tone="dark" /></Section>
    </>
  );
}
