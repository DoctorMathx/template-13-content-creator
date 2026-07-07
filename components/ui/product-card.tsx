import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice, typeLabel } from "@/lib/utils";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/shop/${p.slug}`} className="card group flex flex-col overflow-hidden">
      <div className="relative aspect-[5/4] bg-canvas overflow-hidden">
        <Image src={p.cover} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="chip bg-white/95 backdrop-blur">{typeLabel(p.type)}</span>
          {p.badge === "bestseller" && <span className="badge badge-best">Bestseller</span>}
          {p.badge === "new" && <span className="badge badge-new">New</span>}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-[11.5px] muted">{p.format}</div>
        <h3 className="font-display text-lg font-bold leading-snug mt-2 line-clamp-2">{p.title}</h3>
        <p className="text-[13.5px] text-[color:var(--charcoal)] mt-2 line-clamp-2 leading-relaxed">{p.shortDescription}</p>
        <div className="mt-auto pt-4 flex items-end justify-between border-t border-line">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-[16px] font-semibold tabular-nums">{formatPrice(p.price)}</span>
              {p.compareAtPrice && <span className="text-[12px] muted line-through tabular-nums">{formatPrice(p.compareAtPrice)}</span>}
            </div>
            {p.interval && <div className="text-[11px] muted mt-0.5">per {p.interval}</div>}
          </div>
          <ArrowUpRight className="w-5 h-5 text-[color:var(--accent-ink)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
