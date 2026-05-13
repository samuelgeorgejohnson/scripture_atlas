import { TriptychReader } from '@/components/TriptychReader';

export default function TriptychPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">SpiritOS</p>
        <h1>Triptych Reader</h1>
        <p className="small">Desktop shows all three traditions. Mobile uses tabs for readable study.</p>
      </section>
      <TriptychReader />
    </main>
  );
}
