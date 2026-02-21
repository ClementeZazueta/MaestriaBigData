import { Section } from '@/components/Section';
import { highlights } from '@/data/portfolioData';

export function HighlightsSection() {
  return (
    <Section id="logros" title="Aspectos destacados" subtitle="Elementos que dan valor a este portafolio.">
      <div className="grid-cards">
        {highlights.map((highlight) => (
          <article key={highlight.title} className="card card--accent">
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
