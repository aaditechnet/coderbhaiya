import { createFileRoute } from "@tanstack/react-router";
import { CSProgress } from "@/components/coder-bhaiya/cs-paths";
import { csHead } from "@/lib/cs-head";
export const Route=createFileRoute("/cs-progress")({head:()=>csHead("Your CS skill tree","View saved topic, language, DSA, project, badge, and practice progress in Coder Bhaiya."),component:CSProgress});