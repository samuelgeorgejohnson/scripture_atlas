import type { ReactNode } from 'react';
import { BrowseNav } from '@/components/navigation/BrowseNav';

export default function AtlasLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">SpiritOS · Scripture Atlas</p>
        <h1>Navigation Architecture</h1>
        <p className="small">Multi-dimensional browsing system for narrative, people, place, themes, chronology, and divergence.</p>
      </section>
      <BrowseNav />
      {children}
    </main>
  );
}
