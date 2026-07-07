import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { footerLinks } from "@/mock/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-paper">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-[color:var(--accent)] text-white flex items-center justify-center font-display font-bold text-[15px]">T</span><span className="font-serif italic text-[22px]">{siteConfig.brand.name}</span></div>
            <p className="mt-4 text-[14.5px] text-[color:var(--charcoal)] max-w-sm leading-relaxed">{siteConfig.brand.tagline}</p>
            <form className="mt-6 flex gap-2 max-w-md"><input type="email" required placeholder="you@work.com" className="input text-[13px]" /><button className="btn btn-accent btn-sm">Join free</button></form>
            <p className="mt-2 text-[12px] muted">One Sunday letter a week. Unsubscribe any time.</p>
          </div>
          <div><h4 className="eyebrow mb-4">Read & listen</h4><ul className="space-y-2.5">{footerLinks.read.map((i) => (<li key={i.label}><Link href={i.href} className="text-[14px] text-[color:var(--charcoal)] hover:text-[color:var(--ink)]">{i.label}</Link></li>))}</ul></div>
          <div><h4 className="eyebrow mb-4">Help</h4><ul className="space-y-2.5">{footerLinks.help.map((i) => (<li key={i.label}><Link href={i.href} className="text-[14px] text-[color:var(--charcoal)] hover:text-[color:var(--ink)]">{i.label}</Link></li>))}</ul></div>
        </div>
        <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row justify-between gap-2">
          <p className="text-[12px] muted">© {new Date().getFullYear()} {siteConfig.brand.name}. Built on FinStore.</p>
          <p className="text-[12px] muted">{siteConfig.brand.city}</p>
        </div>
      </div>
    </footer>
  );
}
