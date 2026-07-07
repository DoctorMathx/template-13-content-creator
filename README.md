# Tobi Fatima — Template 13

A premium FinStore template for **content creators, writers and podcasters**. Newsletter-first, warm & editorial, with a small integrated shop.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**.
Design: **DM Sans** display + **DM Serif Display** editorial serif + **Inter** body. Warm off-white + bright coral accent.

## Pages
`/` Home (portrait hero, social-proof, latest posts, podcast strip, big newsletter, small shop, flagship) · `/blog` Filterable feed of newsletters/essays/podcast · `/shop` and `/shop/[slug]` product detail · `/about` (with timeline) · `/contact` (with form) · `/faq` · `/checkout` and `/thank-you`

## Customise
- **Brand & creator bio** → `lib/site-config.ts`
- **Shop products** → `mock/products.ts`
- **Posts/podcast episodes** → `mock/posts.ts`
- **Reader notes** → `mock/testimonials.ts`
- **FAQs** → `mock/faqs.ts`
- **Design tokens** → `app/globals.css`

Note: `mock/posts.ts` uses Unsplash images for post covers by default (creators typically use their own photos). Replace with your own to fully offline the template.

## Run
```bash
npm install && npm run dev
```
