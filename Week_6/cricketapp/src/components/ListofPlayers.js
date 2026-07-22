function ListofPlayers() {
  const players = [
    { name: "Rohit", score: 92 },
    { name: "Gill", score: 84 },
    { name: "Virat", score: 78 },
    { name: "Rahul", score: 65 },
    { name: "Pandya", score: 59 },
    { name: "Jadeja", score: 73 },
    { name: "Pant", score: 61 },
    { name: "Bumrah", score: 88 },
    { name: "Siraj", score: 54 },
    { name: "Kuldeep", score: 69 },
    { name: "Shami", score: 81 },
  ];

  const lowScorers = players.filter((player) => player.score < 70);

  return (
    <section className="panel">
      <h1>List of Players</h1>
      <div className="cards">
        {players.map((player) => (
          <article key={player.name} className="card">
            <strong>{player.name}</strong>
            <span>Score: {player.score}</span>
          </article>
        ))}
      </div>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((player) => (
          <li key={player.name}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListofPlayers;
