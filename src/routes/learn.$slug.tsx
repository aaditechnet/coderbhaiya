import { createFileRoute, notFound } from "@tanstack/react-router";
import { findLearningArea } from "@/config/site";
import { SubjectPlaceholder } from "@/components/coder-bhaiya/page-shell";

export const Route = createFileRoute("/learn/$slug")({
  head: ({ params }) => { const name = findLearningArea(params.slug)?.name ?? "Learning Path"; return { meta: [
    { title: `${name} — Coder Bhaiya` }, { name: "description", content: `A dedicated beginner-friendly ${name} learning area from Coder Bhaiya.` },
    { property: "og:title", content: `${name} — Coder Bhaiya` }, { property: "og:description", content: `Learn ${name} with simple explanations and guided practice.` },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }; },
  component: SubjectPage,
});
function SubjectPage() { const { slug } = Route.useParams(); const area = findLearningArea(slug); if (!area) throw notFound(); return <SubjectPlaceholder area={area} />; }
