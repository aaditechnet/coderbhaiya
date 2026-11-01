import { createFileRoute } from "@tanstack/react-router";
import { StudentAuth } from "@/components/coder-bhaiya/student-auth";
import { csHead } from "@/lib/cs-head";
export const Route = createFileRoute("/reset-password")({ head: () => csHead("Reset your password", "Recover access to your Coder Bhaiya student account."), component: () => <StudentAuth reset /> });