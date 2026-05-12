import Link from 'next/link';
import { BrowseNav } from '@/components/navigation/BrowseNav';
import { browseDimensions } from '@/config/navigation';

export default function AtlasIndexPage() {
  return (
    <section>
      <header className="hero">
        <p className="eyebrow">Module 01</p>
        <h1>Scripture Atlas</h1>
        <p className="hero-copy small">
          Browse by dimension to study stories, figures, places, themes, timelines, and divergences across traditions.
        </p>
      </header>

      <div style={{ marginTop: '1rem' }}>
        <BrowseNav />
      </div>

      <section className="grid" style={{ marginTop: '1rem' }}>
        {browseDimensions.map((dimension) => (
          <article key={dimension.key} className="card">
            <h2 style={{ marginTop: 0 }}>{dimension.label}</h2>
            <p className="small">{dimension.description}</p>
            <Link className="nav-link" href={dimension.href}>Open {dimension.label}</Link>
          </article>
        ))}
      </section>
    </section>
  );
}
