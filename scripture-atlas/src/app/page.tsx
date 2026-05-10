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
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Scripture Atlas</h1>
      <p className="small" style={{ maxWidth: 820 }}>
        A comparative scripture interface aligning the Torah, Christian Bible, and Qur’an by shared stories and themes.
      </p>
      <h2 style={{ marginTop: '2rem' }}>Initial Story Nodes</h2>
      <section className="grid">
        {nodes.map((node) => (
          <StoryNodeCard key={node.slug} node={node} />
        ))}
      </section>
    </main>
  );
}
