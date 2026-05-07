import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import FloatingDockDemo from "@/components/floating-dock-demo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rithwikbejadi.tech"),
  title: {
    default: "Sai Rithwik Bejadi — Portfolio",
    template: "%s | Sai Rithwik Bejadi",
  },
  description:
    "B.Tech AI student at NST (2028) focused on backend and full-stack engineering. Currently Backend Intern at SalarySe. 40+ open-source PRs. Builds API-driven systems and AI workflows.",
  keywords: [
    "Sai Rithwik Bejadi",
    "backend engineer",
    "full-stack developer",
    "Node.js",
    "TypeScript",
    "FastAPI",
    "Next.js",
    "NST",
    "Newton School of Technology",
    "SalarySe intern",
    "portfolio",
  ],
  authors: [{ name: "Sai Rithwik Bejadi", url: "https://rithwikbejadi.tech" }],
  creator: "Sai Rithwik Bejadi",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rithwikbejadi.tech",
    siteName: "Sai Rithwik Bejadi",
    title: "Sai Rithwik Bejadi — Backend Engineer",
    description:
      "B.Tech AI student at NST focused on backend engineering, API design, and AI-integrated systems. Currently interning at SalarySe.",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Sai Rithwik Bejadi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Rithwik Bejadi — Backend Engineer",
    description:
      "B.Tech AI student at NST focused on backend engineering and full-stack development. Currently at SalarySe.",
    images: ["/profile.jpg"],
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
    canonical: "https://rithwikbejadi.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} min-h-screen bg-background font-sans text-foreground antialiased selection:bg-indigo-400/30 selection:text-white`}
        suppressHydrationWarning
      >
        {children}
        <div className="fixed bottom-4 left-0 right-0 z-50 pointer-events-none">
          <div className="pointer-events-auto w-full flex justify-center">
            <FloatingDockDemo />
          </div>
        </div>
      </body>
    </html>
  );
}
