import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Play, Trash2, RotateCcw, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { demoPrograms, runDemo, type DemoLanguage } from "@/config/learning-demo";
import { Mentor, useMentorCopy } from "./mentor";

export function LabDemo() {
  const [language, setLanguage] = useState<DemoLanguage>("python");
  const [code, setCode] = useState<string>(demoPrograms.python.code);
  const [output, setOutput] = useState("");
  const copy = useMentorCopy();
  return <main><div className="section-wrap"><p className="eyebrow">Coding lab · frontend demo</p><h1 className="mt-4 text-4xl font-extrabold">A calm place to experiment with code.</h1><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Preview the supplied example’s output. Custom code is not executed, and nothing is saved.</p><div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_300px]"><div className="min-w-0"><div className="mb-4 flex flex-wrap items-center gap-3"><Select value={language} onValueChange={(value) => { const next = value as DemoLanguage; setLanguage(next); setCode(demoPrograms[next].code); setOutput(""); }}><SelectTrigger aria-label="Coding language" className="w-40"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="python">Python</SelectItem><SelectItem value="javascript">JavaScript</SelectItem><SelectItem value="c">C</SelectItem></SelectContent></Select><Button onClick={() => setOutput(code.trim() ? runDemo(language, code) : "Write or restore the example first.")}><Play />Run demo</Button><Button variant="outline" onClick={() => { setCode(""); setOutput(""); }}><Trash2 />Clear</Button><Button variant="ghost" onClick={() => { setCode(demoPrograms[language].code); setOutput(""); }}><RotateCcw />Restore example</Button></div><label htmlFor="lab-code" className="text-sm font-bold">Code editor</label><textarea id="lab-code" aria-label="Code editor" spellCheck={false} value={code} onChange={(e) => setCode(e.target.value)} className="demo-code mt-3 min-h-72 w-full resize-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" /><h2 className="mt-6 text-lg font-bold">Output</h2><pre role="status" aria-live="polite" className="mt-3 min-h-24 whitespace-pre-wrap break-words rounded-lg border border-border bg-card p-5 font-mono text-sm">{output || "No output yet."}</pre><Button asChild variant="outline" className="mt-6"><Link to="/debugging"><Bug />Explore debugging</Link></Button></div><Mentor pose="coding" speech={copy.lab} /></div></div></main>;
}