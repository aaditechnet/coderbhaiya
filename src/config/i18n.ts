export const supportedLanguages = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "hi", label: "हिन्दी", shortLabel: "हि" },
  { code: "hinglish", label: "Hinglish", shortLabel: "HI/EN" },
] as const;

export type LanguageCode = (typeof supportedLanguages)[number]["code"];

const baseTranslations = {
  en: {
    greeting: "Hello brother! Welcome to Coder Bhaiya.",
    greetingIndia: "Hello beta! Welcome to Coder Bhaiya.",
    home: "Home",
    learn: "Learn",
    languages: "Programming Languages",
    dsa: "DSA",
    visual: "Visual Learning",
    lab: "Coding Lab",
    about: "About",
    dashboard: "Dashboard",
    signIn: "Sign In",
    signUp: "Sign Up",
    start: "Start Learning",
    explore: "Explore Courses",
    beginner: "Beginner friendly",
    open: "Explore this path",
  },
  hi: {
    greeting: "Namaste dost! Coder Bhaiya mein aapka swagat hai.",
    greetingIndia: "Hello beta! Coder Bhaiya mein aapka swagat hai.",
    home: "होम",
    learn: "सीखें",
    languages: "प्रोग्रामिंग भाषाएँ",
    dsa: "DSA",
    visual: "विज़ुअल लर्निंग",
    lab: "कोडिंग लैब",
    about: "हमारे बारे में",
    dashboard: "डैशबोर्ड",
    signIn: "साइन इन",
    signUp: "साइन अप",
    start: "सीखना शुरू करें",
    explore: "कोर्स देखें",
    beginner: "शुरुआत के लिए",
    open: "यह पथ देखें",
  },
} as const;

export const translations = {
  ...baseTranslations,
  hinglish: { ...baseTranslations.en, greeting: "Namaste beta! Coder Bhaiya mein aapka swagat hai.", greetingIndia: "Hello beta! Coder Bhaiya mein aapka swagat hai.", start: "Get Started", open: "Yeh path dekho" },
} as const;

export function detectLanguage(locale?: string): LanguageCode {
  return locale?.toLowerCase().startsWith("hi") ? "hi" : "en";
}

export function isLikelyIndiaLocale(locale?: string) {
  const normalized = locale?.toLowerCase() ?? "";
  return normalized === "en-in" || normalized.startsWith("hi") || /-(in)$/.test(normalized);
}
