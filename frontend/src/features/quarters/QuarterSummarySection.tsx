import { Section } from "@/components/Section";
import type { Language, QuarterOverview, Subject } from "@/types/portfolio";

type QuarterSummarySectionProps = {
  language: Language;
  quarterOverviews: QuarterOverview[];
  subjects: Subject[];
};

export function QuarterSummarySection({
  language,
  quarterOverviews,
  subjects,
}: QuarterSummarySectionProps) {
  return (
    <Section
      id="cuartiles"
      title={language === "es" ? "Progreso por cuartil" : "Progress by quarter"}
      subtitle={
        language === "es"
          ? "Agrupación del recorrido por etapa académica y líneas de trabajo predominantes."
          : "Journey grouped by academic stage and dominant lines of work."
      }
    >
      <div className="quarter-grid">
        {quarterOverviews.map((overview) => {
          const quarterSubjects = subjects.filter((subject) => subject.quarter === overview.quarter);

          return (
            <article key={overview.quarter} className="quarter-card">
              <div className="quarter-card__heading">
                <p className="chip chip--outline">{overview.quarter}</p>
                <p className="quarter-card__meta">
                  {quarterSubjects.length}{" "}
                  {language === "es"
                    ? quarterSubjects.length === 1
                      ? "materia"
                      : "materias"
                    : quarterSubjects.length === 1
                      ? "course"
                      : "courses"}
                </p>
              </div>
              <h3>{overview.title[language]}</h3>
              <p>{overview.summary[language]}</p>
              <ul className="bullet-list">
                {overview.themes.map((theme) => (
                  <li key={theme.es}>{theme[language]}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
