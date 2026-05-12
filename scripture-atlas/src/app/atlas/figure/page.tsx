import { BrowseSectionShell } from '@/components/navigation/BrowseSectionShell';

const sampleSlugs = ['overview', 'comparative-notes', 'open-questions'];

export default function FigureBrowsePage() {
  return (
    <BrowseSectionShell
      title="Figure Browse"
      description="Archival browse scaffolding for figure studies in Scripture Atlas."
      sampleSlugs={sampleSlugs}
      routePrefix="/atlas/figure"
    />
  );
}
