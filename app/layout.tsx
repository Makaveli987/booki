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

// export const metadata: Metadata = {
//   title: "Epic Reads | Book Recommendation",
//   description:
//     "Discover the latest books you'll love. Our book recommendation app helps you find the perfect book based on your preferences.",
//   icons: {
//     icon: "/logo-base-32x32.png", // Favicon link
//   },
//   keywords:
//     "book recommendations, book app, best books, literary recommendations, discover new books, personalized book recommendations",
//   robots: "index, follow",
//   openGraph: {
//     title: "Best Book Recommendation App | Epic Reads",
//     description:
//       "Discover the latest books you'll love. Our book recommendation app helps you find the perfect book based on your preferences.",
//     images: [
//       {
//         url: "https://book-recommendation-jade.vercel.app/logo-base-1200x630.png",
//       },
//     ],
//     url: "https://book-recommendation-jade.vercel.app/",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Best Book Recommendation App | Epic Reads",
//     description:
//       "Discover the latest books you'll love. Our book recommendation app helps you find the perfect book based on your preferences.",
//     images:
//       "https://book-recommendation-jade.vercel.app/logo-base-1200x630.png",
//   },
// };

export const metadata: Metadata = {
  title: "Get Personalized Book Recommendations – Find Books You’ll Love",
  description:
    "Discover your next great read with personalized book recommendations. Answer a few questions and get tailored suggestions for books you’ll love!",
  openGraph: {
    title: "Get Personalized Book Recommendations – Find Books You’ll Love",
    description:
      "Answer a few quick questions, and we’ll suggest personalized book recommendations tailored to your taste.",
    url: "https://book-recommendation-jade.vercel.app/book-recommendations",
    images: [
      {
        url: "https://book-recommendation-jade.vercel.app/logo-base-1200x630.png",
        alt: "Book cover image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Personalized Book Recommendations – Find Books You’ll Love",
    description:
      "Discover your next favorite read by answering a few questions and receiving personalized book recommendations.",
    images: [
      {
        url: "https://book-recommendation-jade.vercel.app/logo-base-1200x630.png",
        alt: "Book cover image",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
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
