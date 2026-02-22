import { Section } from "@/components/Section";
import type { Language, QuarterOverview, Subject, WorkItemKind } from "@/types/portfolio";

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
  const kindOrder: WorkItemKind[] = ["actividad", "tarea", "practica", "proyecto_grupal", "ejemplo"];

  const kindLabel = (kind: WorkItemKind) => {
    const labels: Record<WorkItemKind, { es: string; en: string }> = {
      actividad: { es: "Actividades", en: "Assignments" },
      tarea: { es: "Tareas", en: "Tasks" },
      practica: { es: "Practicas", en: "Practice" },
      proyecto_grupal: { es: "Grupales", en: "Team" },
      ejemplo: { es: "Ejemplos", en: "Examples" },
    };

    return labels[kind][language];
  };

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
          const quarterWorkItems = quarterSubjects.flatMap((subject) => subject.workItems);
          const teamProjects = quarterWorkItems.filter((item) => item.kind === "proyecto_grupal").length;
          const notebooks = quarterWorkItems.filter((item) =>
            item.artifacts.some((artifact) => artifact.toLowerCase().includes("notebook") || artifact.toLowerCase().includes("ipynb")),
          ).length;
          const totalTools = new Set(quarterWorkItems.flatMap((item) => item.tools)).size;
          const kindCounts = kindOrder.map((kind) => ({
            kind,
            count: quarterWorkItems.filter((item) => item.kind === kind).length,
          })).filter((entry) => entry.count > 0);
          const maxKindCount = Math.max(1, ...kindCounts.map((entry) => entry.count));

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

              <div className="quarter-kpis" aria-label={language === "es" ? "Indicadores del cuartil" : "Quarter indicators"}>
                <div className="quarter-kpi">
                  <span className="quarter-kpi__label">{language === "es" ? "Materias" : "Courses"}</span>
                  <strong className="quarter-kpi__value">{quarterSubjects.length}</strong>
                </div>
                <div className="quarter-kpi">
                  <span className="quarter-kpi__label">{language === "es" ? "Evidencias" : "Evidence"}</span>
                  <strong className="quarter-kpi__value">{quarterWorkItems.length}</strong>
                </div>
                <div className="quarter-kpi">
                  <span className="quarter-kpi__label">{language === "es" ? "Grupales" : "Team work"}</span>
                  <strong className="quarter-kpi__value">{teamProjects}</strong>
                </div>
                <div className="quarter-kpi">
                  <span className="quarter-kpi__label">{language === "es" ? "Notebooks" : "Notebooks"}</span>
                  <strong className="quarter-kpi__value">{notebooks}</strong>
                </div>
                <div className="quarter-kpi">
                  <span className="quarter-kpi__label">{language === "es" ? "Herramientas" : "Tools"}</span>
                  <strong className="quarter-kpi__value">{totalTools}</strong>
                </div>
              </div>

              <div className="quarter-bars" aria-label={language === "es" ? "Distribucion por tipo de evidencia" : "Evidence type distribution"}>
                {kindCounts.map((entry) => (
                  <div key={entry.kind} className="quarter-bar">
                    <div className="quarter-bar__row">
                      <span className="quarter-bar__label">{kindLabel(entry.kind)}</span>
                      <span className="quarter-bar__value">{entry.count}</span>
                    </div>
                    <div className="quarter-bar__track" aria-hidden="true">
                      <div
                        className="quarter-bar__fill"
                        style={{ width: `${Math.max(14, (entry.count / maxKindCount) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

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
