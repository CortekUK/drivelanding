import { Clock, CreditCard, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Clock, label: "Go live in ~7 days" },
  { icon: CreditCard, label: "Stripe-integrated payments" },
  { icon: ShieldCheck, label: "Insurance & ID verification supported" },
];

export function CredibilityStrip() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 pb-6 pt-4 sm:px-6 sm:pb-8">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground/80"
          >
            <item.icon className="h-3.5 w-3.5 text-indigo-600/60 dark:text-indigo-400/60" />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
