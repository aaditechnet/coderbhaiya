import { Component, useEffect, useRef, type ErrorInfo, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { RotateCcw, Home, BookOpen } from "lucide-react";
import { mentorPoses } from "@/config/mentor";
import { getErrorCopy } from "@/config/error-copy";
import { useLanguage } from "@/context/language-context";
import { reportLovableError } from "@/lib/lovable-error-reporting";

/** Friendly recovery screen. Works without app providers so the root error fallback can use it too. */
export function ErrorRecoveryScreen({ error, onRetry, language }: { error: unknown; onRetry: () => void; language?: string }) {
  const copy = getErrorCopy(language);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => { headingRef.current?.focus(); }, []);
  const message = error instanceof Error ? error.message : String(error ?? "");
  const pose = mentorPoses.debugging;

  return (
    <section role="alert" aria-labelledby="error-title" className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center gap-8 px-4 py-12 md:flex-row">
      <figure className="w-40 shrink-0 md:w-56">
        <img src={pose.url} alt={pose.alt} width="292" height="350" className="h-auto w-full rounded-3xl shadow-md" />
        <figcaption className="mt-3 rounded-2xl border border-border bg-card p-3 text-sm font-semibold text-card-foreground">{copy.speech}</figcaption>
      </figure>
      <div className="max-w-lg text-center md:text-left">
        <h1 id="error-title" ref={headingRef} tabIndex={-1} className="text-2xl font-bold text-foreground outline-none md:text-3xl">{copy.title}</h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">{copy.body}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
          <button type="button" onClick={onRetry} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />{copy.retry}
          </button>
          <a href="/" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-input bg-background px-5 text-sm font-semibold text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Home className="h-4 w-4" aria-hidden="true" />{copy.home}
          </a>
          <a href="/learn" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-input bg-background px-5 text-sm font-semibold text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <BookOpen className="h-4 w-4" aria-hidden="true" />{copy.learn}
          </a>
        </div>
        {message && (
          <details className="mt-6 rounded-xl border border-border bg-muted/50 p-3 text-left text-sm">
            <summary className="cursor-pointer font-semibold text-foreground">{copy.details}</summary>
            <pre className="mt-2 whitespace-pre-wrap break-words font-mono text-xs text-muted-foreground">{message}</pre>
          </details>
        )}
      </div>
    </section>
  );
}

class Boundary extends Component<{ children: ReactNode; language: string }, { error: unknown | null }> {
  override state = { error: null as unknown | null };
  static getDerivedStateFromError(error: unknown) { return { error }; }
  override componentDidCatch(error: unknown, info: ErrorInfo) {
    console.error(error, info.componentStack);
    reportLovableError(error, { boundary: "coder_bhaiya_page_boundary" });
  }
  override render() {
    if (this.state.error !== null) {
      return <ErrorRecoveryScreen error={this.state.error} language={this.props.language} onRetry={() => this.setState({ error: null })} />;
    }
    return this.props.children;
  }
}

/** Keeps header/footer alive when a page crashes; resets automatically on navigation. */
export function PageErrorBoundary({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <Boundary key={pathname} language={language}>{children}</Boundary>;
}
