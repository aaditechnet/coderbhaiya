import { createContext } from "react";

export type MentorState = {
  step: number | null;
  start: () => void;
  move: (step: number) => void;
  close: () => void;
};

// Keep context identity separate from refreshable React components.
export const MentorContext = createContext<MentorState | undefined>(undefined);