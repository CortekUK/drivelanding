import { Check, Minus } from "lucide-react";
import { IDEAL_FOR, NOT_IDEAL_FOR } from "@/lib/constants";

export function FitSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Is Drive247 right for you?
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Ideal for */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-green-700 dark:text-green-400">
              Ideal for
            </h3>
            <ul className="space-y-3">
              {IDEAL_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not ideal for */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
              Not ideal for
            </h3>
            <ul className="space-y-3">
              {NOT_IDEAL_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
