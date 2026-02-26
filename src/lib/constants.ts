export const SITE_URL = "https://drive247.co";
export const CALENDLY_URL = "https://calendly.com/neemaghanbarinia/30min";

export const SITE_META = {
  title: "Drive247 — Direct Booking Platform for Independent Car Rental Operators",
  description:
    "A branded booking site, admin system, and renter portal — built for US operators who want more control than Turo.",
  ogImage: "/og.png",
};

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
];

export const PROBLEM_POINTS = [
  {
    icon: "DollarSign",
    title: "High platform fees",
    description:
      "Marketplace commissions cut into your margin — often 15–30% before payment processing.",
  },
  {
    icon: "Palette",
    title: "Limited brand control",
    description:
      "Your fleet sits beside competitors with no differentiation or long-term brand equity.",
  },
  {
    icon: "Users",
    title: "You don't own the customer relationship",
    description:
      "The platform controls communication, limiting retention and repeat bookings.",
  },
  {
    icon: "ShieldAlert",
    title: "Policy and algorithm changes",
    description:
      "Visibility, pricing, and compliance can shift without your input.",
  },
  {
    icon: "TrendingDown",
    title: "Traffic concentration risk",
    description:
      "Relying on one marketplace centralises demand risk in a single channel.",
  },
];


export const TIMELINE_STEPS = [
  {
    time: "Day 0",
    title: "Kickoff call",
    description:
      "We align on your fleet, pricing strategy, branding and growth goals.",
  },
  {
    time: "48 hours",
    title: "Admin access + branded site",
    description:
      "Your dashboard is live and your direct booking website is ready for review.",
  },
  {
    time: "~1 week",
    title: "Go live",
    description:
      "Payments, documents and verification are connected. You begin taking direct bookings.",
  },
  {
    time: "Ongoing",
    title: "Growth support",
    description:
      "Platform updates, feature improvements and optional paid traffic management to scale your direct channel.",
  },
];

export const IDEAL_FOR = [
  "Turo power hosts ready to build a direct channel",
  "Operators scaling beyond marketplace dependency",
  "Independent fleets building long-term brand equity",
  "Airport and local rental operators ready to control pricing",
  "Businesses investing in paid traffic and retention",
];

export const NOT_IDEAL_FOR = [
  "Operators who want a marketplace to generate all demand",
  "Businesses unwilling to manage their own customer acquisition",
  "Fleets looking for built-in marketplace traffic instead of ownership",
];

export const DASHBOARD_SLIDES = [
  {
    id: "fleet",
    trigger: "Fleet Management",
    title: "Fleet Management",
    description: "Real-time visibility across your entire fleet.",
    bullets: [
      "Availability calendar and blackout controls",
      "Vehicle status tracking (available, rented, maintenance)",
      "Add and manage vehicles with photos, pricing, and rules",
      "Location and working-hour configuration",
    ],
    image: "/fleet-management.png",
  },
  {
    id: "bookings",
    trigger: "Bookings & Extensions",
    title: "Bookings & Extensions",
    description: "Control every booking from creation to completion.",
    bullets: [
      "View, edit, and approve bookings in one queue",
      "Process extension requests and automatically calculate differences",
      "Booking timeline with full renter activity history",
      "Direct renter communication inside the booking",
    ],
    image: "/bookings-management.png",
  },
  {
    id: "payments",
    trigger: "Payments & Documents",
    title: "Payments & Documents",
    description: "Centralised payment processing and document management.",
    bullets: [
      "Collect deposits and rental payments",
      "Track payment status and transaction history",
      "Upload and verify renter documents",
      "Store agreements and booking files securely",
    ],
    image: "/payments-management.png",
  },
  {
    id: "revenue",
    trigger: "Revenue & Analytics",
    title: "Revenue & Analytics",
    description: "Understand performance across your fleet.",
    bullets: [
      "Revenue tracking by vehicle and date range",
      "Utilisation and booking trends",
      "P&L visibility across the fleet",
      "Downloadable reporting",
    ],
    image: "/revenue-analytics.png",
  },
  {
    id: "ai",
    trigger: "AI Copilot (Powered by TraX)",
    title: "AI Copilot",
    description:
      "Operational summaries and intelligent prompts — directly inside your dashboard.",
    body: "Drive247's AI Copilot analyses live booking, revenue, and fleet data — delivering concise operational summaries and on-demand insights inside your dashboard.",
    bullets: [
      "Real-time revenue and utilisation summaries",
      "Automated booking and operational highlights",
      "Intelligent alerts for anomalies or trends",
      "Natural-language queries across your rental data",
    ],
    footnote: "Powered by TraX AI.",
    image: "/placeholder-ai.png",
    video: "/drivetrac.mp4",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Do you generate demand like Turo?",
    answer:
      "No — Drive247 gives you the tools to run direct, but you bring your own traffic. The upside: every customer is yours. No commissions, no shared listings, full brand control. Most operators already have repeat customers, social media, and referrals — Drive247 makes it easy to convert that traffic into bookings.",
  },
  {
    question: "Do you help with marketing and paid traffic?",
    answer:
      "Yes. While Drive247 is not a marketplace, we offer optional Meta (Facebook & Instagram) ad management to help drive traffic to your direct booking website. You fund the ad spend, and we manage campaign setup, targeting, and optimisation. Many operators use Drive247 alongside paid acquisition to build a predictable direct channel.",
  },
  {
    question: "What about insurance and claims?",
    answer:
      "Drive247 is integration-ready for Bonzah, a rental-specific insurance provider. You can offer coverage at checkout and manage claims through their platform. We help you get set up, but the insurance relationship is between you and the provider. Timeline depends on partner onboarding.",
  },
  {
    question: "How quickly can I go live?",
    answer:
      "Most operators are live within a week of kickoff. The biggest variable is third-party setup — insurance (Bonzah) and ID verification (CheckMyDriver) have their own onboarding timelines. We move fast on our side.",
  },
  {
    question: "Can I keep my current domain?",
    answer:
      "Absolutely. You point your domain to us, and your booking site runs on your own URL. Your brand, your domain, your customer experience.",
  },
  {
    question: "Do I own my data and can I leave anytime?",
    answer:
      "Drive247 is a SaaS platform — you subscribe and use it, but the code isn't yours to take. However, your data is always yours. You can export customer data, booking history, and documents at any time. No lock-in tricks.",
  },
];
