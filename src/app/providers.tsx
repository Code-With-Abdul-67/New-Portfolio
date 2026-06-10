"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,          // smooth factor — lower = slower/smoother
      smoothWheel: true,
      wheelMultiplier: 0.9,
      autoRaf: true,       // Lenis manages its own RAF loop — no manual raf needed
    });

    // Expose lenis on window so IntersectionObserver-based sticky works
    // by keeping native scrollY in sync
    (window as unknown as Record<string, unknown>).__lenis__ = lenis;

    return () => {
      lenis.destroy();
      delete (window as unknown as Record<string, unknown>).__lenis__;
    };
  }, []);

  return <>{children}</>;
}
