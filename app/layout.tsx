import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const LiquidEtherBackground = dynamic(
  () =>
    import("@/components/liquid-ether-background").then((m) => ({
      default: m.LiquidEtherBackground,
    })),
  { ssr: false }
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = "https://la-fleche.ca";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "La Flèche AI | AI Automation, Dashboards & Custom Software",
    template: "%s | La Flèche AI",
  },
  description:
    "Bilingual AI automation company helping businesses automate operations, workflows, dashboards, and customer communication.",
  keywords: [
    "AI automation",
    "business automation",
    "logistics automation",
    "Power BI dashboards",
    "AI agents",
    "workflow automation",
    "Québec AI company",
  ],
  authors: [{ name: "La Flèche AI" }],
  creator: "La Flèche AI",
  openGraph: {
    type: "website",
    locale: "fr_CA",
    alternateLocale: "en_CA",
    url: SITE_URL,
    siteName: "La Flèche AI",
    title: "La Flèche AI | AI Automation, Dashboards & Custom Software",
    description:
      "Automate operations, communication, and decision-making with AI agents, intelligent dashboards, and custom software.",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Flèche AI | AI Automation & Custom Software",
    description:
      "Automate today. Accelerate tomorrow. Bilingual AI automation for modern operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <LiquidEtherBackground />
        <Providers>
          <Navbar />
          <main className="relative z-10 min-h-screen">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
