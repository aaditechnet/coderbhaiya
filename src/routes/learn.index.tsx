import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/coder-bhaiya/page-shell";

export const Route = createFileRoute("/learn/")({
  head: () => ({ meta: [
    { title: "How Learning Works — Coder Bhaiya" }, { name: "description", content: "See the simple, beginner-friendly Coder Bhaiya learning approach." },
    { property: "og:title", content: "How Learning Works — Coder Bhaiya" }, { property: "og:description", content: "Choose, understand and practise programming with confidence." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LearnPage,
});
function LearnPage() { return <PageIntro eyebrow="A simple way to learn" title="Small steps. Clear ideas. Real confidence." description="Choose a learning path, understand each concept through friendly examples, then practise at a pace that feels comfortable."><Button asChild size="xl" className="mt-9"><Link to="/programming-languages">Choose a learning path <ArrowRight /></Link></Button></PageIntro>; }
