import { atlasBrowseNav, type BrowseDimension } from '@/config/navigation';

export function BrowseSectionShell({ dimension }: { dimension: BrowseDimension }) {
  const section = atlasBrowseNav.find((item) => item.key === dimension);

  if (!section) return null;

  return (
    <section className="card" style={{ marginTop: '1rem' }}>
      <h1>{section.label} Explorer</h1>
      <p className="small">{section.description}</p>
      <h2 style={{ marginTop: '1rem' }}>Planned capabilities</h2>
      <ul>
        {section.plannedModes.map((mode) => (
          <li key={mode} className="small" style={{ marginBottom: '0.35rem' }}>
            {mode}
          </li>
        ))}
      </ul>
    </section>
  );
}
