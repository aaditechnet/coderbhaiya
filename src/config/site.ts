import {
  Binary,
  Blocks,
  Braces,
  BrainCircuit,
  Code2,
  Coffee,
  Database,
  FileCode2,
  FlaskConical,
  GitBranch,
  GraduationCap,
  LayoutDashboard,
  Network,
  PlaySquare,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "Coder Bhaiya",
  tagline: "Coding Seekho, Confidence Badhao!",
  supportingTagline: "Your Friendly Guide to the World of Coding.",
} as const;

export type LearningArea = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "cyan" | "violet" | "amber";
};

export const learningAreas: LearningArea[] = [
  { slug: "c-programming", name: "C Programming", shortName: "C", description: "Build a strong foundation with variables, loops, functions and memory basics.", icon: Binary, accent: "blue" },
  { slug: "cpp-programming", name: "C++ Programming", shortName: "C++", description: "Move from core syntax to object-oriented programming with clear examples.", icon: Braces, accent: "violet" },
  { slug: "python", name: "Python", shortName: "Py", description: "Start coding with a friendly language used in automation, data and AI.", icon: Code2, accent: "cyan" },
  { slug: "java", name: "Java", shortName: "Java", description: "Learn structured, object-oriented programming one simple concept at a time.", icon: Coffee, accent: "amber" },
  { slug: "javascript", name: "JavaScript", shortName: "JS", description: "Understand the language that makes modern websites interactive.", icon: FileCode2, accent: "amber" },
  { slug: "typescript", name: "TypeScript", shortName: "TS", description: "Write safer JavaScript with types, helpful tools and clear patterns.", icon: Braces, accent: "blue" },
  { slug: "html-css", name: "HTML & CSS", shortName: "</>", description: "Create accessible, beautiful web pages from your very first project.", icon: Blocks, accent: "violet" },
  { slug: "sql-databases", name: "SQL & Database Fundamentals", shortName: "SQL", description: "Learn how information is stored, organised and queried in databases.", icon: Database, accent: "cyan" },
  { slug: "php", name: "PHP", shortName: "PHP", description: "Explore practical server-side programming for dynamic websites.", icon: FileCode2, accent: "violet" },
  { slug: "dsa", name: "Data Structures & Algorithms", shortName: "DSA", description: "Learn to organise data and solve problems with confidence.", icon: Network, accent: "cyan" },
];

export const featureAreas = [
  { title: "AI Programming Tutor", description: "Programming concepts explained with patient examples and helpful context.", icon: Sparkles, action: "Meet your future tutor", accent: "blue" },
  { title: "Visual Learning Engine", description: "See arrays, pointers, linked lists, trees and algorithms come to life.", icon: BrainCircuit, action: "Preview visual learning", href: "/visual-learning", accent: "cyan" },
  { title: "Coding Lab", description: "A focused future workspace for understanding, debugging and practising code.", icon: FlaskConical, action: "Visit the lab", href: "/coding-lab", accent: "violet" },
  { title: "DSA Practice", description: "A dedicated path for building problem-solving skills step by step.", icon: GraduationCap, action: "Explore DSA", href: "/dsa", accent: "amber" },
  { title: "Algorithm Builder", description: "Explore algorithm steps, decisions and execution flow visually.", icon: Workflow, action: "See what’s coming", accent: "cyan" },
  { title: "Student Dashboard", description: "A future home for completed lessons, goals and learning progress.", icon: LayoutDashboard, action: "See what’s coming", accent: "blue" },
] as const;

export const learningSteps = [
  { number: "01", title: "Choose your path", description: "Pick a language or topic that matches what you want to build.", icon: GitBranch },
  { number: "02", title: "Understand the idea", description: "Learn through simple explanations, examples and visual concepts.", icon: PlaySquare },
  { number: "03", title: "Practise with confidence", description: "Apply each concept and improve your programming skills step by step.", icon: Code2 },
] as const;

export const findLearningArea = (slug: string) => learningAreas.find((area) => area.slug === slug);
