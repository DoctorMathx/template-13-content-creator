import Image from "next/image";
import Link from "next/link";
import { Clock, Headphones, PenLine, Radio } from "lucide-react";
import type { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";

const iconFor = (c: Post["category"]) => c === "podcast" ? Headphones : c === "newsletter" ? Radio : PenLine;

export function PostCard({ p, size = "md" }: { p: Post; size?: "sm" | "md" | "lg" }) {
  const Icon = iconFor(p.category);
  return (
    <Link href={`/blog?slug=${p.slug}`} className="group block">
      <div className={`relative overflow-hidden rounded-2xl bg-canvas border border-line ${size === "lg" ? "aspect-[16/9]" : "aspect-[5/3]"}`}>
        <Image src={p.cover} alt={p.title} fill sizes={size === "lg" ? "100vw" : "(max-width:768px) 100vw, 33vw"} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <div className="absolute top-3 left-3 chip bg-white/95 backdrop-blur"><Icon className="w-3 h-3" /> {p.category === "newsletter" ? "Sunday letter" : p.category}</div>
      </div>
      <div className={`mt-4 ${size === "lg" ? "max-w-3xl" : ""}`}>
        <div className="text-[12px] muted flex items-center gap-3">
          <span>{formatDate(p.publishedAt)}</span>
          <span className="w-1 h-1 rounded-full bg-[color:var(--slate)]" />
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.audioDuration ?? `${p.readMins} min read`}</span>
        </div>
        <h3 className={`font-serif tracking-tight mt-2 leading-tight group-hover:text-[color:var(--accent-ink)] transition-colors ${size === "lg" ? "text-3xl md:text-[40px]" : "text-xl md:text-2xl line-clamp-2"}`}>{p.title}</h3>
        <p className={`text-[color:var(--charcoal)] mt-3 leading-relaxed ${size === "lg" ? "text-[16px]" : "text-[14px] line-clamp-2"}`}>{p.excerpt}</p>
      </div>
    </Link>
  );
}
