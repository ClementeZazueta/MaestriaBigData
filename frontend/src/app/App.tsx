import { useState } from "react";

import { AboutSection } from "@/features/about/AboutSection";
import { CoursesSection } from "@/features/courses/CoursesSection";
import { HighlightsSection } from "@/features/highlights/HighlightsSection";
import { QuarterSummarySection } from "@/features/quarters/QuarterSummarySection";
import { TimelineSection } from "@/features/timeline/TimelineSection";
import { portfolioContent } from "@/data/portfolioData";
import { MainLayout } from "@/layouts/MainLayout";
import type { Language } from "@/types/portfolio";

export function App() {
  const [language, setLanguage] = useState<Language>("es");

  return (
    <MainLayout
      hero={portfolioContent.hero}
      language={language}
      onLanguageChange={setLanguage}
      footerNote={portfolioContent.footerNote}
    >
      <AboutSection
        language={language}
        content={portfolioContent.programOverview}
        subjects={portfolioContent.subjects}
      />
      <QuarterSummarySection
        language={language}
        quarterOverviews={portfolioContent.quarterOverviews}
        subjects={portfolioContent.subjects}
      />
      <CoursesSection language={language} subjects={portfolioContent.subjects} />
      <HighlightsSection language={language} highlights={portfolioContent.highlights} />
      <TimelineSection language={language} milestones={portfolioContent.milestones} />
    </MainLayout>
  );
}
