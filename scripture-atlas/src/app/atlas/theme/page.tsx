import { BrowseSectionShell } from '@/components/navigation/BrowseSectionShell';

const sampleSlugs = ['overview', 'comparative-notes', 'open-questions'];

export default function ThemeBrowsePage() {
  return (
    <BrowseSectionShell
      title="Theme Browse"
      description="Archival browse scaffolding for theme studies in Scripture Atlas."
      sampleSlugs={sampleSlugs}
      routePrefix="/atlas/theme"
    />
  );
}
