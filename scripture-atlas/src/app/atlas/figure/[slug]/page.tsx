import Link from 'next/link';
import { BrowseNav } from '@/components/navigation/BrowseNav';

export default async function FigureSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <article>
      <header className="card">
        <p className="eyebrow" style={{ marginTop: 0 }}>Atlas · Figure</p>
        <h1 style={{ marginTop: 0 }}>{slug.replaceAll('-', ' ')}</h1>
        <p className="small" style={{ marginBottom: 0 }}>
          Placeholder research record for figure navigation scaffolding.
        </p>
      </header>

      <section className="card" style={{ marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Record Status</h2>
        <p className="small">Metadata, references, and comparison notes will be attached in future passes.</p>
        <p>
          <Link href="/atlas/figure" className="nav-link">Back to figure browse</Link>
        </p>
      </section>

      <div style={{ marginTop: '1rem' }}>
        <BrowseNav />
      </div>
    </article>
  );
}
