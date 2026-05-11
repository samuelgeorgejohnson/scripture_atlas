export default function PhilosophyPage() {
  return (
    <main className="container">
      <h1>Philosophy & Ethics</h1>
      <p className="small" style={{ maxWidth: 900 }}>
        SpiritOS's Scripture Atlas module is designed as a transparent comparison tool. It does not rank traditions, resolve doctrine, or
        reduce disagreements to a single viewpoint.
      </p>

      <section className="card" style={{ marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Editorial Commitments</h2>
        <ul>
          <li>Neutral framing: describe each tradition in terms its communities recognize.</li>
          <li>Transparent sourcing: every node includes references and citation metadata.</li>
          <li>Difference visibility: disagreements are shown explicitly through lens categories.</li>
          <li>Scope discipline: this prototype does not generate interpretation with AI.</li>
        </ul>
      </section>

      <section className="card" style={{ marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>How to Read Differences</h2>
        <p>
          Differences are categorized as textual, theological, historical, political reception, or translation issue.
          Categories indicate <em>where</em> a difference appears; they do not imply that one tradition is more correct.
        </p>
      </section>

      <section className="card" style={{ marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Current Limits</h2>
        <ul>
          <li>No backend services yet; all data is static and manually curated.</li>
          <li>No automated consensus scoring or synthesis.</li>
          <li>No personalized recommendations.</li>
        </ul>
      </section>
    </main>
  );
}
