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

export const TESTIMONIALS = [
  {
    before: "We went from juggling spreadsheets and three different apps to running everything from one dashboard. We finally have a system that matches how we actually operate. ",
    bold: "Bookings doubled within the first quarter.",
    after: "",
    name: "Marcus T.",
    initials: "MT",
    role: "Owner",
    fleet: "12-vehicle fleet, Atlanta",
    stars: 5,
  },
  {
    before: "",
    bold: "The branded website alone paid for itself.",
    after: " Customers trust us more when they book on our own site instead of a marketplace listing.",
    name: "Sarah K.",
    initials: "SK",
    role: "Operations Manager",
    fleet: "28-vehicle fleet, Miami",
    stars: 5,
  },
  {
    before: "Setup was painless — ",
    bold: "we were live in five days.",
    after: " The team actually understands what independent operators need.",
    name: "James R.",
    initials: "JR",
    role: "Founder",
    fleet: "8-vehicle fleet, Phoenix",
    stars: 5,
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
      "Drive247 provides the infrastructure to own your bookings. For operators ready to scale, we offer optional paid acquisition management — structured through your own ad accounts, ensuring you retain control and ownership.",
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
  {
    question: "How much does Drive247 cost?",
    answer:
      "Pricing depends on fleet size and which modules you need. We'll walk through options on your strategy call and give you a clear breakdown — no hidden fees, no long-term contracts.",
  },
];
