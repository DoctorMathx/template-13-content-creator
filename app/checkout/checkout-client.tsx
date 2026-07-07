"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { flagship } from "@/mock/products";
import { siteConfig } from "@/lib/site-config";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft, ShieldCheck, Tag, Zap } from "lucide-react";

export function CheckoutClient() {
  const router = useRouter();
  const p = flagship();
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const subtotal = p.price;
  const discount = applied === "SUNDAY10" ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitting(true); setTimeout(() => router.push("/thank-you"), 700); };

  return (
    <div className="bg-paper min-h-screen">
      <div className="container-x py-10 md:py-14">
        <Link href="/shop" className="inline-flex items-center gap-2 text-[13.5px] muted hover:text-[color:var(--ink)]"><ArrowLeft className="w-4 h-4" /> Back to shop</Link>
        <div className="mt-8 grid lg:grid-cols-12 gap-8">
          <form onSubmit={submit} className="lg:col-span-7 space-y-6">
            <div className="p-6 md:p-8 rounded-3xl border border-line bg-white">
              <h1 className="font-serif text-4xl leading-tight">Checkout</h1>
              <p className="text-[14px] muted mt-1">Delivered to your inbox in a minute.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field id="name" label="Full name" required />
                <Field id="email" label="Email" type="email" required />
              </div>
            </div>
            <div className="p-6 md:p-8 rounded-3xl border border-line bg-white">
              <h2 className="font-display text-xl font-bold">Payment</h2>
              <div className="mt-5 grid sm:grid-cols-3 gap-2">{["Card", "Bank transfer", "Paystack"].map((m, i) => (<label key={m} className={`flex items-center gap-2 px-4 py-3 rounded-xl border cursor-pointer ${i === 0 ? "border-[color:var(--ink)] bg-canvas" : "border-line hover:border-[color:var(--ink)]"}`}><input type="radio" name="method" defaultChecked={i === 0} className="accent-black" /><span className="text-[14px] font-medium">{m}</span></label>))}</div>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <Field id="card" label="Card number" placeholder="4242 4242 4242 4242" />
                <div className="grid grid-cols-2 gap-4"><Field id="exp" label="Expiry" placeholder="MM / YY" /><Field id="cvc" label="CVC" placeholder="123" /></div>
              </div>
            </div>
            <div className="p-6 md:p-8 rounded-3xl border border-line bg-white">
              <label htmlFor="agree" className="text-[13.5px] muted"><input id="agree" type="checkbox" required defaultChecked className="accent-black mr-2" />I agree to the <Link href="/faq" className="underline underline-offset-4 text-[color:var(--ink)]">refund policy</Link>.</label>
              <button disabled={submitting} className="btn btn-accent btn-lg w-full mt-6">{submitting ? "Processing…" : `Complete — ${formatPrice(total)}`}</button>
            </div>
          </form>
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="p-6 md:p-8 rounded-3xl border border-line bg-white">
                <h2 className="font-display text-lg font-bold">Order</h2>
                <div className="mt-5 flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-canvas border border-line shrink-0"><Image src={p.cover} alt="" fill sizes="80px" className="object-cover" /></div>
                  <div className="min-w-0 flex-1"><div className="text-[11px] uppercase tracking-[.18em] muted">{p.format}</div><div className="text-[14.5px] font-medium leading-snug mt-1">{p.title}</div></div>
                  <div className="text-[14px] font-semibold tabular-nums shrink-0">{formatPrice(p.price)}</div>
                </div>
                <div className="mt-5 pt-5 border-t border-line space-y-2 text-[14px]">
                  <Row label="Subtotal" value={formatPrice(subtotal)} />
                  {discount > 0 && <Row label="Coupon (SUNDAY10)" value={`− ${formatPrice(discount)}`} accent />}
                  <Row label="Total" value={formatPrice(total)} bold />
                </div>
                <div className="mt-5 flex gap-2"><div className="relative flex-1"><Tag className="w-3.5 h-3.5 muted absolute left-3 top-1/2 -translate-y-1/2" /><input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Coupon" className="input input-rect py-2 pl-8 text-[13px]" /></div><button type="button" onClick={() => setApplied(coupon.trim().toUpperCase() || null)} className="btn btn-outline btn-sm">Apply</button></div>
                {applied && applied !== "SUNDAY10" && <p className="mt-2 text-[12.5px] muted">Try <span className="font-medium text-[color:var(--ink)]">SUNDAY10</span> for 10% off.</p>}
              </div>
              <div className="p-5 rounded-3xl bg-white border border-line flex items-start gap-3"><Zap className="w-4 h-4 mt-1 text-[color:var(--accent-ink)]" /><div><div className="text-[14px] font-medium">Delivered instantly</div><div className="text-[12.5px] muted mt-0.5">Your files land in your inbox within a minute.</div></div></div>
              <div className="p-5 rounded-3xl bg-white border border-line flex items-start gap-3"><ShieldCheck className="w-4 h-4 mt-1 text-[color:var(--accent-ink)]" /><div><div className="text-[14px] font-medium">7-day money back</div><div className="text-[12.5px] muted mt-0.5">Not for you? Full refund, no fuss.</div></div></div>
              <p className="text-[12px] muted px-2 text-center">Need help? {siteConfig.brand.email}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({ id, label, type = "text", placeholder, required }: { id: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return <div><label className="label" htmlFor={id}>{label}</label><input id={id} type={type} required={required} placeholder={placeholder} className="input input-rect mt-1.5" /></div>;
}
function Row({ label, value, bold, accent }: { label: string; value: string; bold?: boolean; accent?: boolean }) { return <div className="flex items-center justify-between"><span className={bold ? "font-medium" : "muted"}>{label}</span><span className={`${bold ? "font-display text-lg font-bold" : ""} tabular-nums ${accent ? "text-[color:var(--accent)]" : ""}`}>{value}</span></div>; }
