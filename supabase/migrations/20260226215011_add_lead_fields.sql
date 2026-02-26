-- Add name, business, and message columns to leads table
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS name text,
  ADD COLUMN IF NOT EXISTS business text,
  ADD COLUMN IF NOT EXISTS message text;
