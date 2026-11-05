import { createFileRoute } from "@tanstack/react-router";
import { CSProjects } from "@/components/coder-bhaiya/cs-paths";
import { csHead } from "@/lib/cs-head";
export const Route=createFileRoute("/cs-projects")({validateSearch:(s:Record<string,unknown>):{project?:string}=>typeof s['project']==="string"?{project:s['project']}:{},head:()=>csHead("Project studio","Build fifteen progressive original CS projects with requirements and acceptance tests."),component:ProjectRoute});
function ProjectRoute(){const {project}=Route.useSearch();return <CSProjects {...(project?{project}:{})}/>;}