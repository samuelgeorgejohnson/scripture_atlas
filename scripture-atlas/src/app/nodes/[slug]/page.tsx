import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TriptychReader } from '@/components/TriptychReader';
import { DifferenceTags } from '@/components/DifferenceTags';
import { TimelineView } from '@/components/TimelineView';
import creation from '@/data/nodes/creation.json';
import noah from '@/data/nodes/noah.json';
import abraham from '@/data/nodes/abraham.json';
import joseph from '@/data/nodes/joseph.json';
import moses from '@/data/nodes/moses.json';

const nodes = [creation, noah, abraham, joseph, moses];

export function generateStaticParams() {
  return nodes.map(({ slug }) => ({ slug }));
}

export default async function StoryNodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const node = nodes.find((item) => item.slug === slug);

  if (!node) notFound();

  return (
    <main className="container">
      <Link href="/" className="small">← Back to map</Link>
      <h1>{node.title}</h1>
      <p className="small">Related figures: {node.figures.join(', ')}</p>
      <section style={{ marginBottom: '1.3rem' }}>
        {node.themes.map((theme) => (
          <span key={theme} className="tag">{theme}</span>
        ))}
      </section>

      <TriptychReader passages={node.passages} />

      <section className="card" style={{ marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Similarities</h2>
        <ul>
          {node.similarities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '1rem' }}>
        <h2>Differences</h2>
        <DifferenceTags differences={node.differences} />
      </section>

      <section className="card" style={{ marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Commentary Notes</h2>
        <ul>
          {node.commentary_notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <div style={{ marginTop: '1rem' }}>
        <TimelineView title={node.title} />
      </div>
    </main>
  );
}
