import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Avery Morgan | Web Developer & SEO Analyst",
  description:
    "Portfolio of Avery Morgan, a web developer and SEO analyst crafting high-impact digital experiences with measurable growth.",
  openGraph: {
    title: "Avery Morgan | Web Developer & SEO Analyst",
    description:
      "Explore web development projects, SEO case studies, and the holistic approach Avery takes to building high-performing digital products.",
    url: "https://agentic-9e4d06e2.vercel.app",
    siteName: "Avery Morgan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avery Morgan | Web Developer & SEO Analyst",
    description:
      "Modern web development and SEO expertise showcased through high-performing projects and data-backed results.",
    creator: "@averycodes",
  },
  metadataBase: new URL("https://agentic-9e4d06e2.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
