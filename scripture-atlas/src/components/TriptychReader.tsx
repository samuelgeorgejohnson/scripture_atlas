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
      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Story beat / alignment note</th>
              <th>Torah / Tanakh</th>
              <th>Christian Bible</th>
              <th>Qur’an</th>
            </tr>
          </thead>
          <tbody>
            {alignmentRows.map((row, idx) => (
              <tr key={`${row.beat}-${idx}`}>
                <td>
                  <p style={{ margin: 0 }}><strong>{row.beat}</strong></p>
                  {row.summary ? <p className="small" style={{ margin: '0.45rem 0 0' }}>{row.summary}</p> : null}
                  {row.difference_tags?.length ? (
                    <div style={{ marginTop: '0.45rem' }}>
                      {row.difference_tags.map((tag, tagIndex) => (
                        <span className="tag" key={`${row.beat}-${tag.lens}-${tagIndex}`}>
                          {tag.category ? `${tag.lens} · ${tag.category}` : tag.lens}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </td>
                <td><EntryCell entry={row.torah} /></td>
                <td><EntryCell entry={row.christian_bible} /></td>
                <td><EntryCell entry={row.quran} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
