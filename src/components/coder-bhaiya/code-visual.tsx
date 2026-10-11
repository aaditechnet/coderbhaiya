import { Braces, CircleCheck, Play } from "lucide-react";

export function CodeVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:mx-0" aria-label="A friendly code lesson preview">
      <div className="absolute -left-5 top-20 hidden size-16 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-elevated sm:flex"><Braces className="size-7" /></div>
      <div className="overflow-hidden rounded-xl border border-border bg-code shadow-elevated">
        <div className="flex h-12 items-center justify-between border-b border-border px-4">
          <div className="flex gap-2"><span className="size-2.5 rounded-full bg-dot-red" /><span className="size-2.5 rounded-full bg-dot-amber" /><span className="size-2.5 rounded-full bg-dot-green" /></div>
          <span className="text-xs font-medium text-muted-foreground">hello_coder.py</span>
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground"><Play className="size-3.5" fill="currentColor" /></span>
        </div>
        <div className="grid min-h-[290px] grid-cols-[2.25rem_1fr] p-5 font-mono text-sm leading-8 sm:text-[15px]">
          <div className="select-none border-r border-border pr-3 text-right text-code-muted">1<br />2<br />3<br />4<br />5<br />6</div>
          <div className="pl-5 text-code-text">
            <div><span className="text-code-keyword">def</span> <span className="text-code-function">welcome</span>(name):</div>
            <div className="pl-5"><span className="text-code-keyword">return</span> <span className="text-code-string">f&quot;You can do it, {'{'}name{'}'}!&quot;</span></div>
            <div>&nbsp;</div>
            <div>student = <span className="text-code-string">&quot;Future Coder&quot;</span></div>
            <div><span className="text-code-function">print</span>(welcome(student))</div>
            <div className="mt-4 flex items-center gap-2 rounded-md border border-success-border bg-success-surface px-3 py-2 font-sans text-xs text-success"><CircleCheck className="size-4" /> You can do it, Future Coder!</div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 right-5 flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-elevated"><span className="flex size-9 items-center justify-center rounded-md bg-success-surface text-success"><CircleCheck className="size-5" /></span><span><strong className="block text-sm text-foreground">Concept clear!</strong><span className="text-xs text-muted-foreground">One step at a time</span></span></div>
    </div>
  );
}
