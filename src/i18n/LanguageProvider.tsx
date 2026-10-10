import { useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext, type LanguageContextValue } from "./context";
import {
  LANGUAGE_STORAGE_KEY,
  detectLanguage,
  translate,
  type Language,
} from "./languages";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Language selection still works when storage is unavailable.
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: (key) => translate(language, key) }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
