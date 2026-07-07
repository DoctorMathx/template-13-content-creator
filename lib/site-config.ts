export const siteConfig = {
  brand: {
    name: "Tobi Fatima",
    tagline: "Newsletter, podcast, and honest essays for African creatives.",
    domain: "tobifatima.com",
    email: "hello@tobifatima.com",
    whatsapp: "+234 700 000 0000",
    city: "Made in Lagos",
    social: {
      instagram: "https://instagram.com/tobifatima",
      twitter: "https://twitter.com/tobifatima",
      youtube: "https://youtube.com/@tobifatima",
      tiktok: "https://tiktok.com/@tobifatima",
      linkedin: "https://linkedin.com/in/tobifatima",
    },
  },
  creator: {
    name: "Tobi Fatima",
    role: "Writer · podcaster · creative",
    portrait: "/img/creator.png",
    shortBio: "I write the Sunday letter and host the You're Making It podcast. About 42,000 African creatives read or listen every week.",
    longBio: [
      "I have been writing on the internet since 2019 — first Twitter, then a blog nobody read, then the newsletter that changed everything.",
      "Today I write one weekly essay for 42,000 subscribers, host a fortnightly podcast, and put together small paid guides once or twice a year.",
      "This site is the home for all of it.",
    ],
    metric: "42,000 readers · 180k monthly plays · 6 years of shipping",
  },
  hero: {
    tag: "Every Sunday · Free · 42,000 readers",
  },
  socialProof: [
    { label: "Newsletter", value: "42k", sub: "weekly readers" },
    { label: "Podcast", value: "180k", sub: "monthly plays" },
    { label: "TikTok", value: "310k", sub: "followers" },
    { label: "YouTube", value: "62k", sub: "subs" },
  ],
  commerce: { currency: "₦", trust: ["Instant delivery", "Cancel any time", "Read on any device"] },
} as const;
