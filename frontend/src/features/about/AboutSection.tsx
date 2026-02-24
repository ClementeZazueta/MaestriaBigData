import { Section } from "@/components/Section";
import type { Language, ProgramOverview, Subject } from "@/types/portfolio";

type AboutSectionProps = {
  language: Language;
  content: ProgramOverview;
  subjects: Subject[];
};

export function AboutSection({ language, content, subjects }: AboutSectionProps) {
  const quarterCount = new Set(subjects.map((subject) => subject.quarter)).size;
  const workItemCount = subjects.reduce((acc, subject) => acc + subject.workItems.length, 0);
  const artifactKinds = new Set(
    subjects.flatMap((subject) => subject.workItems.flatMap((item) => item.artifacts)),
  ).size;

  const metrics = [
    {
      label: language === "es" ? "Materias resumidas" : "Courses summarized",
      value: String(subjects.length),
    },
    {
      label: language === "es" ? "Cuartiles cubiertos" : "Quarters covered",
      value: String(quarterCount),
    },
    {
      label: language === "es" ? "Evidencias descritas" : "Evidence entries",
      value: String(workItemCount),
    },
    {
      label: language === "es" ? "Tipos de entregable" : "Deliverable types",
      value: String(artifactKinds),
    },
  ];

  return (
    <Section id="programa" title={content.title[language]} subtitle={content.subtitle[language]}>
      <div className="program-overview">
        <div className="metric-grid">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <p className="metric-card__value">{metric.value}</p>
              <p className="metric-card__label">{metric.label}</p>
            </article>
          ))}
        </div>

        <div className="two-column">
          <div className="panel">
            <h3>{language === "es" ? "Resumen general" : "Overview"}</h3>
            <ul className="bullet-list">
              {content.summary.map((paragraph) => (
                <li key={paragraph.es}>{paragraph[language]}</li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <h3>{content.methodologyTitle[language]}</h3>
            <ul className="bullet-list">
              {content.methodologyPoints.map((point) => (
                <li key={point.es}>{point[language]}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
