import { createFileRoute } from "@tanstack/react-router";
import { CSCareers } from "@/components/coder-bhaiya/cs-paths";
import { csHead } from "@/lib/cs-head";
export const Route=createFileRoute("/cs-careers")({head:()=>csHead("CS career paths","Choose among twelve careers with prerequisite-aware topic, practice, and project recommendations."),component:CSCareers});