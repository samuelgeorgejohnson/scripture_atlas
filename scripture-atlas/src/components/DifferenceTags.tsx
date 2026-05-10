export const lensTypes = [
  'textual',
  'theological',
  'historical',
  'political reception',
  'translation issue'
] as const;

export type LensType = (typeof lensTypes)[number];

export type Difference = {
  lens: LensType;
  description: string;
};

export function DifferenceTags({ differences }: { differences: Difference[] }) {
  return (
    <div>
      {differences.map((difference) => (
        <div key={`${difference.lens}-${difference.description}`} className="card" style={{ marginBottom: '0.6rem' }}>
          <strong style={{ color: 'var(--accent)' }}>{difference.lens}</strong>
          <p style={{ margin: '0.35rem 0 0' }}>{difference.description}</p>
        </div>
      ))}
    </div>
  );
}
