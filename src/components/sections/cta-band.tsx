import { Button } from "@/components/ui/button";
import { LeadCaptureForm } from "@/components/forms/lead-capture-form";
import { CALENDLY_URL } from "@/lib/constants";

export function CTABand() {
  return (
    <section className="bg-gradient-to-b from-background to-indigo-50/50 py-20 dark:to-indigo-950/20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to see Drive247 in action?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Book a 30-minute call and we&apos;ll walk you through the platform.
          Or drop your email and we&apos;ll reach out when you&apos;re ready.
        </p>

        <div className="mt-8">
          <Button asChild size="lg" className="text-base">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </Button>
        </div>

        <div className="mx-auto mt-6 flex max-w-md items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-6 flex justify-center">
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
