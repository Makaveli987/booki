import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter as FontSans, Cardo as FontSerif } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Epic Reads | Find Your Next Favorite Book",
  description:
    "Discover the latest books you'll love. Our book recommendation app helps you find the perfect book based on your preferences.",
  icons: {
    icon: "/logo-base-32x32.png", // Favicon link
  },
  keywords:
    "book recommendations, book app, best books, literary recommendations, discover new books, personalized book recommendations",
  robots: "index, follow",
  openGraph: {
    title: "Best Book Recommendation App | Epic Reads",
    description:
      "Discover the latest books you'll love. Our book recommendation app helps you find the perfect book based on your preferences.",
    images: [
      {
        url: "https://book-recommendation-jade.vercel.app/logo-base-1200x630.png",
      },
    ],
    url: "https://book-recommendation-jade.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Book Recommendation App | Epic Reads",
    description:
      "Discover the latest books you'll love. Our book recommendation app helps you find the perfect book based on your preferences.",
    images:
      "https://book-recommendation-jade.vercel.app/logo-base-1200x630.png",
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
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
