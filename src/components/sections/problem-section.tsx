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

function ProblemCard({
  point,
  index,
  className,
}: {
  point: (typeof PROBLEM_POINTS)[number];
  index: number;
  className?: string;
}) {
  const Icon = iconMap[point.icon];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-foreground/10 ${className ?? ""}`}
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      {/* Large number watermark */}
      <span className="pointer-events-none absolute -bottom-4 right-4 text-[80px] font-extrabold leading-none tabular-nums text-indigo-600/[0.06] transition-colors duration-300 group-hover:text-indigo-600/[0.10] dark:text-indigo-400/[0.06] dark:group-hover:text-indigo-400/[0.10]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative">
        <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/[0.08] dark:bg-indigo-400/[0.1]">
          {Icon && <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />}
        </div>

        <h3 className="text-[17px] font-semibold tracking-tight">
          {point.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {point.description}
        </p>
      </div>
    </div>
  );
}

export function ProblemSection() {
  return (
    <section className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section label */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-border" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            The marketplace trade-off
          </p>
          <div className="h-px w-12 bg-border" />
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-tight">
          Marketplaces bring demand.
          <br />
          <span className="text-indigo-600 dark:text-indigo-400">They also take control.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Here&apos;s the trade-off.
        </p>

        {/* Bento-style grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {/* Card 1 — 2 cols */}
          <ProblemCard
            point={PROBLEM_POINTS[0]}
            index={0}
            className="lg:col-span-2"
          />
          {/* Card 2 — 2 cols */}
          <ProblemCard
            point={PROBLEM_POINTS[1]}
            index={1}
            className="lg:col-span-2"
          />
          {/* Card 3 — 2 cols */}
          <ProblemCard
            point={PROBLEM_POINTS[2]}
            index={2}
            className="lg:col-span-2"
          />
          {/* Card 4 — 3 cols (wider) */}
          <ProblemCard
            point={PROBLEM_POINTS[3]}
            index={3}
            className="lg:col-span-3"
          />
          {/* Card 5 — 3 cols (wider) */}
          <ProblemCard
            point={PROBLEM_POINTS[4]}
            index={4}
            className="lg:col-span-3"
          />
        </div>
      </div>
    </section>
  );
}
