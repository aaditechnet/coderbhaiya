import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ComingSoon({ open, title, onClose }: { open: boolean; title: string; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-overlay px-4" role="presentation" onMouseDown={onClose}>
      <div className="relative w-full max-w-md rounded-xl border border-border bg-popover p-7 shadow-elevated" role="dialog" aria-modal="true" aria-labelledby="coming-soon-title" onMouseDown={(event) => event.stopPropagation()}>
        <Button variant="ghost" size="icon" className="absolute right-3 top-3" onClick={onClose} aria-label="Close message"><X /></Button>
        <span className="flex size-12 items-center justify-center rounded-lg bg-accent text-accent-foreground"><Sparkles /></span>
        <p className="mt-5 text-xs font-bold uppercase text-primary">Coming soon</p>
        <h2 id="coming-soon-title" className="mt-2 text-2xl font-bold text-foreground">{title} is getting ready.</h2>
        <p className="mt-3 leading-7 text-muted-foreground">We’re shaping this space carefully so your learning feels simple, useful and encouraging from day one.</p>
        <Button className="mt-6 w-full" size="lg" onClick={onClose}>Got it</Button>
      </div>
    </div>
  );
}
