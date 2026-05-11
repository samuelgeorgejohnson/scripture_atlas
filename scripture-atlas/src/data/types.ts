import { LensType } from '@/components/DifferenceTags';

/**
 * Stable identifiers for traditions currently supported by the atlas.
 *
 * Extensibility:
 * - Add new tradition keys as the comparative surface expands.
 * - Keep keys lowercase/snake_case for predictable JSON storage and indexing.
 */
export type TraditionKey = 'torah' | 'christian_bible' | 'quran';

/**
 * Shared primitive for relation-style references that can be promoted to edges
 * in a future graph model (e.g., Neo4j, RDF, or adjacency lists).
 */
export interface RelatedEntityReference {
  /**
   * Globally stable identifier for this entity.
   * Recommended pattern: `<entity_type>:<slug>`.
   */
  id: string;
  /** Human-friendly display label. */
  label: string;
  /** Optional confidence score for inferred/derived links. */
  confidence?: number;
}

/**
 * Canonical representation of a person/group appearing in a narrative node.
 */
export interface FigureReference extends RelatedEntityReference {
  /** Optional role in this specific narrative context (e.g., prophet, ruler). */
  role?: string;
  /** Tradition-scoped aliases for cross-text matching and search. */
  aliases?: Partial<Record<TraditionKey, string[]>>;
}

/**
 * Canonical representation of thematic concepts used for filtering/discovery.
 */
export interface ThemeReference extends RelatedEntityReference {
  /** Optional controlled vocabulary family (e.g., ethics, law, covenant). */
  taxonomy?: string;
  /** Optional normalized terms for multilingual or semantic search pipelines. */
  normalized_terms?: string[];
}

/**
 * Tag describing a specific difference lens and enrichment metadata.
 */
export interface DifferenceTag {
  /** Primary classification aligned with current UI lens filters. */
  lens: LensType;
  /** Optional severity/weight for sorting and ranking in the future. */
  weight?: number;
  /** Optional freeform taxonomy extension (e.g., chronology, doctrine). */
  category?: string;
}

/**
 * Notes attached to entry-level commentary.
 */
export interface CommentaryNote {
  title: string;
  detail: string;
}

/**
 * A single tradition's contribution to one aligned narrative beat.
 */
export interface TraditionEntry {
  /** Text references in a tradition-specific citation format. */
  references?: string[];
  /** Human-readable translation/edition descriptor. */
  translation?: string;
  /** Excerpt used for side-by-side reading in the triptych UI. */
  excerpt?: string;
  /** Optional editor notes for nuance or caveats. */
  notes?: CommentaryNote[];
  /** Optional lightweight index metadata for local JSON-first search. */
  index_terms?: string[];
}

/**
 * Row that aligns one narrative beat across traditions.
 *
 * Designed for future graph relationships:
 * - `row_id` can become a graph node id.
 * - `linked_rows` can become explicit edge references.
 */
export interface AlignmentRow {
  row_id?: string;
  beat: string;
  summary?: string;
  difference_tags?: DifferenceTag[];
  torah?: TraditionEntry;
  christian_bible?: TraditionEntry;
  quran?: TraditionEntry;
  linked_rows?: string[];
}

/**
 * Source-level citation metadata for provenance and auditing.
 */
export interface SourceCitation {
  tradition: TraditionKey;
  reference: string;
  note: string;
}

/**
 * Metadata block for provenance, versioning, and local indexing.
 */
export interface SourceMetadata {
  compiled_by: string;
  last_reviewed: string;
  citations: SourceCitation[];
  /** Optional schema/data version for migration-safe evolution. */
  data_version?: string;
  /** Optional keywords for local JSON index generation. */
  index_keywords?: string[];
}

export interface DifferenceNote {
  lens: LensType;
  description: string;
}

/**
 * Primary story node used by the sacred-text atlas.
 */
export interface StoryNode {
  slug: string;
  title: string;
  /** Backward-compatible primitive labels for current UI. */
  figures: string[];
  /** Backward-compatible primitive labels for current UI. */
  themes: string[];
  /** Forward-compatible relation objects for graph/search use-cases. */
  figure_references?: FigureReference[];
  /** Forward-compatible relation objects for graph/search use-cases. */
  theme_references?: ThemeReference[];
  alignment_rows: AlignmentRow[];
  similarities: string[];
  differences: DifferenceNote[];
  source_metadata: SourceMetadata;
  commentary_notes: string[];
}

/**
 * Mock objects demonstrating JSON-first local data shape and extensibility.
 */
export const mockFigureReference: FigureReference = {
  id: 'figure:noah',
  label: 'Noah',
  role: 'Patriarch',
  aliases: {
    torah: ['Noach'],
    christian_bible: ['Noah'],
    quran: ['Nuh'],
  },
};

export const mockThemeReference: ThemeReference = {
  id: 'theme:divine-judgment',
  label: 'Divine Judgment',
  taxonomy: 'ethics',
  normalized_terms: ['judgment', 'mercy', 'flood'],
};

export const mockStoryNode: StoryNode = {
  slug: 'flood-narrative',
  title: 'Flood Narrative',
  figures: ['Noah', 'Family'],
  themes: ['Covenant', 'Judgment', 'Mercy'],
  figure_references: [mockFigureReference],
  theme_references: [mockThemeReference],
  alignment_rows: [
    {
      row_id: 'row:flood-001',
      beat: 'Divine warning is given',
      summary: 'A righteous figure receives notice of an impending flood.',
      difference_tags: [{ lens: 'theological', weight: 0.8, category: 'revelation' }],
      torah: {
        references: ['Genesis 6:13-22'],
        excerpt: 'God commands Noah to build an ark.',
        index_terms: ['ark', 'command', 'warning'],
      },
      christian_bible: {
        references: ['Genesis 6:13-22'],
        excerpt: 'Noah is instructed regarding the ark and covenant.',
      },
      quran: {
        references: ['Quran 11:36-37'],
        excerpt: 'Nuh is instructed to build the ship under divine guidance.',
      },
      linked_rows: ['row:flood-002'],
    },
  ],
  similarities: ['All traditions include divine warning and preserved survivors.'],
  differences: [
    {
      lens: 'theological',
      description: 'The mode and framing of revelation differs across traditions.',
    },
  ],
  source_metadata: {
    compiled_by: 'SpiritOS Editorial Team',
    last_reviewed: '2026-05-11',
    data_version: '1.0.0',
    index_keywords: ['flood', 'noah', 'nuh', 'covenant'],
    citations: [
      {
        tradition: 'torah',
        reference: 'Genesis 6:13-22',
        note: 'Base narrative of warning and ark construction.',
      },
    ],
  },
  commentary_notes: ['Use verse-level offsets in future editions for deep linking.'],
};
