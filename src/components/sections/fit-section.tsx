import { Check, Minus } from "lucide-react";
import { IDEAL_FOR, NOT_IDEAL_FOR } from "@/lib/constants";

export function FitSection() {
  return (
    <section className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-border" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Designed for operators ready to grow
          </p>
          <div className="h-px w-12 bg-border" />
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-tight">
          Built for operators ready to{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            own their growth
          </span>
        </h2>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Ideal for */}
          <div className="relative overflow-hidden rounded-2xl border border-indigo-600/20 bg-card p-8 shadow-sm dark:border-indigo-400/20">
            <div className="absolute inset-y-0 left-0 w-1 bg-indigo-600 dark:bg-indigo-400" />
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              Built for
            </h3>
            <ul className="mt-6 space-y-4">
              {IDEAL_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600/[0.08] dark:bg-indigo-400/[0.1]">
                    <Check className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not ideal for */}
          <div className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-muted-foreground">
              Not built for
            </h3>
            <ul className="mt-6 space-y-4">
              {NOT_IDEAL_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Minus className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
