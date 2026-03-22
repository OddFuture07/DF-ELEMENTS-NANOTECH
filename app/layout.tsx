import "./globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
