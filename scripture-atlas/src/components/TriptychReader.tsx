import { AlignmentRow, TraditionEntry } from '@/data/types';

function EntryCell({ entry }: { entry?: TraditionEntry }) {
  if (!entry) return <p className="small" style={{ margin: 0 }}>No direct parallel</p>;

  const hasContent = (entry.references && entry.references.length > 0) || entry.translation || entry.excerpt || (entry.notes && entry.notes.length > 0);
  if (!hasContent) return <p className="small" style={{ margin: 0 }}>No direct parallel</p>;

  return (
    <>
      {entry.references && entry.references.length > 0 ? (
        <p style={{ margin: 0 }}><strong>{entry.references.join(' · ')}</strong></p>
      ) : null}
      {entry.translation ? <p className="small" style={{ margin: '0.25rem 0 0' }}>{entry.translation}</p> : null}
      {entry.excerpt ? <p style={{ margin: '0.45rem 0 0' }}>{entry.excerpt}</p> : null}
      {entry.notes?.map((note) => (
        <details key={`${note.title}-${note.detail}`} style={{ marginTop: '0.4rem' }}>
          <summary className="small">{note.title}</summary>
          <p className="small" style={{ margin: '0.35rem 0 0' }}>{note.detail}</p>
        </details>
      ))}
    </>
  );
}

export function TriptychReader({ alignmentRows }: { alignmentRows: AlignmentRow[] }) {
  return (
    <section className="card">
      <h2 style={{ marginTop: 0 }}>Aligned Comparison</h2>
      <p className="small" style={{ marginTop: '-0.3rem' }}>
        Comparative reading matrix with expandable rows and source-preserving references.
      </p>

      <nav className="reader-sticky-nav" aria-label="Comparison sections">
        <a href="#torah-column">Torah / Tanakh</a>
        <a href="#bible-column">Christian Bible</a>
        <a href="#quran-column">Qur’an</a>
      </nav>

      <div className="alignment-list" role="list">
        {alignmentRows.map((row, idx) => (
          <details className="alignment-row" key={`${row.beat}-${idx}`} open={idx === 0}>
            <summary>
              <span>
                <strong>{row.beat}</strong>
                {row.summary ? <span className="small row-summary"> — {row.summary}</span> : null}
              </span>
              <span className="small">Expand</span>
            </summary>
            {row.difference_tags?.length ? (
              <div style={{ marginTop: '0.45rem' }}>
                {row.difference_tags.map((tag) => {
                  const label = typeof tag === 'string' ? tag : tag.lens;
                  return <span className="tag" key={`${row.beat}-${label}`}>{label}</span>;
                })}
              </div>
            ) : null}
            <div className="triptych-column-grid" style={{ marginTop: '0.8rem' }}>
              <article id="torah-column" className="card column-panel">
                <h3>Torah / Tanakh</h3>
                <EntryCell entry={row.torah} />
              </article>
              <article id="bible-column" className="card column-panel">
                <h3>Christian Bible</h3>
                <EntryCell entry={row.christian_bible} />
              </article>
              <article id="quran-column" className="card column-panel">
                <h3>Qur’an</h3>
                <EntryCell entry={row.quran} />
              </article>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
