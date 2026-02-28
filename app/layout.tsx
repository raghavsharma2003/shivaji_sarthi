import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/hooks/useLanguage";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-noto" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "PDA-Saathi | Where India's Leaders Listen",
  description: "AI-powered analytics on voter sentiment and engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${noto.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-[var(--color-background)] text-[var(--color-foreground)] selection:bg-[var(--color-saffron)] selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
