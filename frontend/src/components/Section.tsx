import type { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string;
}>;

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <header className="section__header">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </header>
      <div className="section__body">{children}</div>
    </section>
  );
}
