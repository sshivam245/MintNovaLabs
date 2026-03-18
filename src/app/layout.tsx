import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MintnovaLabs — AI-Powered Outreach, Automated",
  description:
    "MintnovaLabs replaces your entire outbound stack with one AI-powered platform. Meet Nova — your autonomous AI sales agent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans bg-white text-gray-900 leading-relaxed overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
