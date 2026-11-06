import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useMentorGuide } from "@/context/use-mentor-guide";
import { Mentor, useMentorCopy } from "./mentor";
import { mentorPoses } from "@/config/mentor";

export function WelcomeGuide() {
  const { step, move, close } = useMentorGuide();
  const copy = useMentorCopy();
  if (step === null) return null;
  const speeches = [copy.welcome, copy.account, copy.choose, copy.lab];
  return <section aria-label="Welcome guide" className="border-b border-primary/30 bg-primary-soft"><div className="mx-auto max-w-7xl px-5 py-5 sm:px-8"><div className="flex items-center justify-between"><p className="text-xs font-bold text-primary">CODER BHAIYA · {step + 1} / 4</p><Button size="icon" variant="ghost" aria-label="Close welcome guide" onClick={close}><X /></Button></div><Mentor compact pose={step === 0 ? "welcome" : step === 1 || step === 2 ? "explaining" : "coding"} speech={speeches[step] ?? copy.welcome} />{step === 1 && <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy.accountNotice}</p>}<div className="mt-4 flex flex-wrap gap-2"><Button variant="outline" disabled={step === 0} onClick={() => move(step - 1)}><ArrowLeft />{copy.back}</Button><Button onClick={() => step === 3 ? close() : move(step + 1)}>{step === 3 ? copy.finish : copy.next}<ArrowRight /></Button><Button variant="ghost" onClick={close}>{copy.skip}</Button></div></div></section>;
}

export function FloatingMentor() {
  const [open, setOpen] = useState(false);
  const [explain, setExplain] = useState(false);
  const { start } = useMentorGuide();
  const copy = useMentorCopy();
  const pathname = useLocation({ select: (l) => l.pathname });
  const sectionSpeech = pathname.includes("coding-lab") ? copy.lab : pathname.includes("debug") ? copy.debug : pathname.includes("quiz") ? copy.success : pathname.includes("visual") || pathname === "/dsa" ? copy.visual : pathname.includes("learn/") ? copy.lesson : pathname.includes("programming") ? copy.choose : pathname.includes("dashboard") ? copy.dashboard : copy.welcome;
  const runGuide = () => { setOpen(false); start(); };
  return <><div className="mentor-dock"><Button variant="outline" className="h-14 gap-3 bg-card shadow-elevated" aria-label="Open Coder Bhaiya mentor" onClick={() => { setExplain(false); setOpen(true); }}><img src={mentorPoses["thumbs-up"].url} alt="" className="size-10 rounded-full object-cover" /><span className="text-sm font-bold">Coder Bhaiya</span></Button></div><Dialog open={open} onOpenChange={setOpen}><DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto"><DialogTitle>{copy.help}</DialogTitle><DialogDescription>Coder Bhaiya</DialogDescription><Mentor compact pose={explain ? "teaching" : "thumbs-up"} speech={explain ? sectionSpeech : copy.welcome} /><div className="grid gap-2"><Button asChild><Link to="/cs-mentor" onClick={() => setOpen(false)}>Ask a coding question<ArrowRight /></Link></Button><Button asChild variant="outline"><Link to="/cs-roadmap" onClick={() => setOpen(false)}>World-Class CS Roadmap</Link></Button><Button variant="outline" onClick={runGuide}>{copy.tour}</Button><Button variant="outline" onClick={() => setExplain(true)}>{copy.explain}</Button><Button asChild variant="outline"><Link to="/programming-languages" onClick={() => setOpen(false)}>{copy.explore}</Link></Button><Button variant="ghost" onClick={runGuide}>{copy.replay}</Button></div></DialogContent></Dialog></>;
}