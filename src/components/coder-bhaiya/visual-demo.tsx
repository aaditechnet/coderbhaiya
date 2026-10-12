import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { visualTopics } from "@/config/learning-demo";
import { Mentor, useMentorCopy } from "./mentor";

export function VisualDemo() {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(0);
  const topic = visualTopics[selected] ?? visualTopics[0];
  const copy = useMentorCopy();
  const sortingStates = [[40, 10, 30, 20], [10, 40, 30, 20], [10, 30, 40, 20], [10, 30, 20, 40]];
  const values = selected === 5 ? (sortingStates[step] ?? sortingStates[0]).map(String) : topic.values;
  const active = selected === 2 ? 3 - step : step;
  return <main><div className="section-wrap"><p className="eyebrow">DSA visual learning · sample</p><h1 className="mt-4 text-4xl font-extrabold">See the concept, not just the syntax.</h1><div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]"><div className="min-w-0"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{visualTopics.map((item, i) => <Button variant={selected === i ? "default" : "outline"} className="h-16 text-base" key={item.title} onClick={() => { setSelected(i); setStep(0); }}>{item.title}</Button>)}</div><h2 className="mt-10 text-2xl font-bold">{topic.title}</h2><p className="mt-4 leading-7 text-muted-foreground">{topic.description}</p><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label={`${topic.title} visual explanation`}>{values.map((value, i) => <div key={i} className={`flex min-h-20 flex-col items-center justify-center rounded-lg border text-sm font-bold ${i === active ? "border-primary bg-primary-soft text-primary" : "border-border bg-card"}`}><span>{value}</span>{selected === 0 && <span className="mt-2 text-xs text-muted-foreground">index {i}</span>}</div>)}</div><p className="mt-5 min-h-12 text-sm leading-6 text-muted-foreground" aria-live="polite">{selected === 5 ? `Comparison ${step} of 3 in one pass. ${step === 3 ? "40 has reached the end; more passes are needed for a fully sorted array." : "Continue to compare the next adjacent pair."}` : selected === 4 && step >= 2 ? "Found 30 at index 2. Search complete." : selected === 2 ? `Next out: ${values[active]}.` : selected === 3 ? `Next out: ${values[step]}.` : `Current ${selected === 1 ? "node" : "index"}: ${step}.`}</p><div className="mt-4 flex flex-wrap gap-3"><Button disabled={step >= (selected === 4 ? 2 : 3)} onClick={() => setStep(step + 1)}>{topic.action}<ArrowRight /></Button><Button variant="outline" onClick={() => setStep(0)}><RotateCcw />Reset</Button></div></div><Mentor pose="brainstorming" speech={copy.visual} /></div></div></main>;
}