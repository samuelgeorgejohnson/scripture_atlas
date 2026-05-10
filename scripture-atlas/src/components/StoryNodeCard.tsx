import Link from 'next/link';

export type StoryNodeSummary = {
  slug: string;
  title: string;
  themes: string[];
  figures: string[];
};

export function StoryNodeCard({ node }: { node: StoryNodeSummary }) {
  return (
    <Link href={`/nodes/${node.slug}`} className="card" style={{ display: 'block' }}>
      <h3 style={{ marginTop: 0 }}>{node.title}</h3>
      <p className="small">Figures: {node.figures.join(', ')}</p>
      <div>
        {node.themes.map((theme) => (
          <span key={theme} className="tag">
            {theme}
          </span>
        ))}
      </div>
    </Link>
  );
}
