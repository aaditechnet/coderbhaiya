import { createFileRoute } from "@tanstack/react-router";
import { CSMentor } from "@/components/coder-bhaiya/cs-mentor";
import { csHead } from "@/lib/cs-head";
export const Route=createFileRoute("/cs-mentor-thread/$threadId")({head:()=>csHead("Your mentor conversation","Continue a private learning conversation with Coder Bhaiya."),component:ThreadRoute});
function ThreadRoute(){const {threadId}=Route.useParams();return <CSMentor threadId={threadId}/>;}