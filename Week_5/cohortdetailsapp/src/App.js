import CohortDetails from "./components/CohortDetails";

const cohorts = [
  { name: "React Essentials", status: "ongoing", mentor: "Anika", start: "Apr 2026" },
  { name: "Java Foundations", status: "completed", mentor: "Ravi", start: "Jan 2026" },
  { name: "Cloud Ready", status: "ongoing", mentor: "Meera", start: "Jun 2026" },
];

function App() {
  return (
    <main>
      <section className="cohort-page">
        <h1>Cohort dashboard</h1>
        <div className="cohort-list">
          {cohorts.map((cohort) => (
            <CohortDetails key={cohort.name} cohort={cohort} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
