import { createFileRoute, notFound } from "@tanstack/react-router";
import { findTopic } from "@/config/cs-curriculum";
import { CSTopicPage } from "@/components/coder-bhaiya/cs-topic";
import { csHead } from "@/lib/cs-head";
export const Route = createFileRoute("/cs-topic/$topicId")({ loader: ({params}) => {const topic=findTopic(params.topicId);if(!topic)throw notFound();return topic;}, head: ({loaderData}) => csHead(loaderData?.title??"Topic unavailable", `Study ${loaderData?.title??"computer science"} with original explanations, visualization, practice, and a supportive mentor.`), component: TopicRoute });
function TopicRoute(){const topic=Route.useLoaderData();return <CSTopicPage key={topic.id} topic={topic}/>;}