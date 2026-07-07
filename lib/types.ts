export type Product = {
  id: string;
  title: string;
  slug: string;
  type: "guide" | "workshop" | "swipe-file" | "sub" | "bundle";
  shortDescription: string;
  fullDescription?: string;
  price: number;
  compareAtPrice?: number;
  interval?: "one-time" | "month" | "year";
  cover: string;
  format: string;
  badge?: "new" | "bestseller";
  featured?: boolean;
  flagship?: boolean;
  outcomes?: string[];
  whoFor?: string[];
  includes?: string[];
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  category: "newsletter" | "podcast" | "essay" | "video";
  excerpt: string;
  cover: string;
  publishedAt: string;
  readMins?: number;
  audioDuration?: string;
  tags: string[];
};

export type Testimonial = { id: string; quote: string; name: string; role?: string; rating?: number };
export type Faq = { id: string; question: string; answer: string; topic?: string };
export type NavItem = { label: string; href?: string; children?: { label: string; href: string; description?: string }[] };
