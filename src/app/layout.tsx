import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Baseer | Full Stack Developer",
  description:
    "Full Stack Developer building modern web apps, AI-powered tools, and digital experiences. Based in Karachi, PK.",
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ background: "#000000", colorScheme: "dark" }}
    >
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body style={{ background: "#000000" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
