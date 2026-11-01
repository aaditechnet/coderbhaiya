import { createFileRoute } from "@tanstack/react-router";
import { StudentAuth } from "@/components/coder-bhaiya/student-auth";
import { csHead } from "@/lib/cs-head";
export const Route = createFileRoute("/auth")({ head: () => csHead("Student account", "Sign in to save your original CS curriculum progress and private mentor conversations."), component: StudentAuth });