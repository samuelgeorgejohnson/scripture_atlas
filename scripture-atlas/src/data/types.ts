import { LensType } from '@/components/DifferenceTags';

export type TraditionKey = 'torah' | 'christian_bible' | 'quran';

export type TraditionEntry = {
  references?: string[];
  translation?: string;
  excerpt?: string;
  notes?: CommentaryNote[];
};

export type DifferenceNote = {
  lens: LensType;
  description: string;
};

export type CommentaryNote = {
  title: string;
  detail: string;
};

export type AlignmentRow = {
  beat: string;
  summary?: string;
  difference_tags?: LensType[];
  torah?: TraditionEntry;
  christian_bible?: TraditionEntry;
  quran?: TraditionEntry;
};

export type SourceCitation = {
  tradition: string;
  reference: string;
  note: string;
};

export type StoryNode = {
  slug: string;
  title: string;
  figures: string[];
  themes: string[];
  alignment_rows: AlignmentRow[];
  similarities: string[];
  differences: DifferenceNote[];
  source_metadata: {
    compiled_by: string;
    last_reviewed: string;
    citations: SourceCitation[];
  };
  commentary_notes: string[];
};
