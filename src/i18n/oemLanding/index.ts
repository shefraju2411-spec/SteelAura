import { de } from "./de";
import { en } from "./en";
import { fr } from "./fr";
import { nl } from "./nl";
import type { OemLang, OemLandingTranslations } from "./types";

export type { LookingForOption, OemLang, OemLandingTranslations } from "./types";

const translations: Record<OemLang, OemLandingTranslations> = {
  en,
  de,
  nl,
  fr,
};

export function getOemLandingTranslations(lang: OemLang): OemLandingTranslations {
  return translations[lang] ?? translations.en;
}
