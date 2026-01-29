import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingDockDemo from "@/components/floating-dock-demo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rithwik Bejadi - Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
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
