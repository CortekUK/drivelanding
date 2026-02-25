import { TIMELINE_STEPS } from "@/lib/constants";

export function Timeline() {
  return (
    <section id="timeline" className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          How onboarding works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Most operators are live within a week. Third-party setup (insurance,
          ID verification) may extend timelines.
        </p>

        <div className="relative mt-12 ml-4">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-3 w-px bg-border" />

          <div className="space-y-10">
            {TIMELINE_STEPS.map((step, i) => (
              <div key={i} className="relative pl-10">
                {/* Dot */}
                <div className="absolute left-0 flex h-7 w-7 items-center justify-center rounded-full border bg-background text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  {i + 1}
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {step.time}
                </span>
                <h3 className="mt-1 font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
