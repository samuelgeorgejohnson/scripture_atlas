export function TimelineView({ title }: { title: string }) {
  return (
    <section className="card">
      <h2 style={{ marginTop: 0 }}>Timeline (Placeholder)</h2>
      <p className="small">
        {title} will be positioned in a comparative chronology with linked story nodes.
      </p>
      <div style={{ borderTop: '1px solid var(--border)', marginTop: '1rem', paddingTop: '1rem' }}>
        <span className="tag">Interactive timeline coming soon</span>
      </div>
    </section>
  );
}
