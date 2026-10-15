import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeVisual } from "./code-visual";
import { Mentor, useMentorCopy } from "./mentor";
import { useMentorGuide } from "@/context/mentor-context";
import { ComingSoon } from "./coming-soon";
import { featureAreas, learningAreas, learningSteps } from "@/config/site";
import { useLanguage } from "@/context/language-context";

const accents = { blue: "accent-blue", cyan: "accent-cyan", violet: "accent-violet", amber: "accent-amber" } as const;

export function HomePage() {
  const { greeting, text } = useLanguage();
  const copy = useMentorCopy();
  const { start } = useMentorGuide();
  const [comingSoon, setComingSoon] = useState("");
  return (
    <main className="overflow-hidden">
      <section className="hero-grid relative border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
          <div className="relative z-10"><div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-4 py-2 text-xs font-bold text-primary"><Sparkles className="size-4" /> {greeting}</div><h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-[64px]">Coding Mushkil Nahi,<br /><span className="text-primary">Bas Samjhane Wala Chahiye!</span></h1><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">Programming ko simple examples, visual explanations aur practical exercises ke saath seekho. Basics se advanced concepts tak, Coder Bhaiya tumhari coding journey ko easy banane mein help karega.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button size="xl" onClick={start}>{copy.getStarted} <ArrowRight /></Button><Button asChild variant="outline" size="xl"><Link to="/programming-languages">{text.explore} <ChevronRight /></Link></Button></div><div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-success" /> Start from zero</span><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-success" /> Learn at your pace</span><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-success" /> No pressure, only progress</span></div></div>
          <div className="relative flex flex-col gap-8"><Mentor pose="welcome" speech={copy.welcome} /><CodeVisual /></div>
        </div>
      </section>

      <section className="section-band" id="languages"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow">Choose your starting point</p><h2>One clear path for every language.</h2></div><p>Each subject has its own space, so you always know what you’re learning and where to continue.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{learningAreas.map((area) => { const Icon = area.icon; return <article key={area.slug} className="learning-card group"><div className={`icon-tile ${accents[area.accent]}`}><Icon /></div><span className="mt-6 inline-flex rounded-full bg-muted px-2.5 py-1 text-[11px] font-bold text-muted-foreground">{text.beginner}</span><h3 className="mt-4 text-lg font-bold text-foreground">{area.name}</h3><p className="mt-2 min-h-20 text-sm leading-6 text-muted-foreground">{area.description}</p><Link to="/learn/$slug" params={{ slug: area.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{text.open} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></article>; })}</div></div></section>

      <section className="border-y border-border bg-surface-deep"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow">Built around how beginners learn</p><h2>More than video lessons.</h2></div><p>Friendly tools that will help you understand the “why”, not just copy the code.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{featureAreas.map((feature) => { const Icon = feature.icon; return <article key={feature.title} className="feature-card"><div className={`icon-tile ${accents[feature.accent]}`}><Icon /></div><div><h3 className="text-xl font-bold text-foreground">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p></div>{"href" in feature ? <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary hover:bg-transparent"><Link to={feature.href}>{feature.action}<ArrowRight /></Link></Button> : <Button variant="ghost" className="mt-auto justify-start px-0 text-primary hover:bg-transparent" onClick={() => setComingSoon(feature.title)}>{feature.action}<ArrowRight /></Button>}</article>; })}</div></div></section>

      <section className="section-band"><div className="section-wrap"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Your learning journey</p><h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">Confusion se confidence tak.</h2><p className="mt-4 leading-7 text-muted-foreground">A simple rhythm you can follow from your first line of code to real problem solving.</p></div><div className="relative mt-14 grid gap-5 md:grid-cols-3">{learningSteps.map((step) => { const Icon = step.icon; return <article key={step.number} className="step-card"><span className="step-number">{step.number}</span><span className="icon-tile accent-blue"><Icon /></span><h3 className="mt-6 text-xl font-bold text-foreground">{step.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p></article>; })}</div></div></section>

      <section className="border-t border-border bg-accent"><div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto]"><div><p className="eyebrow">You belong in coding</p><h2 className="mt-3 text-3xl font-extrabold text-foreground">Ready to take your first step?</h2><p className="mt-3 max-w-xl leading-7 text-muted-foreground">Pick one path. Learn one idea. Build confidence one line at a time.</p></div><Button asChild size="xl"><Link to="/programming-languages">Explore learning paths <ArrowRight /></Link></Button></div></section>
      <ComingSoon open={Boolean(comingSoon)} title={comingSoon} onClose={() => setComingSoon("")} />
    </main>
  );
}
