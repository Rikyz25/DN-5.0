import { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = Number(rupees);
    if (!Number.isNaN(value)) {
      setEuros((value / 90).toFixed(2));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="converter">
      <h2>Currency Convertor</h2>
      <label>
        Indian Rupees
        <input
          value={rupees}
          onChange={(event) => setRupees(event.target.value)}
          placeholder="Enter rupees"
        />
      </label>
      <button type="submit">Convert</button>
      <p>Euro: {euros || "--"}</p>
    </form>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Ready");
  const [clickText, setClickText] = useState("Not clicked yet");

  const sayHello = () => setMessage("Hello, this is a static message.");
  const increment = () => {
    setCount((value) => value + 1);
    sayHello();
  };

  const decrement = () => setCount((value) => value - 1);
  const sayWelcome = (text) => setMessage(`Welcome, ${text}.`);
  const handlePress = () => setClickText("I was clicked");

  return (
    <main className="event-page">
      <section className="panel">
        <h1>Event Examples</h1>
        <p>Counter: {count}</p>
        <div className="button-row">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={() => sayWelcome("welcome")}>Say Welcome</button>
          <button onClick={handlePress}>OnPress</button>
        </div>
        <p>{message}</p>
        <p>{clickText}</p>
      </section>

      <CurrencyConvertor />
    </main>
  );
}

export default App;
