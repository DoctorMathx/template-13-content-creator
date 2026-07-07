"use client";
import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function NewsletterBig({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [sent, setSent] = useState(false);
  const dark = tone === "dark";
  return (
    <div className={`rounded-3xl p-8 md:p-14 border relative overflow-hidden ${dark ? "bg-ink text-white border-white/10" : "bg-canvas border-line"}`}>
      <div className={`absolute -top-16 -right-16 w-60 h-60 rounded-full ${dark ? "bg-[color:var(--accent)]/20" : "bg-accent-soft"} blur-3xl`} />
      <div className="relative max-w-2xl">
        <div className={`chip ${dark ? "bg-white/10 text-white border-white/15" : "chip-accent"}`}><Sparkles className="w-3 h-3" /> {siteConfig.hero.tag}</div>
        <h2 className={`font-serif text-4xl md:text-5xl leading-[1.05] mt-5 ${dark ? "" : ""}`}>Get the <span className="italic">Sunday letter.</span></h2>
        <p className={`mt-4 text-[16px] leading-relaxed ${dark ? "text-white/70" : "text-[color:var(--charcoal)]"} max-w-xl`}>One essay every Sunday morning. Honest, unhurried, about writing, money, and building a small creator business. Free. Unsubscribe any time.</p>
        {sent ? (
          <div className={`mt-6 flex items-center gap-3 text-[15px] ${dark ? "text-white" : ""}`}><CheckCircle2 className="w-5 h-5 text-[color:var(--accent)]" /> You&apos;re in. See you Sunday.</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md">
            <input type="email" required placeholder="you@work.com" className={`input flex-1 ${dark ? "bg-white/10 border-white/15 text-white placeholder-white/50" : ""}`} />
            <button className="btn btn-accent">Subscribe free</button>
          </form>
        )}
        <p className={`mt-4 text-[12.5px] ${dark ? "text-white/50" : "muted"}`}>Joining 42,000+ African creatives. No spam, ever.</p>
      </div>
    </div>
  );
}
