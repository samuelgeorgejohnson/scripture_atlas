export type BrowseDimensionKey =
  | 'story'
  | 'figure'
  | 'geography'
  | 'theme'
  | 'timeline'
  | 'divergence';

export type BrowseDimension = {
  key: BrowseDimensionKey;
  label: string;
  description: string;
  href: `/atlas/${BrowseDimensionKey}`;
};

export const browseDimensions: BrowseDimension[] = [
  {
    key: 'story',
    label: 'Story',
    description: 'Narrative arcs, episodes, and retellings across traditions.',
    href: '/atlas/story'
  },
  {
    key: 'figure',
    label: 'Figure',
    description: 'People, lineages, and attributed roles in sacred memory.',
    href: '/atlas/figure'
  },
  {
    key: 'geography',
    label: 'Geography',
    description: 'Regions, places, and movement through historical landscapes.',
    href: '/atlas/geography'
  },
  {
    key: 'theme',
    label: 'Theme',
    description: 'Recurring ideas and motifs for comparative study.',
    href: '/atlas/theme'
  },
  {
    key: 'timeline',
    label: 'Timeline',
    description: 'Chronological framing for events, receptions, and interpretation.',
    href: '/atlas/timeline'
  },
  {
    key: 'divergence',
    label: 'Divergence',
    description: 'Points where textual traditions materially diverge.',
    href: '/atlas/divergence'
  }
];
