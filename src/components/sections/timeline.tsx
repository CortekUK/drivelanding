"use client";

import { useEffect, useRef, useState } from "react";
import { TIMELINE_STEPS } from "@/lib/constants";

export function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-border" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            How it works
          </p>
          <div className="h-px w-12 bg-border" />
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-tight">
          Go live with your own direct channel{" "}
          <span className="text-indigo-600 dark:text-indigo-400">in 7 days</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Most established operators are live within 7 days. Insurance and ID
          verification integrations may extend timelines slightly.
        </p>

        <div ref={sectionRef} className="relative mt-16">
          {/* Connecting line — desktop only */}
          <div className="absolute top-[22px] right-[calc(12.5%+14px)] left-[calc(12.5%+14px)] hidden lg:block">
            <div
              className="h-px bg-border transition-all duration-1000 ease-out"
              style={{
                width: visible ? "100%" : "0%",
                transitionDelay: "200ms",
              }}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE_STEPS.map((step, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all duration-700 ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0)"
                    : "translateY(24px)",
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-600/20 to-transparent" />

                {/* Step number — top right */}
                <div
                  className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/[0.08] text-sm font-bold text-indigo-600 transition-all duration-500 ease-out dark:bg-indigo-400/[0.1] dark:text-indigo-400"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "scale(1)" : "scale(0.5)",
                    transitionDelay: `${i * 150 + 200}ms`,
                  }}
                >
                  {i + 1}
                </div>

                <p
                  className="text-xs font-medium uppercase tracking-wider text-indigo-600 transition-all duration-500 ease-out dark:text-indigo-400"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateY(0)"
                      : "translateY(8px)",
                    transitionDelay: `${i * 150 + 300}ms`,
                  }}
                >
                  {step.time}
                </p>
                <h3
                  className="mt-2 text-lg font-semibold tracking-tight transition-all duration-500 ease-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateY(0)"
                      : "translateY(8px)",
                    transitionDelay: `${i * 150 + 350}ms`,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-sm text-muted-foreground leading-relaxed transition-all duration-500 ease-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateY(0)"
                      : "translateY(8px)",
                    transitionDelay: `${i * 150 + 400}ms`,
                  }}
                >
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
