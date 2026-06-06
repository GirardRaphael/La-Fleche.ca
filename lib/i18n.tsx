"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Dictionary } from "@/data/translations";

export type Lang = "fr" | "en";

/** A value that exists in both languages. */
export type Localized<T = string> = { fr: T; en: T };

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Translation dictionary for the active language. */
  t: Dictionary;
  /** Pick the active-language value from a localized object. */
  pick: <T>(value: Localized<T>) => T;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lafleche-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // French is the default language.
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "fr" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggle: () => setLang(lang === "fr" ? "en" : "fr"),
    t: dictionary[lang],
    pick: (value) => value[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
