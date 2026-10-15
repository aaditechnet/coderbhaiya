import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { learningAreas } from "@/config/site";
import { useLanguage } from "@/context/language-context";
import { Mentor, useMentorCopy } from "@/components/coder-bhaiya/mentor";

export const Route = createFileRoute("/programming-languages")({
  head: () => ({ meta: [
    { title: "Programming Languages — Coder Bhaiya" }, { name: "description", content: "Explore separate beginner-friendly learning paths for C, C++, Python, Java, JavaScript and more." },
    { property: "og:title", content: "Programming Languages — Coder Bhaiya" }, { property: "og:description", content: "Find the right programming path for your goals." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: LanguagesPage,
});
function LanguagesPage() { const { text } = useLanguage(); const copy = useMentorCopy(); return <main><section className="page-intro"><div className="section-wrap"><p className="eyebrow">Learning paths</p><h1 className="mt-4 max-w-4xl text-4xl font-extrabold text-foreground sm:text-6xl">Pick one language. Start with clarity.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Every subject has a dedicated destination ready to grow into a complete learning experience.</p><div className="mt-8 max-w-2xl"><Mentor compact pose="explaining" speech={copy.choose} /></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{learningAreas.map((area) => { const Icon = area.icon; return <article className="learning-card group" key={area.slug}><div className="icon-tile accent-blue"><Icon /></div><p className="mt-5 text-xs font-bold text-primary">{text.beginner}</p><h2 className="mt-2 text-xl font-bold text-foreground">{area.name}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{area.description}</p><Link to="/learn/$slug" params={{ slug: area.slug }} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">{text.open}<ArrowRight className="size-4" /></Link></article>})}</div></div></section></main>; }
