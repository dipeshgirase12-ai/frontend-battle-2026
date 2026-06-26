import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "NexusAI - Intelligent AI Automation Platform",
    template: "%s | NexusAI",
  },
  description:
    "Transform your business operations with cutting-edge AI automation. Process data, optimize workflows, and scale intelligently with NexusAI.",
  keywords: [
    "AI automation",
    "workflow automation",
    "intelligent automation",
    "data processing",
    "AI platform",
    "enterprise automation",
  ],
  authors: [{ name: "NexusAI" }],
  creator: "NexusAI",
  metadataBase: new URL("https://nexusai.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusai.vercel.app",
    siteName: "NexusAI",
    title: "NexusAI - Intelligent AI Automation Platform",
    description:
      "Transform your business operations with cutting-edge AI automation. Process data, optimize workflows, and scale intelligently.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexusAI - AI Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusAI - Intelligent AI Automation Platform",
    description:
      "Transform your business operations with cutting-edge AI automation.",
    images: ["/og-image.png"],
    creator: "@nexusai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nexusai.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NexusAI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Transform your business operations with cutting-edge AI automation. Process data, optimize workflows, and scale intelligently.",
  offers: {
    "@type": "Offer",
    price: "29",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "NexusAI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary font-sans text-foreground antialiased">
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
