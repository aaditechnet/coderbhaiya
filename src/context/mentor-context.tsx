import { useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MentorContext } from "./mentor-state";

export function MentorProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<number | null>(null);
  const navigate = useNavigate();
  const move = (next: number) => { setStep(next); if (next === 0 || next === 1) void navigate({ to: "/" }); if (next === 2) void navigate({ to: "/programming-languages" }); if (next === 3) void navigate({ to: "/coding-lab" }); window.scrollTo({ top: 0, behavior: "instant" }); };
  return <MentorContext.Provider value={{ step, start: () => move(0), move, close: () => { setStep(null); try { localStorage.setItem("coder-bhaiya-guide-seen", "true"); } catch { /* Optional preference only. */ } } }}>{children}</MentorContext.Provider>;
}