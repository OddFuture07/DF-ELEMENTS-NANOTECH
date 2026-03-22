import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DF Elements Nanotech",
  description:
    "DF Elements Nanotech develops advanced deuterium-enabled materials for next-generation OLED and optoelectronic applications."
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
