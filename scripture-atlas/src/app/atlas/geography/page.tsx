import { BrowseSectionShell } from '@/components/navigation/BrowseSectionShell';

const sampleSlugs = ['overview', 'comparative-notes', 'open-questions'];

export default function GeographyBrowsePage() {
  return (
    <BrowseSectionShell
      title="Geography Browse"
      description="Archival browse scaffolding for geography studies in Scripture Atlas."
      sampleSlugs={sampleSlugs}
      routePrefix="/atlas/geography"
    />
  );
}
