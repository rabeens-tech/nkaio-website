import type { TranslationKey } from "./dictionaries/en";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";
import { pt } from "./dictionaries/pt";

export type { TranslationKey } from "./dictionaries/en";

export const LANGUAGES = ["pt", "en", "fr"] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "pt";

export const LANGUAGE_LABELS: Record<Language, string> = {
  pt: "PT",
  en: "EN",
  fr: "FR",
};

export const DICTIONARIES: Record<Language, Record<TranslationKey, string>> = { en, fr, pt };

export const LANGUAGE_STORAGE_KEY = "nkaio_language";

export function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && (LANGUAGES as readonly string[]).includes(value);
}

export function translate(language: Language, key: TranslationKey): string {
  return DICTIONARIES[language][key] ?? DICTIONARIES[DEFAULT_LANGUAGE][key] ?? key;
}

export function detectLanguage(): Language {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    // storage unavailable, fall back to the default language
  }

  return DEFAULT_LANGUAGE;
}
