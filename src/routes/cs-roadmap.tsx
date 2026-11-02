import { createFileRoute } from "@tanstack/react-router";
import { CSRoadmap } from "@/components/coder-bhaiya/cs-roadmap";
import { csHead } from "@/lib/cs-head";
export const Route = createFileRoute("/cs-roadmap")({ head: () => csHead("World-Class CS Roadmap", "Explore an original thirteen-level computer science curriculum from absolute beginner to professional and research."), component: CSRoadmap });