import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../css/app.css";

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
    default: "Nihongo Flashcard",
    template: "%s | Nihongo Flashcard",
  },

  description:
    "Học tiếng Nhật hiệu quả bằng flashcard thông minh. Ghi nhớ từ vựng, Kanji, Hiragana và ngữ pháp N5-N1 nhanh hơn mỗi ngày.",

  keywords: [
    "Flashcard tiếng Nhật",
    "Học tiếng Nhật",
    "Japanese Flashcard",
    "Kanji",
    "Hiragana",
    "Katakana",
    "JLPT",
    "JLPT N5",
    "JLPT N4",
    "Anki",
    "Từ vựng tiếng Nhật",
  ],

  authors: [{ name: "Phuong Nguyen" }],

  creator: "Phuong Nguyen",

  metadataBase: new URL("https://flash-card-jet.vercel.app/"),

  icons: {
   icon: "/logo.png",
   shortcut: "/logo.png",
   apple: "/logo.png",
  },
  openGraph: {
    title: "Nihongo Flashcard",
    description:
      "Học tiếng Nhật hiệu quả bằng flashcard thông minh.",
    url: "https://flash-card-jet.vercel.app/",
    siteName: "Nihongo Flashcard",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Nihongo Flashcard",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nihongo Flashcard",
    description:
      "Học tiếng Nhật hiệu quả bằng flashcard thông minh.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#0f172a",
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
