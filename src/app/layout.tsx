import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Meta Intelligo Technologies | AI-Driven Enterprise Technology Solutions",
    template: "%s | Meta Intelligo Technologies",
  },
  description:
    "Meta Intelligo Technologies delivers world-class AI, cloud, DevOps, and digital transformation solutions. Trusted by enterprises across Healthcare, Banking, Insurance, and Manufacturing sectors.",
  keywords: [
    "AI solutions",
    "digital transformation",
    "cloud computing",
    "DevOps",
    "enterprise software",
    "machine learning",
    "IT services",
    "Bengaluru",
    "India",
    "Meta Intelligo",
  ],
  authors: [{ name: "Meta Intelligo Technologies" }],
  creator: "Meta Intelligo Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://metaintelligo.com",
    title: "Meta Intelligo Technologies | AI-Driven Enterprise Solutions",
    description:
      "Transform your enterprise with AI, cloud, and digital innovation. Meta Intelligo delivers cutting-edge technology solutions that drive measurable business outcomes.",
    siteName: "Meta Intelligo Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Intelligo Technologies | AI-Driven Enterprise Solutions",
    description:
      "Transform your enterprise with AI, cloud, and digital innovation.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-space-900 text-white antialiased overflow-x-hidden`}
      >
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingContact />
          <ChatWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
