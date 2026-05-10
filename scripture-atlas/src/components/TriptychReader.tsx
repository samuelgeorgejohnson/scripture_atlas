export type TriptychPassages = {
  torah: string[];
  christian_bible: string[];
  quran: string[];
};

function PassageColumn({ title, passages }: { title: string; passages: string[] }) {
  return (
    <section className="card">
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {passages.map((passage) => (
        <details key={passage} style={{ marginBottom: '0.5rem' }}>
          <summary>{passage}</summary>
          <p className="small">Expandable passage placeholder. Integrate verse text or API excerpt later.</p>
        </details>
      ))}
    </section>
  );
}

export function TriptychReader({ passages }: { passages: TriptychPassages }) {
  return (
    <div className="triptych">
      <PassageColumn title="Torah" passages={passages.torah} />
      <PassageColumn title="Christian Bible" passages={passages.christian_bible} />
      <PassageColumn title="Qur’an" passages={passages.quran} />
    </div>
  );
}
