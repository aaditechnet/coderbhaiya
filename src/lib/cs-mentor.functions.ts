import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
export const listMentorThreads=createServerFn({method:"GET"}).middleware([requireSupabaseAuth]).handler(async({context})=>{
  const {data,error}=await context.supabase.from("mentor_threads").select("id,title,topic_id,updated_at").eq("user_id",context.userId).order("updated_at",{ascending:false});if(error)throw new Error("Conversations could not load.");return data;
});
export const createMentorThread=createServerFn({method:"POST"}).middleware([requireSupabaseAuth]).inputValidator((input:unknown)=>z.object({topicId:z.string().optional()}).parse(input)).handler(async({context,data})=>{
  const {data:row,error}=await context.supabase.from("mentor_threads").insert({user_id:context.userId,topic_id:data.topicId??null}).select("id").single();if(error)throw new Error("Conversation could not be created.");return row;
});
export const loadMentorThread=createServerFn({method:"GET"}).middleware([requireSupabaseAuth]).inputValidator((input:unknown)=>z.object({id:z.string().uuid()}).parse(input)).handler(async({context,data})=>{
  const {data:thread,error}=await context.supabase.from("mentor_threads").select("id,title,topic_id").eq("id",data.id).eq("user_id",context.userId).single();if(error)throw new Error("Conversation unavailable.");
  const {data:rows,error:messagesError}=await context.supabase.from("mentor_messages").select("message").eq("thread_id",data.id).order("created_at");if(messagesError)throw new Error("Messages could not load.");
  return {thread,messagesJson:JSON.stringify(rows.map(r=>r.message))};
});