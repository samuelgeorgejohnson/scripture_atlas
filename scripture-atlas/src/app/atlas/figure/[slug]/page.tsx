import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function FigureDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  return (
    <section className="card" style={{ marginTop: '1rem' }}>
      <h1>Figure detail</h1>
      <p className="small">Dynamic route scaffold for /atlas/figure/[slug].</p>
      <p className="small">Current slug: {slug}</p>
    </section>
  );
}
