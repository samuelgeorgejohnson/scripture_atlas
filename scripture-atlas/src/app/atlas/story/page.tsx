import { BrowseSectionShell } from '@/components/navigation/BrowseSectionShell';

const sampleSlugs = ['overview', 'comparative-notes', 'open-questions'];

export default function StoryBrowsePage() {
  return (
    <BrowseSectionShell
      title="Story Browse"
      description="Archival browse scaffolding for story studies in Scripture Atlas."
      sampleSlugs={sampleSlugs}
      routePrefix="/atlas/story"
    />
  );
}
