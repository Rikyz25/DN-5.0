import { useState } from "react";

function GuestPage({ onLogin }) {
  return (
    <section className="screen">
      <h1>Guest Page</h1>
      <p>Browse flight details and log in when you are ready to book.</p>
      <ul>
        <li>Flight: Indigo 6E 212</li>
        <li>From: Chennai</li>
        <li>To: Mumbai</li>
      </ul>
      <button onClick={onLogin}>Login</button>
    </section>
  );
}

function UserPage({ onLogout }) {
  return (
    <section className="screen">
      <h1>User Page</h1>
      <p>You are logged in, so you can book your tickets now.</p>
      <button onClick={onLogout}>Logout</button>
    </section>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="ticket-app">
      {isLoggedIn ? (
        <UserPage onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <GuestPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </main>
  );
}

export default App;
