import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/shared/json-ld";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { SITE_META, SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.description,
    url: SITE_URL,
    siteName: "Drive247",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.title,
    description: SITE_META.description,
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cortek",
  url: "https://cortek.co",
  brand: {
    "@type": "Brand",
    name: "Drive247",
  },
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Drive247",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: SITE_META.description,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <JsonLd data={organizationLd} />
        <JsonLd data={softwareLd} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
