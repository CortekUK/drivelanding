"use server";

import { supabase } from "@/lib/supabase/server";

export type LeadCaptureState = {
  success: boolean;
  message: string;
} | null;

export async function captureLeadAction(
  _prev: LeadCaptureState,
  formData: FormData
): Promise<LeadCaptureState> {
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return { success: false, message: "Please enter an email address." };
  }

  const trimmed = email.trim().toLowerCase();

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const { error } = await supabase
    .from("leads")
    .insert({ email: trimmed });

  if (error) {
    console.error("Lead capture error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }

  return { success: true, message: "Thanks! We'll be in touch soon." };
}
