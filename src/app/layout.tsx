import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono, Simonetta } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import CursorFollower from "@/components/CursorFollower";
import GradientSync from "@/components/GradientSync";
import Preloader from "@/components/Preloader";

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
          {/* Ambient background blobs — fixed globally */}
          <div className="blob blob-purple" style={{ top: "5%", left: "-10%", width: "600px", height: "600px" }} />
          <div className="blob blob-blue" style={{ top: "40%", right: "-10%", width: "500px", height: "500px" }} />
          <div className="blob blob-yellow" style={{ top: "75%", left: "5%", width: "450px", height: "450px" }} />
          <div className="blob blob-purple" style={{ top: "90%", right: "5%", width: "550px", height: "550px" }} />
          
          {/* Noise Texture Overlay */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 9999,
              opacity: 0.035,
              background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          <Preloader />
          <GradientSync />
          <CursorFollower />
          {children}
        </Providers>
      </body>
    </html>
  );
}
