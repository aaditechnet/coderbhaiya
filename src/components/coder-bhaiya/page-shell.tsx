import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock3, Construction, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LearningArea } from "@/config/site";
import { LessonDemo } from "./lesson-demo";
import { Mentor, useMentorCopy } from "./mentor";

export function PageIntro({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: React.ReactNode }) {
  return <main><section className="page-intro"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>{children}</div></section></main>;
}

export function SubjectPlaceholder({ area }: { area: LearningArea }) {
  const Icon = area.icon;
  const copy = useMentorCopy();
  return (
    <main>
      <section className="page-intro min-h-[70vh]"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div><Link to="/programming-languages" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"><ArrowLeft className="size-4" /> All learning paths</Link><p className="eyebrow mt-8">Beginner-friendly learning path</p><h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-6xl">{area.name}</h1><p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{area.description} This dedicated learning area is being prepared with simple explanations and guided practice.</p><div className="mt-8 flex flex-wrap gap-3"><Button size="lg" disabled><Clock3 /> Lessons coming soon</Button><Button asChild variant="outline" size="lg"><Link to="/learn">See how learning works <ArrowRight /></Link></Button></div></div>
        <Mentor pose="teaching" speech={copy.lesson} />
      </div></section>
      <LessonDemo key={area.slug} area={area} />
    </main>
  );
}

export function FeaturePlaceholder({ eyebrow, title, description, icon: Icon }: { eyebrow: string; title: string; description: string; icon: typeof Sparkles }) {
  return <PageIntro eyebrow={eyebrow} title={title} description={description}><div className="mt-10 flex flex-wrap gap-3"><Button disabled size="lg"><Clock3 /> Coming soon</Button><Button asChild variant="outline" size="lg"><Link to="/">Back to home</Link></Button></div><div className="mt-16 max-w-2xl rounded-xl border border-border bg-card p-7 shadow-card"><span className="flex size-12 items-center justify-center rounded-lg bg-accent text-primary"><Icon /></span><h2 className="mt-5 text-xl font-bold text-foreground">A thoughtful space is on its way.</h2><p className="mt-2 leading-7 text-muted-foreground">We’re keeping this destination clear and honest while its complete learning experience is designed.</p></div></PageIntro>;
}
