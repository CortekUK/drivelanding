import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";
import { AuroraBackground } from "@/components/shared/aurora-background";

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:mx-0">
      <div className="relative max-w-2xl lg:mx-0">
        <div className="mr-16 overflow-hidden rounded-xl border bg-background shadow-2xl shadow-indigo-900/10 sm:mr-20">
          <Image
            src="/dashboard-preview-v3.png"
            alt="Drive247 operations dashboard showing revenue tracking and performance analytics"
            width={1440}
            height={828}
            className="w-full"
            priority
          />
        </div>
        <div className="-mt-12 ml-8 mr-8 overflow-hidden rounded-xl border bg-background shadow-xl shadow-indigo-900/10 sm:-mt-20 sm:ml-10 sm:mr-10">
          <Image
            src="/renter-portal-preview.png"
            alt="Drive247 renter portal showing bookings, payments, ID verification, and messaging"
            width={1440}
            height={828}
            className="w-full"
          />
        </div>
        <div className="-mt-12 ml-16 overflow-hidden rounded-xl border bg-background shadow-xl shadow-indigo-900/10 sm:-mt-20 sm:ml-20">
          <Image
            src="/booking-preview.png"
            alt="Drive247 branded booking flow showing trip details, vehicle selection, and insurance steps"
            width={1440}
            height={828}
            className="w-full"
          />
        </div>
      </div>
      <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-full bg-indigo-200/40 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-indigo-100/50 blur-2xl" />
    </div>
  );
}

export function Hero() {
  return (
    <AuroraBackground className="pb-6 pt-12 sm:pb-8 sm:pt-16 lg:pb-12 lg:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Built for established US rental operators
            </p>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Own your bookings.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                Control your operation.
              </span>
            </h1>

            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground lg:max-w-sm">
              Booking site, ops dashboard, and renter portal&mdash;one
              platform. Typical go-live ~1 week depending on insurance/ID
              setup. You own the customer relationship.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-indigo-600 text-sm font-medium shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/30"
              >
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-sm font-medium"
                asChild
              >
                <a href="#features">See How It Works</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {["Booking Website", "Admin Dashboard", "Renter Portal"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-indigo-200/60 bg-indigo-50/50 px-3 py-1 text-xs font-medium text-indigo-600/80 dark:border-indigo-800/40 dark:bg-indigo-950/40 dark:text-indigo-400/80"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right — product mockup */}
          <div className="hidden lg:block">
            <DashboardPreview />
          </div>
        </div>

        {/* Mobile mockup */}
        <div className="mt-10 lg:hidden">
          <DashboardPreview />
        </div>
      </div>
    </AuroraBackground>
  );
}
