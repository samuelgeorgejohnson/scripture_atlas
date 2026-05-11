import { atlasBrowseNav } from '@/config/navigation';

export default function AtlasIndexPage() {
  return (
    <section className="landing-panels" style={{ marginTop: '1rem' }}>
      {atlasBrowseNav.map((item) => (
        <article key={item.key} className="card">
          <h2>{item.label}</h2>
          <p className="small">{item.description}</p>
          <p className="small" style={{ marginTop: '0.75rem' }}>Route: {item.href}</p>
        </article>
      ))}
    </section>
  );
}
