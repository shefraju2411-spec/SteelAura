import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { getOemLandingTranslations, type OemLang, type OemLandingTranslations } from "../i18n/oemLanding";

const STORAGE_KEY = "steelaura-oem-lp-lang";

type OemLandingLanguageContextValue = {
  lang: OemLang;
  setLang: (lang: OemLang) => void;
  t: OemLandingTranslations;
};

const OemLandingLanguageContext = createContext<OemLandingLanguageContextValue | null>(null);

function isOemLang(value: string | null): value is OemLang {
  return value === "en" || value === "de" || value === "nl" || value === "fr";
}

function detectInitialLang(searchLang: string | null): OemLang {
  if (isOemLang(searchLang)) return searchLang;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (isOemLang(stored)) return stored;

  const browser = navigator.language.slice(0, 2).toLowerCase();
  if (browser === "de") return "de";
  if (browser === "nl") return "nl";
  if (browser === "fr") return "fr";

  return "en";
}

export function OemLandingLanguageProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lang, setLangState] = useState<OemLang>(() => detectInitialLang(searchParams.get("lang")));

  const setLang = useCallback(
    (next: OemLang) => {
      setLangState(next);
      localStorage.setItem(STORAGE_KEY, next);

      const params = new URLSearchParams(searchParams);
      if (next === "en") {
        params.delete("lang");
      } else {
        params.set("lang", next);
      }
      setSearchParams(params, { replace: true });
    },
    [searchParams, setSearchParams],
  );

  useEffect(() => {
    const paramLang = searchParams.get("lang");
    if (isOemLang(paramLang) && paramLang !== lang) {
      setLangState(paramLang);
      localStorage.setItem(STORAGE_KEY, paramLang);
    }
  }, [lang, searchParams]);

  const t = useMemo(() => getOemLandingTranslations(lang), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <OemLandingLanguageContext.Provider value={value}>{children}</OemLandingLanguageContext.Provider>
  );
}

export function useOemLandingLanguage() {
  const context = useContext(OemLandingLanguageContext);
  if (!context) {
    throw new Error("useOemLandingLanguage must be used within OemLandingLanguageProvider");
  }
  return context;
}

export function useOptionalOemLandingLanguage() {
  return useContext(OemLandingLanguageContext);
}
