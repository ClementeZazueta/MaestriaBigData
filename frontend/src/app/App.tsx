import { MainLayout } from '@/layouts/MainLayout';
import { AboutSection } from '@/features/about/AboutSection';
import { CoursesSection } from '@/features/courses/CoursesSection';
import { HighlightsSection } from '@/features/highlights/HighlightsSection';
import { TimelineSection } from '@/features/timeline/TimelineSection';

export function App() {
  return (
    <MainLayout>
      <HighlightsSection />
      <AboutSection />
      <CoursesSection />
      <TimelineSection />
    </MainLayout>
  );
}
