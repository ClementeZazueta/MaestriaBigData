import { Section } from "@/components/Section";
import type { Highlight, Language } from "@/types/portfolio";

type HighlightsSectionProps = {
  language: Language;
  highlights: Highlight[];
};

export function HighlightsSection({ language, highlights }: HighlightsSectionProps) {
  return (
    <Section
      id="evidencias"
      title={language === "es" ? "Lectura del portafolio" : "How to read this portfolio"}
      subtitle={
        language === "es"
          ? "Aspectos clave que resumen el valor del contenido mostrado."
          : "Key signals that summarize the value of the content displayed."
      }
    >
      <div className="grid-cards">
        {highlights.map((highlight) => (
          <article key={highlight.title.es} className="card card--accent">
            <h3>{highlight.title[language]}</h3>
            <p>{highlight.description[language]}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
