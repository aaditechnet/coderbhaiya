import { Code2 } from "lucide-react";
import { brand } from "@/config/site";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-glow">
        <Code2 className="size-5" strokeWidth={2.4} />
      </span>
      {!compact && (
        <span className="min-w-0">
          <span className="block text-base font-bold leading-none text-foreground">{brand.name}</span>
          <span className="mt-1 block text-[11px] font-medium text-muted-foreground">Code • Learn • Grow</span>
        </span>
      )}
    </div>
  );
}
