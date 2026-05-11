export type BrowseDimension = 'story' | 'figure' | 'geography' | 'theme' | 'timeline' | 'divergence';

export type BrowseNavItem = {
  key: BrowseDimension;
  label: string;
  href: string;
  description: string;
  plannedModes: string[];
};

export const atlasBrowseNav: BrowseNavItem[] = [
  {
    key: 'story',
    label: 'Story',
    href: '/atlas/story',
    description: 'Traverse canonical narratives and linked scene-level nodes.',
    plannedModes: ['Graph visualization', 'Triptych narrative comparison']
  },
  {
    key: 'figure',
    label: 'Figure',
    href: '/atlas/figure',
    description: 'Browse by person, lineage, and role across traditions.',
    plannedModes: ['Relationship graph', 'Prosopography layer']
  },
  {
    key: 'geography',
    label: 'Geography',
    href: '/atlas/geography',
    description: 'Anchor narratives to place and movement corridors.',
    plannedModes: ['Geographic mapping', 'Route overlays']
  },
  {
    key: 'theme',
    label: 'Theme',
    href: '/atlas/theme',
    description: 'Query theology, ethics, law, covenant, and motifs.',
    plannedModes: ['Scholarly layers', 'Thematic clustering']
  },
  {
    key: 'timeline',
    label: 'Timeline',
    href: '/atlas/timeline',
    description: 'Navigate chronology ranges, uncertainty windows, and period models.',
    plannedModes: ['Timeline mode', 'Competing chronology tracks']
  },
  {
    key: 'divergence',
    label: 'Divergence',
    href: '/atlas/divergence',
    description: 'Filter and inspect doctrinal, narrative, and legal divergence types.',
    plannedModes: ['Difference matrix', 'Scholarly commentary layers']
  }
];
