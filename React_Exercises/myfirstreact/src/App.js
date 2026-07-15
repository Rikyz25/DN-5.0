function App() {
  const message = "Welcome to the First Session of React";
  const points = [
    "Build UI with reusable components",
    "Use JSX to mix logic and layout",
    "Keep the code simple and readable",
  ];
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">React Basics</p>
        <h1>{message}</h1>
        <p className="intro">
          This small app is a clean starting point for learning React. It uses
          a single component, a simple data array, and a friendly layout.
        </p>

        <ul className="point-list">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
