import { Section } from '@/components/Section';
import { courses } from '@/data/portfolioData';

export function CoursesSection() {
  return (
    <Section id="materias" title="Materias cursadas" subtitle="Resumen de materias y evidencia asociada.">
      <div className="grid-cards">
        {courses.map((course) => (
          <article key={course.name} className="card">
            <p className="chip">{course.semester}</p>
            <h3>{course.name}</h3>
            <p>{course.focus}</p>
            <a href={course.evidencePath}>Ver evidencias</a>
          </article>
        ))}
      </div>
    </Section>
  );
}
