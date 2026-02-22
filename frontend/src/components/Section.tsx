import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string;
}>;

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <header className="section__header">
        <div className="section__panelbar" aria-hidden="true">
          <div className="section__paneldots">
            <span />
            <span />
            <span />
          </div>
          <div className="section__panelid">{id}</div>
        </div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </header>
      <div className="section__body">{children}</div>
    </section>
  );
}
