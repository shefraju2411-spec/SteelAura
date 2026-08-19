import { useOptionalOemLandingLanguage } from "../context/OemLandingLanguageContext";
import type { OemLang } from "../i18n/oemLanding";

const LANG_OPTIONS: OemLang[] = ["en", "de", "nl", "fr"];

export function LanguageSwitcher() {
  const context = useOptionalOemLandingLanguage();
  if (!context) return null;

  const { lang, setLang, t } = context;

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t.languageSwitcher.label}</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as OemLang)}
        className="appearance-none rounded-full border border-aura-line bg-white py-2 pl-3 pr-8 text-sm font-medium text-aura-black outline-none transition focus:border-aura-gold/50 focus:ring-2 focus:ring-aura-gold/15"
        aria-label={t.languageSwitcher.label}
      >
        {LANG_OPTIONS.map((code) => (
          <option key={code} value={code}>
            {t.languageSwitcher[code]}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-2.5 h-4 w-4 text-aura-stone"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
}
