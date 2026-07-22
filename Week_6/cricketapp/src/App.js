import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {
  const flag = true;

  return (
    <main className="cricket-app">
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </main>
  );
}

export default App;
