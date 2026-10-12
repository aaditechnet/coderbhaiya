import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { detectLanguage, isLikelyIndiaLocale, translations, type LanguageCode } from "@/config/i18n";

const STORAGE_KEY = "coder-bhaiya-language";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  text: (typeof translations)[LanguageCode];
  greeting: string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const browserLocale = window.navigator.language || "en";
    let stored: string | null = null;
    try { stored = window.localStorage.getItem(STORAGE_KEY); } catch { /* Browser storage is optional. */ }
    setLocale(browserLocale);
    setLanguage(stored === "hi" || stored === "en" || stored === "hinglish" ? stored : detectLanguage(browserLocale));
  }, []);

  const changeLanguage = (next: LanguageCode) => {
    setLanguage(next);
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch { /* Keep the selector usable without storage. */ }
    document.documentElement.lang = next === "hi" ? "hi" : "en";
  };

  const value = useMemo(() => {
    const text = translations[language];
    return {
      language,
      setLanguage: changeLanguage,
      text,
      greeting: isLikelyIndiaLocale(locale) ? text.greetingIndia : text.greeting,
    };
  }, [language, locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
