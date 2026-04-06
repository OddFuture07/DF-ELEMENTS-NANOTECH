import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
  display: "swap",
});

export const metadata = {
  title: "DF Elements Nanotech",
  description: "...",
  verification: {
    google: "eArPaj_0AwOcGYrt_RuqjhqX64k"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakartaSans.variable}>{children}</body>
    </html>
  );
}
