import { Section } from "@/components/Section";
import type { Language, Subject, WorkItemKind } from "@/types/portfolio";

type CoursesSectionProps = {
  language: Language;
  subjects: Subject[];
};

const kindLabel = (kind: WorkItemKind, language: Language) => {
  const labels: Record<WorkItemKind, { es: string; en: string }> = {
    actividad: { es: "Actividad", en: "Assignment" },
    tarea: { es: "Tarea", en: "Task" },
    practica: { es: "Práctica", en: "Practice" },
    proyecto_grupal: { es: "Proyecto grupal", en: "Team project" },
    ejemplo: { es: "Ejemplo", en: "Example" },
  };

  return labels[kind][language];
};

export function CoursesSection({ language, subjects }: CoursesSectionProps) {
  const orderedSubjects = [...subjects].sort((a, b) => {
    if (a.quarter !== b.quarter) {
      return a.quarter.localeCompare(b.quarter);
    }

    return a.name.es.localeCompare(b.name.es);
  });

  return (
    <Section
      id="materias"
      title={language === "es" ? "Materias y evidencias de trabajo" : "Courses and work evidence"}
      subtitle={
        language === "es"
          ? "Detalle por materia con enfoque, actividades realizadas y tipo de entregables."
          : "Per-course detail with focus, completed activities, and deliverable types."
      }
    >
      <div className="subjects-grid">
        {orderedSubjects.map((subject) => (
          <article key={subject.id} className="subject-card">
            <header className="subject-card__header">
              <div className="subject-card__chips">
                <span className="chip chip--outline">{subject.quarter}</span>
                <span className="chip">{subject.semesterLabel[language]}</span>
              </div>
              <h3>{subject.name[language]}</h3>
              <p className="subject-card__focus">{subject.focus[language]}</p>
              <p>{subject.summary[language]}</p>
            </header>

            <div className="subject-card__work">
              {subject.workItems.map((item) => (
                <details key={item.id} className="work-item" open={subject.workItems.length <= 2}>
                  <summary>
                    <span>{item.title[language]}</span>
                    <span className="chip chip--small">{kindLabel(item.kind, language)}</span>
                  </summary>
                  <div className="work-item__body">
                    <p>{item.summary[language]}</p>
                    {item.notes ? <p className="work-item__notes">{item.notes[language]}</p> : null}

                    <div className="tag-group">
                      <p className="tag-group__title">{language === "es" ? "Herramientas" : "Tools"}</p>
                      <ul className="tag-list">
                        {item.tools.map((tool) => (
                          <li key={tool} className="tag">
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="tag-group">
                      <p className="tag-group__title">
                        {language === "es" ? "Entregables / evidencia" : "Deliverables / evidence"}
                      </p>
                      <ul className="tag-list">
                        {item.artifacts.map((artifact) => (
                          <li key={artifact} className="tag tag--soft">
                            {artifact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
