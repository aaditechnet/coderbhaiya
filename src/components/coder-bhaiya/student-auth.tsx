import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useStudent } from "@/context/student-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mentor } from "./mentor";
import { StudentProfile } from "./student-profile";
import "@lovable.dev/cloud-auth-js/styles.css";

export function StudentAuth({ reset = false }: { reset?: boolean }) {
  const { user, loading } = useStudent(); const navigate = useNavigate(); const cache = useQueryClient();
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [name, setName] = useState("");
  const [busy, setBusy] = useState(false); const [notice, setNotice] = useState(""); const [error, setError] = useState(""); const [recovery, setRecovery] = useState(false);
  useEffect(() => { if (reset) setRecovery(window.location.hash.includes("type=recovery")); }, [reset]);
  async function submit(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setError(""); setNotice("");
    try {
      if (reset) {
        if (!user || !recovery) throw new Error("Open the password reset link from your email first.");
        const result = await supabase.auth.updateUser({ password }); if (result.error) throw result.error;
        setNotice("Password updated. You can continue learning.");
      } else if (mode === "forgot") {
        const result = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` }); if (result.error) throw result.error;
        setNotice("If an account exists for this email, a password reset link will arrive shortly.");
      } else if (mode === "signup") {
        const result = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth`, data: { display_name: name } } }); if (result.error) throw result.error;
        setNotice("Check your email to confirm your account before signing in.");
      } else {
        const result = await supabase.auth.signInWithPassword({ email, password }); if (result.error) throw result.error;
        await navigate({ to: "/cs-roadmap" });
      }
    } catch (err) { setError(err instanceof Error ? err.message : "We couldn't complete that action. Please try again."); } finally { setBusy(false); }
  }
  async function social(provider: "google" | "lovable") {
    setError(""); setBusy(true);
    try { const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: `${window.location.origin}/auth` }); if (result.error) throw result.error; if (!result.redirected) await navigate({ to: "/cs-roadmap" }); }
    catch (err) { setError(err instanceof Error ? err.message : "Sign-in is unavailable. Please try again."); } finally { setBusy(false); }
  }
  if (user && !reset) return <section className="section-wrap max-w-xl"><h1 className="text-3xl font-extrabold">Welcome back, beta.</h1><p className="mt-4 text-muted-foreground">Your learning journey is ready.</p><div className="mt-6 flex flex-wrap gap-3"><Button asChild><Link to="/cs-roadmap">Continue learning</Link></Button><Button variant="outline" onClick={async () => { await cache.cancelQueries(); cache.clear(); await supabase.auth.signOut(); await navigate({ to: "/auth", replace: true }); }}>Sign out</Button></div><StudentProfile/></section>;
  return <main className="section-wrap grid max-w-4xl gap-10 md:grid-cols-2"><div><h1 className="text-3xl font-extrabold">{reset ? "Reset your password" : mode === "signup" ? "Join Coder Bhaiya" : mode === "forgot" ? "Forgot your password?" : "Welcome back, beta"}</h1><p className="mt-3 text-muted-foreground">{reset ? "Choose a new password for your student account." : "A little practice today. A stronger foundation tomorrow."}</p><form onSubmit={submit} className="mt-7 space-y-5">{mode === "signup" && !reset && <div><Label htmlFor="student-name">Display name</Label><Input id="student-name" autoComplete="nickname" value={name} onChange={e => setName(e.target.value)} maxLength={80} required /></div>}{!reset && <div><Label htmlFor="student-email">Email</Label><Input id="student-email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} required /></div>}{(mode !== "forgot" || reset) && <div><Label htmlFor="student-password">Password</Label><Input id="student-password" type="password" autoComplete={reset || mode === "signup" ? "new-password" : "current-password"} value={password} onChange={e => setPassword(e.target.value)} minLength={8} required /></div>}{error && <p role="alert" className="text-sm text-destructive">{error}</p>}{notice && <p role="status" className="text-sm text-success">{notice}</p>}<Button type="submit" disabled={busy || loading} className="w-full">{busy ? "Please wait…" : reset ? "Update password" : mode === "signup" ? "Create account" : mode === "forgot" ? "Send reset link" : "Sign in"}</Button></form>{!reset && <div className="mt-5 space-y-3"><Button variant="outline" className="w-full" disabled={busy} onClick={() => social("google")}>Continue with Google</Button><Button className="lovable-auth-button w-full" disabled={busy} onClick={() => social("lovable")}>Continue with Lovable</Button><div className="flex flex-wrap justify-center gap-2"><Button variant="link" onClick={() => { setMode(mode === "signup" ? "signin" : "signup"); setError(""); setNotice(""); }}>{mode === "signup" ? "Already have an account?" : "Create an account"}</Button><Button variant="link" onClick={() => { setMode("forgot"); setError(""); }}>Forgot password?</Button></div></div>}</div><Mentor pose="welcome" speech="You don't need to know everything to begin. We'll build your confidence one concept at a time." /></main>;
}