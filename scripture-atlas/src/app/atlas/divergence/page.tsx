import { BrowseSectionShell } from '@/components/navigation/BrowseSectionShell';

const sampleSlugs = ['overview', 'comparative-notes', 'open-questions'];

export default function DivergenceBrowsePage() {
  return (
    <BrowseSectionShell
      title="Divergence Browse"
      description="Archival browse scaffolding for divergence studies in Scripture Atlas."
      sampleSlugs={sampleSlugs}
      routePrefix="/atlas/divergence"
    />
  );
}
