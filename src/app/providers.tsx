"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      autoRaf: true,
    });

    (window as unknown as Record<string, unknown>).__lenis__ = lenis;

    return () => {
      lenis.destroy();
      delete (window as unknown as Record<string, unknown>).__lenis__;
    };
  }, []);

  return <>{children}</>;
}
