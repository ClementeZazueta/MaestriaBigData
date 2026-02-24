export type Language = "es" | "en";

export type LocalizedText = {
  es: string;
  en: string;
};

export type WorkItemKind = "actividad" | "tarea" | "practica" | "proyecto_grupal" | "ejemplo";

export type HeroContent = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  nav: {
    programa: LocalizedText;
    cuartiles: LocalizedText;
    materias: LocalizedText;
    evidencias: LocalizedText;
    trayectoria: LocalizedText;
  };
};

export type ProgramOverview = {
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText[];
  methodologyTitle: LocalizedText;
  methodologyPoints: LocalizedText[];
};

export type QuarterOverview = {
  quarter: "Q1" | "Q2" | "Q3" | "Q4";
  title: LocalizedText;
  summary: LocalizedText;
  themes: LocalizedText[];
};

export type SubjectWorkItem = {
  id: string;
  title: LocalizedText;
  kind: WorkItemKind;
  summary: LocalizedText;
  tools: string[];
  artifacts: string[];
  notes?: LocalizedText;
};

export type Subject = {
  id: string;
  name: LocalizedText;
  quarter: "Q1" | "Q2" | "Q3" | "Q4";
  semesterLabel: LocalizedText;
  focus: LocalizedText;
  summary: LocalizedText;
  workItems: SubjectWorkItem[];
};

export type Highlight = {
  title: LocalizedText;
  description: LocalizedText;
};

export type TimelineMilestone = {
  period: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
};

export type PortfolioContent = {
  hero: HeroContent;
  programOverview: ProgramOverview;
  quarterOverviews: QuarterOverview[];
  subjects: Subject[];
  highlights: Highlight[];
  milestones: TimelineMilestone[];
  footerNote: LocalizedText;
};
