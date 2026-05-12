import { BrowseSectionShell } from '@/components/navigation/BrowseSectionShell';

const sampleSlugs = ['overview', 'comparative-notes', 'open-questions'];

export default function TimelineBrowsePage() {
  return (
    <BrowseSectionShell
      title="Timeline Browse"
      description="Archival browse scaffolding for timeline studies in Scripture Atlas."
      sampleSlugs={sampleSlugs}
      routePrefix="/atlas/timeline"
    />
  );
}
