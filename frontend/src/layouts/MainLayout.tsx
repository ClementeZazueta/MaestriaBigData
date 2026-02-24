import type { PropsWithChildren } from "react";

import { Hero } from "@/components/Hero";
import type { HeroContent, Language, LocalizedText } from "@/types/portfolio";

type MainLayoutProps = PropsWithChildren<{
  hero: HeroContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
  footerNote: LocalizedText;
}>;

export function MainLayout({
  children,
  hero,
  language,
  onLanguageChange,
  footerNote,
}: MainLayoutProps) {
  return (
    <div className="page-shell">
      <Hero content={hero} language={language} onLanguageChange={onLanguageChange} />
      <main>{children}</main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} · {footerNote[language]}
        </p>
      </footer>
    </div>
  );
}
