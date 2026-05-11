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
        <p className="eyebrow">SpiritOS Platform</p>
        <h1>SpiritOS</h1>
        <p className="small module-label">Module 01 · Scripture Atlas</p>
        <p className="small hero-copy">
          A digital humanities platform for comparative sacred-text mapping. Scripture Atlas aligns related passages
          across the Torah, Christian Bible, and Qur’an while preserving theological difference and interpretive
          transparency.
        </p>
      </section>

      <section className="landing-panels" aria-label="SpiritOS mission and method">
        <article className="card">
          <h2>Mission</h2>
          <p className="small">
            SpiritOS supports archival-grade comparison of sacred traditions through accountable sourcing, contextual
            framing, and visible disagreement.
          </p>
        </article>
        <article className="card">
          <h2>Method</h2>
          <p className="small">
            The platform aligns corresponding narratives without forcing doctrinal equivalence, then marks where and
            why traditions diverge.
          </p>
        </article>
        <article className="card">
          <h2>Research Posture</h2>
          <p className="small">
            Tone and structure follow a manuscript-vault and observatory model: comparative, historical, and explicit
            about interpretive limits.
          </p>
        </article>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Scripture Atlas Nodes</h2>
        <p className="small">Each node includes aligned passages, difference lenses, and source metadata.</p>
        <section className="grid">
          {nodes.map((node) => (
            <StoryNodeCard key={node.slug} node={node} />
          ))}
        </section>
      </section>
    </main>
  );
}
