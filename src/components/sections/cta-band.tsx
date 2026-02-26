import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { CALENDLY_URL } from "@/lib/constants";

export function CTABand() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo-50/30 to-indigo-50/50 dark:via-indigo-950/10 dark:to-indigo-950/20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-600/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-border" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Get Started
          </p>
          <div className="h-px w-12 bg-border" />
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-tight">
          Start owning your{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            direct bookings
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Tell us about your fleet or book a call. We&apos;ll outline your
          path to launching a fully independent direct channel.
        </p>

        {/* Form card */}
        <div className="relative mx-auto mt-16 max-w-lg overflow-hidden rounded-2xl border bg-card p-8 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-600/20 to-transparent" />
          <ConsultationForm />
        </div>

        {/* Reassurance */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <span>No pressure. Clear next steps. Typical go-live in ~7 days.</span>
        </div>

        {/* Calendly alternative */}
        <div className="mx-auto mt-6 flex max-w-lg items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 px-8 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <CalendarCheck className="h-4 w-4" />
              Book a strategy call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
