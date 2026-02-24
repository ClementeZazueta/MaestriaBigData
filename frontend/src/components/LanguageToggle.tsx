import type { Language } from "@/types/portfolio";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div className="language-toggle" role="group" aria-label="Language selector">
      <button
        type="button"
        className={language === "es" ? "language-toggle__button is-active" : "language-toggle__button"}
        onClick={() => onChange("es")}
        aria-pressed={language === "es"}
      >
        ES
      </button>
      <button
        type="button"
        className={language === "en" ? "language-toggle__button is-active" : "language-toggle__button"}
        onClick={() => onChange("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
