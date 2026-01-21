import { useParams, useNavigate } from "react-router-dom";
import pizzaList from "../pizzaData";

export default function PizzaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pizza = pizzaList.find((p) => p.id === Number(id));

  if (!pizza) return <div style={{padding: '2rem'}}>Không tìm thấy pizza!</div>;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "80vh",
      background: "#fff",
      borderRadius: "1rem",
      padding: "2rem",
      maxWidth: "400px",
      margin: "2rem auto",
      boxShadow: "0 8px 32px rgba(44,62,80,0.18)"
    }}>
      <button onClick={() => navigate(-1)} style={{
        alignSelf: "flex-end",
        background: "#e74c3c",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "2rem",
        height: "2rem",
        fontWeight: "bold",
        fontSize: "1.2rem",
        cursor: "pointer",
        marginBottom: "1rem"
      }}>×</button>
      <img src={pizza.image} alt={pizza.name} style={{ width: "220px", height: "160px", objectFit: "cover", borderRadius: "0.7rem", marginBottom: "1rem" }} />
      <h2 style={{ color: "#d35400", marginBottom: "0.5rem", textAlign: "center", fontSize: "1.7rem" }}>{pizza.name}</h2>
      <p style={{ color: "#2c3e50", fontSize: "1.1rem", marginBottom: "1rem", textAlign: "center", minHeight: "48px" }}>{pizza.description}</p>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#e67e22", marginBottom: "1rem" }}>
        {pizza.oldPrice && <span style={{ textDecoration: "line-through", color: "#aaa", marginRight: "0.5rem" }}>${pizza.oldPrice}</span>}
        ${pizza.price}
      </p>
      <div style={{ marginBottom: "1rem" }}>
        {pizza.tags && pizza.tags.map((tag, idx) => (
          <span key={idx} style={{
            display: "inline-block",
            background: tag.toLowerCase() === "sale" ? "#e74c3c" : "#27ae60",
            color: "#fff",
            padding: "0.3rem 0.8rem",
            borderRadius: "0.5rem",
            fontWeight: "bold",
            fontSize: "0.9rem",
            marginRight: "0.5rem"
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
