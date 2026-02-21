import { Section } from '@/components/Section';
import { milestones } from '@/data/portfolioData';

export function TimelineSection() {
  return (
    <Section id="trayectoria" title="Trayectoria" subtitle="Hitos clave durante el recorrido en la maestría.">
      <ol className="timeline">
        {milestones.map((milestone) => (
          <li key={milestone.title}>
            <p className="chip">{milestone.period}</p>
            <h3>{milestone.title}</h3>
            <p>{milestone.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
