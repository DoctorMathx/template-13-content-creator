"use client";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState("hello");
  if (sent) return <div className="p-8 rounded-3xl border border-line bg-paper"><CheckCircle2 className="w-8 h-8 text-[color:var(--accent-ink)]" /><h3 className="font-serif text-3xl italic mt-4">Got it.</h3><p className="prose-lede mt-3 max-w-md">I read every message. I&apos;ll come back within a couple of days.</p></div>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="p-6 md:p-8 rounded-3xl border border-line bg-white space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className="label" htmlFor="name">Name</label><input id="name" required className="input input-rect mt-1.5" placeholder="Your name" /></div>
        <div><label className="label" htmlFor="email">Email</label><input id="email" type="email" required className="input input-rect mt-1.5" placeholder="you@work.com" /></div>
      </div>
      <div>
        <label className="label">What&apos;s this about?</label>
        <div className="mt-2 flex gap-2 flex-wrap">
          {[{ id: "hello", label: "Just saying hi" }, { id: "sponsor", label: "Sponsor a send" }, { id: "podcast", label: "Podcast pitch" }, { id: "product", label: "Product help" }].map((t) => (
            <button key={t.id} type="button" onClick={() => setTopic(t.id)} className={`chip ${topic === t.id ? "chip-dark" : "hover:border-[color:var(--ink)]"}`}>{t.label}</button>
          ))}
        </div>
      </div>
      <div><label className="label" htmlFor="message">Your note</label><textarea id="message" required rows={6} className="input input-rect mt-1.5 resize-y" placeholder="Say hello, ask a question, or pitch something." /></div>
      <button className="btn btn-accent btn-lg">Send <Send className="w-4 h-4" /></button>
    </form>
  );
}
