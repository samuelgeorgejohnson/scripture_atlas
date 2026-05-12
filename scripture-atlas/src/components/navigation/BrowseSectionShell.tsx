import Link from 'next/link';
import { BrowseNav } from '@/components/navigation/BrowseNav';

type BrowseSectionShellProps = {
  title: string;
  description: string;
  sampleSlugs: string[];
  routePrefix: string;
};

export function BrowseSectionShell({ title, description, sampleSlugs, routePrefix }: BrowseSectionShellProps) {
  return (
    <section>
      <header className="card">
        <p className="eyebrow" style={{ marginTop: 0 }}>Atlas Browse</p>
        <h1 style={{ marginTop: 0 }}>{title}</h1>
        <p className="small" style={{ marginBottom: 0 }}>{description}</p>
      </header>

      <div style={{ marginTop: '1rem' }}>
        <BrowseNav />
      </div>

      <section className="card" style={{ marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Research Entry Points</h2>
        <p className="small">Seed records for scaffold validation and route expansion.</p>
        <ul>
          {sampleSlugs.map((slug) => (
            <li key={slug}>
              <Link href={`${routePrefix}/${slug}`} className="nav-link">{slug.replaceAll('-', ' ')}</Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
