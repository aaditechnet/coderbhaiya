import { describe,it,expect } from "vitest";
import { csLevels,csTopics } from "@/config/cs-curriculum";
import { dsaLessons } from "@/config/cs-dsa";
import { careerPaths,csProjects,recommendCareer } from "@/config/cs-projects";
import { progressSummary } from "@/lib/cs-progress";
import { capsuleFor } from "@/config/cs-capsules";
describe("original CS curriculum rules",()=>{
  it("covers all thirteen levels from foundations to advanced CS",()=>{expect(csLevels.map(l=>l.id)).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13]);expect(csLevels[12]?.modules.flatMap(m=>m.topics)).toContain("Research Methodology");});
  it("keeps six distinct requested language tracks",()=>{expect(csLevels[1]?.modules.map(m=>m.title)).toEqual(["C","C++","Python","Java","JavaScript","SQL"]);});
  it("provides all ten required DSA content categories for every topic",()=>{const topics=csTopics.filter(t=>t.levelId===3);expect(topics).toHaveLength(18);topics.forEach(t=>{const d=dsaLessons[t.title];expect(d).toBeDefined();if(!d)return;[d.simple,d.analogy,d.example,d.pseudocode,d.python,d.time,d.space,d.bug,d.fixed].forEach(v=>expect(v.length).toBeGreaterThan(0));expect(d.visual.length).toBeGreaterThan(1);expect(d.practice).toHaveLength(4);});});
  it("all topics have an original beginner capsule",()=>{expect(new Set(csTopics.map(t=>t.id)).size).toBe(csTopics.length);csTopics.filter(t=>t.levelId!==3).forEach(t=>expect(capsuleFor(t.title,t.module,t.levelId).simple).not.toBe("This topic requires a dedicated authored lesson."));});
  it("includes twelve careers and all fifteen progressive project briefs",()=>{expect(careerPaths).toHaveLength(12);expect(csProjects).toHaveLength(15);expect(csProjects.filter(p=>p.stage==="Beginner").map(p=>p.title)).toEqual(["Calculator","To-Do App","Quiz App","Student Management System"]);expect(csProjects.find(p=>p.id==="cybersecurity-lab")?.requirements[0]).toBe("Document written scope");});
  it("career recommendations include prerequisite levels and matching projects",()=>{careerPaths.forEach(c=>{const path=recommendCareer(c.id);expect(path).toBeDefined();path?.levels.forEach(l=>l.prerequisites.forEach(p=>expect(path.levels.some(x=>x.id===p)).toBe(true)));expect(path?.projectBriefs.length).toBeGreaterThan(0);});});
  it("empty progress has no invented XP, streak, or completion",()=>{const s=progressSummary([],"2026-11-05");expect(s.xp).toBe(0);expect(s.percent).toBe(0);expect(s.streak).toBe(0);});
  it("deduplicates earned progress and counts consecutive activity days",()=>{const id=csTopics[0]?.id??"";const s=progressSummary([{item_id:id,kind:"topic",completed_at:"2026-11-05T10:00:00Z"},{item_id:id,kind:"topic",completed_at:"2026-11-05T10:00:00Z"},{item_id:id,kind:"practice",completed_at:"2026-11-04T10:00:00Z"},{item_id:"calculator",kind:"project",completed_at:"2026-11-03T10:00:00Z"}],"2026-11-05");expect(s.completed.size).toBe(1);expect(s.xp).toBe(130);expect(s.streak).toBe(3);});
});