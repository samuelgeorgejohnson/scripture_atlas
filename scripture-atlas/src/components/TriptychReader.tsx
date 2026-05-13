'use client';

import { useMemo, useState } from 'react';
import { scriptureSamples, TraditionKey } from '@/data/scriptureSamples';
import { AlignmentRow } from '@/data/types';

const traditionMeta: Record<TraditionKey, { label: string; accentClass: string }> = {
  bible: { label: 'Bible', accentClass: 'accent-bible' },
  torah: { label: 'Torah', accentClass: 'accent-torah' },
  quran: { label: 'Quran', accentClass: 'accent-quran' }
};

function PassageColumn({ tradition }: { tradition: TraditionKey }) {
  const books = scriptureSamples[tradition];
  const [bookIdx, setBookIdx] = useState(0);
  const [chapterIdx, setChapterIdx] = useState(0);

  const selectedBook = books[bookIdx];
  const selectedChapter = selectedBook.chapters[chapterIdx];

  return (
    <article className={`reader-column card ${traditionMeta[tradition].accentClass}`}>
      <h2>{traditionMeta[tradition].label}</h2>
      <div className="reader-controls">
        <label>
          Book
          <select value={bookIdx} onChange={(e) => { setBookIdx(Number(e.target.value)); setChapterIdx(0); }}>
            {books.map((book, idx) => <option value={idx} key={book.book}>{book.book}</option>)}
          </select>
        </label>
        <label>
          Chapter
          <select value={chapterIdx} onChange={(e) => setChapterIdx(Number(e.target.value))}>
            {selectedBook.chapters.map((chapter, idx) => (
              <option value={idx} key={`${selectedBook.book}-${chapter.chapter}`}>{chapter.chapter}: {chapter.title}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <p className="small" style={{ marginBottom: 0 }}>Passage</p>
        <h3>{selectedBook.book} {selectedChapter.chapter}</h3>
        {selectedChapter.verses.map((verse) => (
          <p key={verse}>{verse}</p>
        ))}
      </div>
    </article>
  );
}

export function TriptychReader({ alignmentRows: _alignmentRows }: { alignmentRows?: AlignmentRow[] } = {}) {
  const tabOrder = useMemo(() => (['bible', 'torah', 'quran'] as TraditionKey[]), []);
  const [mobileTab, setMobileTab] = useState<TraditionKey>('bible');

  return (
    <section>
      <div className="triptych-mobile-tabs" role="tablist" aria-label="Triptych traditions">
        {tabOrder.map((tradition) => (
          <button
            key={tradition}
            role="tab"
            aria-selected={mobileTab === tradition}
            className={mobileTab === tradition ? `active ${traditionMeta[tradition].accentClass}` : ''}
            onClick={() => setMobileTab(tradition)}
          >
            {traditionMeta[tradition].label}
          </button>
        ))}
      </div>

      <div className="triptych-desktop" aria-label="Triptych reader desktop layout">
        <PassageColumn tradition="bible" />
        <PassageColumn tradition="torah" />
        <PassageColumn tradition="quran" />
      </div>

      <div className="triptych-mobile" aria-label="Triptych reader mobile layout">
        <PassageColumn tradition={mobileTab} />
      </div>
    </section>
  );
}
