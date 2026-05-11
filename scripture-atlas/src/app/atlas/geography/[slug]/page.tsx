import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function GeographyDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  return (
    <section className="card" style={{ marginTop: '1rem' }}>
      <h1>Geography detail</h1>
      <p className="small">Dynamic route scaffold for /atlas/geography/[slug].</p>
      <p className="small">Current slug: {slug}</p>
    </section>
  );
}
