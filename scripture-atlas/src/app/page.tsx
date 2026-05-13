import Link from 'next/link';
import { TriptychReader } from '@/components/TriptychReader';

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">SpiritOS</p>
        <h1>Triptych Reader</h1>
        <p className="small hero-copy">
          Read Bible, Torah, and Quran side-by-side in a manuscript-style study space.
          The comparative atlas layer is available, but secondary.
        </p>
        <p><Link className="nav-link" href="/triptych">Open focused Triptych view →</Link></p>
      </section>
      <TriptychReader />
    </main>
  );
}
