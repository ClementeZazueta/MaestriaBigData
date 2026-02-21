import type { PropsWithChildren } from 'react';

import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="page-shell">
      <Hero />
      <main>
        <Section
          id="introduccion"
          title="Bienvenido"
          subtitle="Un espacio para documentar mi avance académico y profesional durante la maestría."
        >
          <p>
            Este portafolio busca consolidar aprendizajes, evidencias y reflexiones de cada materia para
            mostrar de forma clara mi crecimiento en ciencia de datos, analítica y toma de decisiones.
          </p>
        </Section>
        {children}
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} · Portafolio de Maestría</p>
      </footer>
    </div>
  );
}
