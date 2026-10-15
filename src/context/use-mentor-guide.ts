import { useContext } from "react";
import { MentorContext } from "./mentor-state";

export function useMentorGuide() {
  const value = useContext(MentorContext);
  if (!value) throw new Error("MentorProvider is required");
  return value;
}