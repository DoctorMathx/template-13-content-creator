import { siteConfig } from "./site-config";
export function formatPrice(v: number, currency = siteConfig.commerce.currency) { return v === 0 ? "Free" : `${currency}${v.toLocaleString("en-NG")}`; }
export function cn(...c: (string | false | null | undefined)[]) { return c.filter(Boolean).join(" "); }
export function typeLabel(t: string) { return ({ guide: "Guide", workshop: "Workshop replay", "swipe-file": "Swipe file", sub: "Sub­scription", bundle: "Bundle" } as Record<string, string>)[t] ?? t; }
export function formatDate(iso: string) { return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }); }
