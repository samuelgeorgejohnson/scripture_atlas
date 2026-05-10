import { StoryNodeCard } from '@/components/StoryNodeCard';
import creation from '@/data/nodes/creation.json';
import noah from '@/data/nodes/noah.json';
import abraham from '@/data/nodes/abraham.json';
import joseph from '@/data/nodes/joseph.json';
import moses from '@/data/nodes/moses.json';

const nodes = [creation, noah, abraham, joseph, moses];

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Comparative Reading Workspace</p>
        <h1>Scripture Atlas</h1>
        <p className="small" style={{ maxWidth: 820 }}>
          A transparent interface aligning shared stories across the Torah, Christian Bible, and Qur’an while preserving
          important differences.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Story Nodes</h2>
        <p className="small">Each node includes passages, differences by lens, and source metadata for traceability.</p>
        <section className="grid">
          {nodes.map((node) => (
            <StoryNodeCard key={node.slug} node={node} />
          ))}
        </section>
      </section>
    </main>
  );
}
