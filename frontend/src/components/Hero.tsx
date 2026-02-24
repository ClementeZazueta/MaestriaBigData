import { LanguageToggle } from "@/components/LanguageToggle";
import type { HeroContent, Language } from "@/types/portfolio";

type HeroProps = {
  content: HeroContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function Hero({ content, language, onLanguageChange }: HeroProps) {
  return (
    <header className="hero">
      <div className="hero__content">
        <div className="hero__topbar">
          <p className="hero__eyebrow">{content.eyebrow[language]}</p>
          <LanguageToggle language={language} onChange={onLanguageChange} />
        </div>
        <h1>{content.title[language]}</h1>
        <p>{content.description[language]}</p>
        <nav className="hero__actions" aria-label="Primary navigation">
          <a href="#programa">{content.nav.programa[language]}</a>
          <a href="#cuartiles">{content.nav.cuartiles[language]}</a>
          <a href="#materias">{content.nav.materias[language]}</a>
          <a href="#evidencias">{content.nav.evidencias[language]}</a>
          <a href="#trayectoria">{content.nav.trayectoria[language]}</a>
        </nav>
      </div>
    </header>
  );
}
