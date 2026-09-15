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
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, California, offering grounded therapy for adults navigating anxiety, trauma, stress, burnout, and perfectionism.",
  keywords: [
    "Dr. Maya Reynolds",
    "clinical psychologist Santa Monica",
    "therapy Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "burnout therapy Santa Monica",
    "perfectionism therapy",
    "adult therapy California",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${scriptFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}