function IndianPlayers() {
  const T20players = ["Rohit", "Gill", "Virat", "Rahul"];
  const RanjiTrophyPlayers = ["Sarfaraz", "Agarwal", "Pujara", "Saha"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];
  const [first, second, third, fourth, ...rest] = mergedPlayers;

  return (
    <section className="panel">
      <h1>Indian Players</h1>

      <h2>Odd Team Players</h2>
      <p>{first}, {third}, {rest[0]}, {rest[2]}</p>

      <h2>Even Team Players</h2>
      <p>{second}, {fourth}, {rest[1]}, {rest[3]}</p>

      <h2>Merged Players</h2>
      <ul>
        {mergedPlayers.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
    </section>
  );
}

export default IndianPlayers;
