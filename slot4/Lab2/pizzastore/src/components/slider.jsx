export default function Slider() {
  return (
    <div className="slider" style={{
      position: "relative",
      width: "100vw",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
      maxWidth: "none",
      borderRadius: 0,
      overflow: "hidden",
      boxShadow: "0 8px 32px rgba(44,62,80,0.18)",
      minHeight: "340px"
    }}>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/pizza-recipes-classic-cheese-pizza-64625a272460d.jpeg"
        alt="slider"
        style={{
          width: "100%",
          height: "340px",
          objectFit: "cover",
          filter: "brightness(0.7)",
          display: "block"
        }}
      />
      <div className="slider-text" style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        background: "linear-gradient(90deg, rgba(44,62,80,0.5) 0%, rgba(230,126,34,0.3) 100%)"
      }}>
        <h2 style={{ fontSize: "2.8rem", fontWeight: 700, marginBottom: "1rem", textShadow: "0 2px 8px #222" }}>Neapolitan Pizza</h2>
        <p style={{ fontSize: "1.3rem", maxWidth: "600px", textAlign: "center", textShadow: "0 1px 6px #222" }}>
          If you are looking for traditional Italian pizza, the Neapolitan is the best option!
        </p>
      </div>
    </div>
  );
}