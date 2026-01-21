import pizzaList from "../pizzaData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Menu() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const pageSize = 4; 
  const totalPages = Math.ceil(pizzaList.length / pageSize);

  const handleViewDetail = (pizza) => {
    navigate(`/viewdetail/${pizza.id}`);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const pizzasToShow = pizzaList.slice(current * pageSize, (current + 1) * pageSize);

  return (
    <section className="menu">
      <h2 style={{ textAlign: "center", margin: "2rem 0", fontSize: "2.5rem", color: "#d35400", letterSpacing: 2 }}>Our Menu</h2>
      <div className="menu-items" style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", justifyContent: "center" }}>
        {pizzasToShow.map((pizza) => (
          <div className="card" key={pizza.id} style={{
            background: "#fff",
            borderRadius: "1.2rem",
            boxShadow: "0 6px 24px rgba(44,62,80,0.13)",
            padding: "1.7rem 1.2rem 1.5rem 1.2rem",
            width: "270px",
            textAlign: "center",
            position: "relative",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer",
          }}>
            {pizza.tags && pizza.tags.map((tag, idx) => (
              <span key={idx} className="tag" style={{
                position: "absolute",
                top: `${1 + idx * 2.2}rem`,
                left: "1rem",
                background: tag.toLowerCase() === "sale" ? "#e74c3c" : "#27ae60",
                color: "#fff",
                padding: "0.3rem 0.8rem",
                borderRadius: "0.5rem",
                fontWeight: "bold",
                fontSize: "0.9rem",
                marginBottom: "0.2rem",
                boxShadow: "0 2px 8px rgba(44,62,80,0.13)"
              }}>{tag}</span>
            ))}
            <img src={pizza.image} alt={pizza.name} style={{ width: "100%", height: "170px", objectFit: "cover", borderRadius: "0.8rem", marginBottom: "1rem", boxShadow: "0 2px 8px rgba(44,62,80,0.10)" }} />
            <h3 style={{ margin: "1rem 0 0.5rem 0", color: "#2c3e50", fontWeight: 700, fontSize: "1.3rem", letterSpacing: 1 }}>{pizza.name}</h3>
            <p style={{ fontSize: "1.08rem", margin: "0.5rem 0 1rem 0", color: "#555" }}>
              {pizza.oldPrice && <span className="old" style={{ textDecoration: "line-through", color: "#aaa", marginRight: "0.5rem", fontWeight: 500 }}>${pizza.oldPrice}</span>}
              <span className="price" style={{ color: "#e67e22", fontWeight: "bold", fontSize: "1.18rem" }}>${pizza.price}</span>
            </p>
            <div style={{ minHeight: "40px", marginBottom: "1rem", color: "#888", fontSize: "0.98rem" }}>{pizza.description}</div>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.7rem" }}>
              <button style={{
                background: "#e67e22",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                padding: "0.7rem 1.5rem",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.2s, box-shadow 0.2s",
                marginRight: "0.2rem",
                boxShadow: "0 2px 8px rgba(44,62,80,0.10)"
              }}>Buy</button>
              <button style={{
                background: "#2980b9",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                padding: "0.7rem 1.5rem",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.2s, box-shadow 0.2s",
                boxShadow: "0 2px 8px rgba(44,62,80,0.10)"
              }} onClick={() => handleViewDetail(pizza)}>View Detail</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0 0 0", gap: "1rem" }}>
        <button onClick={handlePrev} disabled={current === 0} style={{
          background: current === 0 ? '#ccc' : '#2980b9',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.6rem 1.2rem',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: current === 0 ? 'not-allowed' : 'pointer',
          opacity: current === 0 ? 0.6 : 1
        }}>Prev</button>
        <span style={{ alignSelf: 'center', fontWeight: 'bold', color: '#555' }}>{current + 1} / {totalPages}</span>
        <button onClick={handleNext} disabled={current === totalPages - 1} style={{
          background: current === totalPages - 1 ? '#ccc' : '#2980b9',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.6rem 1.2rem',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: current === totalPages - 1 ? 'not-allowed' : 'pointer',
          opacity: current === totalPages - 1 ? 0.6 : 1
        }}>Next</button>
      </div>
    </section>
  );
}