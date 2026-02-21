import type { Course, Milestone } from '@/types/portfolio';

export const profileSummary = [
  'Actualmente curso una maestría enfocada en analítica avanzada y explotación de datos.',
  'Mi objetivo es construir soluciones con impacto real en negocio y en procesos de decisión.',
  'Este repositorio integra evidencias por materia para mostrar el progreso de forma organizada.',
];

export const courses: Course[] = [
  {
    name: 'Modelado Estadístico para Ciencia de Datos',
    semester: '1er semestre',
    focus: 'Inferencia estadística, regresión y validación de hipótesis.',
    evidencePath: '/actividades/modelado-estadistico',
  },
  {
    name: 'Machine Learning Aplicado',
    semester: '2do semestre',
    focus: 'Modelos supervisados, no supervisados y evaluación de desempeño.',
    evidencePath: '/actividades/machine-learning',
  },
  {
    name: 'Visualización y Storytelling con Datos',
    semester: '2do semestre',
    focus: 'Comunicación efectiva de hallazgos y diseño de dashboards.',
    evidencePath: '/actividades/visualizacion-datos',
  },
];

export const highlights = [
  {
    title: 'Análisis exploratorio reproducible',
    description: 'Documentación de notebooks y bitácoras técnicas por cada actividad relevante.',
  },
  {
    title: 'Enfoque profesional',
    description: 'Estructura del sitio pensada para presentación académica y futura evolución.',
  },
  {
    title: 'Arquitectura frontend escalable',
    description: 'Separación por features, datos y componentes reutilizables.',
  },
];

export const milestones: Milestone[] = [
  {
    period: 'Inicio de maestría',
    title: 'Definición de objetivos profesionales',
    description: 'Alineé mi plan académico con una meta clara: especializarme en analítica de negocio.',
  },
  {
    period: 'Primer año',
    title: 'Consolidación técnica',
    description: 'Fortalecí bases en estadística, programación y preparación de datos.',
  },
  {
    period: 'Actualidad',
    title: 'Portafolio de evidencias',
    description: 'Centralizo proyectos y reflexiones para comunicar mi crecimiento de forma integral.',
  },
];
