import {
  DollarSign,
  Palette,
  Users,
  ShieldAlert,
  TrendingDown,
} from "lucide-react";
import { PROBLEM_POINTS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign,
  Palette,
  Users,
  ShieldAlert,
  TrendingDown,
};

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Marketplaces bring demand. They also take control.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEM_POINTS.map((point) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={point.title}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <h3 className="font-semibold">{point.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
