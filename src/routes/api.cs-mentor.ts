import { createFileRoute } from "@tanstack/react-router";
import { handleCSMentor } from "@/lib/cs-mentor.server";
export const Route=createFileRoute("/api/cs-mentor")({server:{handlers:{POST:({request})=>handleCSMentor(request)}}});