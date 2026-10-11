import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/coder-bhaiya/home-page";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Coder Bhaiya — Coding Seekho, Confidence Badhao!" },
    { name: "description", content: "Learn programming through simple explanations, visual concepts and guided practice with Coder Bhaiya." },
    { property: "og:title", content: "Coder Bhaiya — Coding Seekho, Confidence Badhao!" },
    { property: "og:description", content: "A warm, beginner-friendly path into programming." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});
