"use client";

import { useEffect } from "react";

export default function GradientSync() {
  useEffect(() => {
    const delay = -(performance.now() / 1000) % 6;
    document.documentElement.style.setProperty(
      "--gradient-sync-delay",
      `${delay}s`
    );
  }, []);

  return null;
}
