import { LensType } from '@/components/DifferenceTags';

export type TraditionKey = 'torah' | 'christian_bible' | 'quran';

/**
 * High-level entity categories that can participate in graph relationships.
 */
export type GraphEntityType = 'story_node' | 'figure' | 'theme' | 'location' | 'concept';

/**
 * Stable relationship kinds for typed many-to-many graph links.
 * Additional values can be introduced as SpiritOS semantics expand.
 */
export type RelationshipType =
  | 'has_figure'
  | 'has_theme'
  | 'located_in'
  | 'related_concept'
  | 'parent_of'
  | 'sibling_of'
  | 'associated_with'
  | 'symbolizes'
  | 'fulfills';

/**
 * A graph node reference that can be reused across edges and indexes.
 */
export interface GraphEntityReference {
  /** Globally stable identifier. Pattern: `<entity_type>:<slug>`. */
  id: string;
  /** Node category used for indexing and filtering. */
  entity_type: GraphEntityType;
  /** Human-readable display label. */
  label: string;
}

/**
 * Directed typed edge supporting many-to-many cross-entity relations.
 */
export interface RelationshipEdge {
  /** Stable id for dedupe and future visualization mapping. */
  edge_id: string;
  /** Source graph node id. */
  from: string;
  /** Destination graph node id. */
  to: string;
  /** Semantically meaningful relation category. */
  type: RelationshipType;
  /** Optional weighting for ranking/pathfinding/relevance scoring. */
  weight?: number;
  /** Optional confidence score for inferred/derived links. */
  confidence?: number;
  /** Optional provenance hints for future auditing. */
  source_refs?: string[];
  /** Optional arbitrary metadata for extensibility. */
  metadata?: Record<string, string | number | boolean>;
}

/**
 * Shared primitive for relation-style references that can be promoted to edges
 * in a future graph model (e.g., Neo4j, RDF, or adjacency lists).
 */
export interface RelatedEntityReference {
  id: string;
  label: string;
  confidence?: number;
}

export interface FigureReference extends RelatedEntityReference {
  role?: string;
  aliases?: Partial<Record<TraditionKey, string[]>>;
}

export interface ThemeReference extends RelatedEntityReference {
  taxonomy?: string;
  normalized_terms?: string[];
}

export interface DifferenceTag {
  lens: LensType;
  weight?: number;
  category?: string;
}

export interface CommentaryNote {
  title: string;
  detail: string;
}

export interface TraditionEntry {
  references?: string[];
  translation?: string;
  excerpt?: string;
  notes?: CommentaryNote[];
  index_terms?: string[];
}

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

export interface SourceCitation {
  tradition: TraditionKey;
  reference: string;
  note: string;
}

export interface SourceMetadata {
  compiled_by: string;
  last_reviewed: string;
  citations: SourceCitation[];
  data_version?: string;
  index_keywords?: string[];
}

export interface DifferenceNote {
  lens: LensType;
  description: string;
}

export interface StoryNode {
  slug: string;
  title: string;
  figures: string[];
  themes: string[];
  figure_references?: FigureReference[];
  theme_references?: ThemeReference[];
  /** Optional local graph node declarations for lightweight JSON-first operation. */
  graph_entities?: GraphEntityReference[];
  /** Optional relationship list enabling many-to-many typed links. */
  relationships?: RelationshipEdge[];
  alignment_rows: AlignmentRow[];
  similarities: string[];
  differences: DifferenceNote[];
  source_metadata: SourceMetadata;
  commentary_notes: string[];
}
