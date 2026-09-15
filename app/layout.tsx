import type { Metadata } from "next";
import { Cormorant_Garamond, Allura } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const scriptFont = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Conejo Valley Family Counseling",
  description:
    "Online and in-person counseling for adults, couples, teens, and children.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${scriptFont.variable}`}>
        {children}
      </body>
    </html>
  );
}