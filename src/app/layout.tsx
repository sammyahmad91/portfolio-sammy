import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sammy Ahmad — Senior AI Engineer & ML Platform Architect",
  description:
    "Senior AI Engineer with 7+ years building production LLM applications, RAG systems, MLOps pipelines, and ML infrastructure at scale.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "MLOps",
    "LLM",
    "RAG",
    "Machine Learning",
    "DevOps",
    "Kubernetes",
  ],
  authors: [{ name: "Sammy Ahmad" }],
  openGraph: {
    title: "Sammy Ahmad — Senior AI Engineer & ML Platform Architect",
    description:
      "Designing and shipping production AI systems — from RAG pipelines to GPU infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${jetbrains.variable}`}>
      <body className="font-display">{children}</body>
    </html>
  );
}
