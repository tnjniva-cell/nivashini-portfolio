import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Nivashini A | Aspiring Software Developer";
const description =
  "Meet Nivashini A, a first-year B.Tech Computer Science student, aspiring software developer, and lifelong learner.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Nivashini A",
    "software developer",
    "computer science student",
    "portfolio",
  ],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
