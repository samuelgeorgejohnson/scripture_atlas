const atlasCards = ['Stories', 'Figures', 'Places', 'Themes', 'Timeline', 'Differences'];

export default function AtlasPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Secondary Layer</p>
        <h1>Atlas</h1>
        <p className="small hero-copy">A lightweight index for comparative study paths. Full node engine comes later.</p>
      </section>
      <section className="grid">
        {atlasCards.map((card) => (
          <article key={card} className="card">
            <h2 style={{ marginTop: 0 }}>{card}</h2>
            <p className="small">Browse curated {card.toLowerCase()} connections across traditions.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
