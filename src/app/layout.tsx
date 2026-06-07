import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono, Simonetta } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import CursorFollower from "@/components/CursorFollower";
import GradientSync from "@/components/GradientSync";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const simonetta = Simonetta({
  variable: "--font-simonetta",
  weight: ["400", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Baseer | Full Stack Developer",
  description:
    "Full Stack Developer building modern web apps, AI-powered tools, and digital experiences. Based in Karachi, PK.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
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
      className={`${plusJakartaSans.variable} ${spaceMono.variable} ${simonetta.variable}`}
      style={{ background: "#020205", colorScheme: "dark" }}
    >
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body style={{ background: "#020205" }}>
        <Providers>
          <GradientSync />
          <CursorFollower />
          {children}
        </Providers>
      </body>
    </html>
  );
}
