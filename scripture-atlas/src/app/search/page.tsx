'use client';

import { useMemo, useState } from 'react';
import { scriptureSamples, TraditionKey } from '@/data/scriptureSamples';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    const rows: { tradition: TraditionKey; ref: string; text: string }[] = [];
    (Object.keys(scriptureSamples) as TraditionKey[]).forEach((tradition) => {
      scriptureSamples[tradition].forEach((book) => {
        book.chapters.forEach((chapter) => {
          chapter.verses.forEach((text) => {
            if (text.toLowerCase().includes(normalized)) {
              rows.push({ tradition, ref: `${book.book} ${chapter.chapter}`, text });
            }
          });
        });
      });
    });
    return rows;
  }, [query]);

  return (
    <main className="container">
      <h1>Search</h1>
      <p className="small">Local sample-text search across Bible, Torah, and Quran.</p>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search sample verses" className="search-input" />
      <section style={{ marginTop: '1rem' }}>
        {results.map((result) => (
          <article className="card" style={{ marginBottom: '0.7rem' }} key={`${result.tradition}-${result.ref}-${result.text}`}>
            <p className="small" style={{ margin: 0, textTransform: 'capitalize' }}>{result.tradition} · {result.ref}</p>
            <p style={{ marginBottom: 0 }}>{result.text}</p>
          </article>
        ))}
        {!!query && results.length === 0 ? <p className="small">No matches in current local sample set.</p> : null}
      </section>
    </main>
  );
}
