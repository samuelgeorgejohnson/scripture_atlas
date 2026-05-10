type AlignedPassage = {
  reference?: string;
  translation?: string;
  text?: string;
  notes?: string;
};

export type AlignmentRow = {
  beat: string;
  note?: string;
  torah?: AlignedPassage;
  christian_bible?: AlignedPassage;
  quran?: AlignedPassage;
};

export type TriptychPassages = {
  torah: string[];
  christian_bible: string[];
  quran: string[];
};

function normalizePassage(passage?: AlignedPassage) {
  if (!passage) return null;
  const hasContent = passage.reference || passage.translation || passage.text || passage.notes;
  return hasContent ? passage : null;
}

function PassageCell({ passage }: { passage?: AlignedPassage }) {
  const value = normalizePassage(passage);

  if (!value) {
    return <p className="small" style={{ margin: 0 }}>—</p>;
  }

  return (
    <>
      {value.reference ? <p style={{ margin: 0 }}><strong>{value.reference}</strong></p> : null}
      {value.translation ? <p className="small" style={{ margin: '0.25rem 0 0' }}>{value.translation}</p> : null}
      {value.text ? <p style={{ margin: '0.45rem 0 0' }}>{value.text}</p> : null}
      {value.notes ? <p className="small" style={{ margin: '0.45rem 0 0' }}>{value.notes}</p> : null}
    </>
  );
}

function rowsFromPassages(passages: TriptychPassages): AlignmentRow[] {
  const max = Math.max(passages.torah.length, passages.christian_bible.length, passages.quran.length);

  return Array.from({ length: max }, (_, idx) => ({
    beat: `Aligned moment ${idx + 1}`,
    note: 'Placeholder alignment from legacy passage list.',
    torah: passages.torah[idx]
      ? { reference: passages.torah[idx], translation: 'Placeholder', text: 'Placeholder verse text.', notes: '' }
      : undefined,
    christian_bible: passages.christian_bible[idx]
      ? { reference: passages.christian_bible[idx], translation: 'Placeholder', text: 'Placeholder verse text.', notes: '' }
      : undefined,
    quran: passages.quran[idx]
      ? { reference: passages.quran[idx], translation: 'Placeholder', text: 'Placeholder verse text.', notes: '' }
      : undefined
  }));
}

export function TriptychReader({ passages, alignmentRows }: { passages?: TriptychPassages; alignmentRows?: AlignmentRow[] }) {
  const rows = alignmentRows && alignmentRows.length > 0
    ? alignmentRows
    : passages
      ? rowsFromPassages(passages)
      : [];

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
            {rows.map((row, idx) => (
              <tr key={`${row.beat}-${idx}`}>
                <td>
                  <p style={{ margin: 0 }}><strong>{row.beat}</strong></p>
                  {row.note ? <p className="small" style={{ margin: '0.45rem 0 0' }}>{row.note}</p> : null}
                </td>
                <td><PassageCell passage={row.torah} /></td>
                <td><PassageCell passage={row.christian_bible} /></td>
                <td><PassageCell passage={row.quran} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
