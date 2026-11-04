import { createFileRoute } from "@tanstack/react-router";
import { CSMentor } from "@/components/coder-bhaiya/cs-mentor";
import { csHead } from "@/lib/cs-head";
export const Route=createFileRoute("/cs-mentor")({validateSearch:(s:Record<string,unknown>):{topic?:string}=>typeof s.topic==="string"?{topic:s.topic}:{},head:()=>csHead("Ask Coder Bhaiya","Get patient AI-powered coding explanations in private student conversations."),component:MentorRoute});
function MentorRoute(){const {topic}=Route.useSearch();return <CSMentor {...(topic?{topicId:topic}:{})}/>;}