import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useStudent } from "@/context/student-state";
import { progressSummary } from "@/lib/cs-progress";
export function useCSProgress() {
  const { user } = useStudent(); const cache = useQueryClient();
  const query = useQuery({ queryKey: ["cs-progress", user?.id], enabled: Boolean(user), queryFn: async () => {
    if (!user) return [];
    const { data, error } = await supabase.from("learning_progress").select("item_id,kind,completed_at").eq("user_id", user.id);
    if (error) throw error; return data;
  } });
  const save = async (item_id: string, kind: "topic" | "practice" | "project", complete = true) => {
    if (!user) throw new Error("Sign in to save your learning progress.");
    const existing = query.data?.some(i => i.item_id === item_id && i.kind === kind);
    if (complete && existing) return;
    const result = complete ? await supabase.from("learning_progress").insert({ user_id: user.id, item_id, kind }) : await supabase.from("learning_progress").delete().eq("user_id", user.id).eq("item_id", item_id).eq("kind", kind);
    if (result.error) throw result.error;
    await cache.invalidateQueries({ queryKey: ["cs-progress", user.id] });
  };
  return { ...query, user, save, summary: progressSummary(query.data ?? [], new Date().toISOString().slice(0, 10)) };
}