import "../globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Urbanist } from "next/font/google";

// FONTS
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function DashboardLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable}`}
    >
      <body className="font-urbanist min-h-screen">{children}</body>
    </html>
  );
}
