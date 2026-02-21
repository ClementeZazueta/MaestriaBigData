import { Section } from '@/components/Section';
import { profileSummary } from '@/data/portfolioData';

export function AboutSection() {
  return (
    <Section
      id="acerca"
      title="Sobre mi proceso en la maestría"
      subtitle="Una visión breve de motivaciones, enfoque y propósito del portafolio."
    >
      <ul className="bullet-list">
        {profileSummary.map((paragraph) => (
          <li key={paragraph}>{paragraph}</li>
        ))}
      </ul>
    </Section>
  );
}
