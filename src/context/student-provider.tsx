import { useEffect, useState, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { StudentContext } from "./student-state";
export function StudentProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const query = useQueryClient(); const router = useRouter();
  useEffect(() => {
    let active = true;
    void supabase.auth.getUser().then(({ data }) => { if (active) { setUser(data.user); setLoading(false); } });
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (active) { setUser(session?.user ?? null); setLoading(false); }
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
        if (event === "SIGNED_OUT") query.clear(); else void query.invalidateQueries();
        void router.invalidate();
      }
    });
    return () => { active = false; data.subscription.unsubscribe(); };
  }, [query, router]);
  return <StudentContext.Provider value={{ user, loading }}>{children}</StudentContext.Provider>;
}