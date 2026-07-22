function App() {
  const office = {
    name: "Regal Tower",
    rent: 55000,
    address: "MG Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  };

  const offices = [
    { name: "Regal Tower", rent: 55000, address: "MG Road, Bengaluru" },
    { name: "Summit Square", rent: 82000, address: "Outer Ring Road, Bengaluru" },
    { name: "Skyline House", rent: 61000, address: "Koramangala, Bengaluru" },
  ];

  return (
    <main className="office-page">
      <h1>Office Space Rental</h1>

      <section className="hero">
        <img src={office.image} alt={office.name} />
        <div>
          <h2>{office.name}</h2>
          <p>{office.address}</p>
          <p className={office.rent < 60000 ? "rent low" : "rent high"}>
            Rent: Rs. {office.rent}
          </p>
        </div>
      </section>

      <section className="office-list">
        {offices.map((item) => (
          <article key={item.name} className="office-card">
            <h3>{item.name}</h3>
            <p>{item.address}</p>
            <p className={item.rent < 60000 ? "rent low" : "rent high"}>
              Rs. {item.rent}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
