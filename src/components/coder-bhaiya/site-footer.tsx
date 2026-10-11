import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Heart } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { brand, learningAreas } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.2fr_0.8fr]">
        <div><BrandMark /><p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">{brand.supportingTagline} Learn patiently, practise confidently, and keep moving forward.</p><p className="mt-5 text-sm font-semibold text-primary">{brand.tagline}</p></div>
        <div><h2 className="text-sm font-bold text-foreground">Quick links</h2><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><Link to="/learn">Learn</Link><Link to="/programming-languages">Languages</Link><Link to="/visual-learning">Visual Learning</Link><Link to="/about">About</Link></div></div>
        <div><h2 className="text-sm font-bold text-foreground">Learning paths</h2><div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-muted-foreground">{learningAreas.slice(0,8).map((area) => <Link key={area.slug} to="/learn/$slug" params={{ slug: area.slug }}>{area.name}</Link>)}</div></div>
        <div><h2 className="text-sm font-bold text-foreground">More</h2><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><Link to="/about">Our mission</Link><span className="flex items-center gap-1">Privacy Policy <ArrowUpRight className="size-3" /></span></div></div>
      </div>
      <div className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:px-8"><span>© 2026 Coder Bhaiya. Built for curious minds.</span><span className="flex items-center gap-1.5">Made with <Heart className="size-3.5 text-primary" fill="currentColor" /> for every learner.</span></div></div>
    </footer>
  );
}
