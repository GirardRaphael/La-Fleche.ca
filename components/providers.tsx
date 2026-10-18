"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion="user"><LanguageProvider>{children}</LanguageProvider></MotionConfig>
    </ThemeProvider>
  );
}
