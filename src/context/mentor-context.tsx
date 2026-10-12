import { createContext, useContext, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";

type MentorState = { step: number | null; start: () => void; move: (step: number) => void; close: () => void };
const Context = createContext<MentorState | undefined>(undefined);
export function MentorProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<number | null>(null);
  const navigate = useNavigate();
  const move = (next: number) => { setStep(next); if (next === 0 || next === 1) void navigate({ to: "/" }); if (next === 2) void navigate({ to: "/programming-languages" }); if (next === 3) void navigate({ to: "/coding-lab" }); window.scrollTo({ top: 0, behavior: "instant" }); };
  return <Context.Provider value={{ step, start: () => move(0), move, close: () => { setStep(null); try { localStorage.setItem("coder-bhaiya-guide-seen", "true"); } catch { /* Optional preference only. */ } } }}>{children}</Context.Provider>;
}
export function useMentorGuide() { const value = useContext(Context); if (!value) throw new Error("MentorProvider is required"); return value; }