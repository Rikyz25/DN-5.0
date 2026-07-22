import "../Stylesheets/mystyle.css";

function CalculateScore() {
  const student = {
    name: "Anika",
    school: "Green Valley School",
    total: 450,
    goal: 500,
  };

  const averageScore = ((student.total / student.goal) * 100).toFixed(2);

  return (
    <section className="score-card">
      <p className="label">Student Management Portal</p>
      <h1>Calculate Score</h1>

      <div className="details">
        <p>
          <span>Name</span>
          <strong>{student.name}</strong>
        </p>
        <p>
          <span>School</span>
          <strong>{student.school}</strong>
        </p>
        <p>
          <span>Total</span>
          <strong>{student.total}</strong>
        </p>
        <p>
          <span>Goal</span>
          <strong>{student.goal}</strong>
        </p>
      </div>

      <div className="result">
        <span>Average Score</span>
        <strong>{averageScore}%</strong>
      </div>
    </section>
  );
}

export default CalculateScore;
