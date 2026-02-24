import { Section } from "@/components/Section";
import type { Language, TimelineMilestone } from "@/types/portfolio";

type TimelineSectionProps = {
  language: Language;
  milestones: TimelineMilestone[];
};

export function TimelineSection({ language, milestones }: TimelineSectionProps) {
  return (
    <Section
      id="trayectoria"
      title={language === "es" ? "Trayectoria de aprendizaje" : "Learning journey"}
      subtitle={
        language === "es"
          ? "Hitos que muestran la progresión técnica y académica a lo largo de la maestría."
          : "Milestones showing technical and academic progression throughout the master's program."
      }
    >
      <ol className="timeline">
        {milestones.map((milestone) => (
          <li key={milestone.title.es}>
            <p className="chip">{milestone.period[language]}</p>
            <h3>{milestone.title[language]}</h3>
            <p>{milestone.description[language]}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
