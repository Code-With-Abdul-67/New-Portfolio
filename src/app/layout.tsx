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
  title: "Abdul Baseer | Front End Developer",
  description: "Front End Developer, UI Designer & Wifi Pentester — building digital experiences with passion and precision.",
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      style={{ background: "#0a0010", colorScheme: "dark" }}
    >
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-screen bg-animated antialiased" style={{ background: "#0a0010" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
