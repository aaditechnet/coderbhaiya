import { csTopics, csLevels } from "@/config/cs-curriculum";
export interface ProgressItem { item_id: string; kind: string; completed_at: string }
export function progressSummary(items: ProgressItem[], today: string) {
  const completed = new Set(items.filter(i => i.kind === "topic" && csTopics.some(t => t.id === i.item_id)).map(i => i.item_id));
  const practice = new Set(items.filter(i => i.kind === "practice").map(i => i.item_id)).size;
  const projects = new Set(items.filter(i => i.kind === "project").map(i => i.item_id)).size;
  const dates = new Set(items.map(i => i.completed_at.slice(0, 10)));
  let streak = 0;
  const day = new Date(`${today}T00:00:00Z`);
  if (!dates.has(today)) day.setUTCDate(day.getUTCDate() - 1);
  while (dates.has(day.toISOString().slice(0, 10))) { streak++; day.setUTCDate(day.getUTCDate() - 1); }
  const levels = csLevels.map(l => { const topics = csTopics.filter(t => t.levelId === l.id); const count = topics.filter(t => completed.has(t.id)).length; return { id: l.id, count, total: topics.length, percent: Math.round(count / topics.length * 100) }; });
  return { completed, practice, projects, streak, percent: Math.round(completed.size / csTopics.length * 100), xp: completed.size * 10 + practice * 20 + projects * 100, levels };
}