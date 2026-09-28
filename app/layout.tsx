import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Bilim ve Teknik | Geleceğin Dünyası",
  description: "Yapay zekanın dünyada getireceği faydalar, yenilikler ve başarılar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
