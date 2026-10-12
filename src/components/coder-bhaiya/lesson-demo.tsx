import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LearningArea } from "@/config/site";
import { lessonExamples } from "@/config/learning-demo";
import { Mentor, useMentorCopy } from "./mentor";

export function LessonDemo({ area }: { area: LearningArea }) {
  const [topic, setTopic] = useState(0);
  const examples = lessonExamples[area.slug] ?? lessonExamples.python;
  const example = examples?.[topic];
  const copy = useMentorCopy();
  if (!example || !examples) return null;
  return <section className="border-t border-border bg-card"><div className="section-wrap"><p className="eyebrow">Sample lesson · not saved</p><h2 className="mt-3 text-3xl font-extrabold">{area.name}: {topic === 0 ? "Your first example" : topic === 1 ? "Named values" : "Repeating a step"}</h2><div className="mt-8 grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)_270px]"><nav aria-label="Lesson topics" className="flex flex-wrap content-start gap-2 lg:flex-col">{examples.map((_, i) => <Button key={i} variant={topic === i ? "default" : "outline"} onClick={() => setTopic(i)} className="justify-start">{i + 1}. {i === 0 ? "Hello world" : i === 1 ? "Variables" : "Loops"}</Button>)}</nav><div className="min-w-0"><h3 className="font-bold">Code example</h3><pre className="demo-code mt-3">{example.code}</pre><h3 className="mt-6 font-bold">Explanation</h3><p className="mt-3 leading-7 text-muted-foreground">{example.explanation}</p><h3 className="mt-6 font-bold">Expected output</h3><pre className="mt-3 whitespace-pre-wrap rounded-lg border border-success-border bg-success-surface p-4 font-mono text-sm text-success">{example.output}</pre><div className="mt-6 flex flex-wrap gap-3">{topic < examples.length - 1 ? <Button onClick={() => setTopic(topic + 1)}>Next Lesson<ArrowRight /></Button> : <Button asChild><Link to="/quiz">Try the sample quiz<ArrowRight /></Link></Button>}<Button asChild variant="outline"><Link to="/debugging">Explore debugging</Link></Button></div></div><Mentor pose="coding" speech={copy.lesson} /></div></div></section>;
}