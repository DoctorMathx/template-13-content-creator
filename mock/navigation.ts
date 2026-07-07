import type { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Newsletter", href: "/#newsletter" },
  { label: "Podcast", href: "/blog?type=podcast" },
  { label: "Essays", href: "/blog" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  read: [
    { label: "The Sunday letter", href: "/#newsletter" },
    { label: "Essays", href: "/blog" },
    { label: "Podcast", href: "/blog?type=podcast" },
    { label: "Shop", href: "/shop" },
  ],
  help: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Sponsor a send", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
};
