import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Boilerplate",
    template: "%s | Next.js Boilerplate",
  },
  description: "A modern Next.js boilerplate with TypeScript, Tailwind CSS, and ESLint configured for rapid development",
  keywords: ["nextjs", "react", "typescript", "tailwindcss", "boilerplate", "starter", "template"],
  authors: [{ name: "ZOOKA-AI", url: "https://github.com/ZOOKA-AI" }],
  creator: "ZOOKA-AI",
  publisher: "ZOOKA-AI",
  metadataBase: new URL("https://github.com/ZOOKA-AI/nextjs-boilerplate"),
  openGraph: {
    title: "Next.js Boilerplate",
    description: "A modern Next.js boilerplate with TypeScript, Tailwind CSS, and ESLint configured for rapid development",
    type: "website",
    locale: "en_US",
    siteName: "Next.js Boilerplate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Boilerplate",
    description: "A modern Next.js boilerplate with TypeScript, Tailwind CSS, and ESLint configured for rapid development",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
