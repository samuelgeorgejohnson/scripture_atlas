export type Difference = {
  type: string;
  description: string;
};

export function DifferenceTags({ differences }: { differences: Difference[] }) {
  return (
    <div>
      {differences.map((difference) => (
        <div key={`${difference.type}-${difference.description}`} className="card" style={{ marginBottom: '0.6rem' }}>
          <strong style={{ color: 'var(--accent)' }}>{difference.type}</strong>
          <p style={{ margin: '0.35rem 0 0' }}>{difference.description}</p>
        </div>
      ))}
    </div>
  );
}
