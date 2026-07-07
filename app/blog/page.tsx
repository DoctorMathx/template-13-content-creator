import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogIndex } from "./blog-index";

export const metadata: Metadata = { title: "Essays, letters & podcast" };
export default function BlogPage() { return <Suspense fallback={null}><BlogIndex /></Suspense>; }
