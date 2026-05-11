import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ThemeDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  return (
    <section className="card" style={{ marginTop: '1rem' }}>
      <h1>Theme detail</h1>
      <p className="small">Dynamic route scaffold for /atlas/theme/[slug].</p>
      <p className="small">Current slug: {slug}</p>
    </section>
  );
}
