import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jose Manuel - Authentic Spanish Tortillas & Paellas",
  description: "Experience authentic Spanish tortillas and paellas crafted with passion. Fresh ingredients and traditional recipes delivered to FIU students and Miami locals.",
  keywords: "Spanish food, tortillas, paellas, authentic cuisine, delivery, FIU, Miami",
  authors: [{ name: "Jose Manuel" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
