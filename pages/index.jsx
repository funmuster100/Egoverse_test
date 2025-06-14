import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      background: "#0d0d0d",
      color: "#eee",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Willkommen bei EgoVerse™</h1>
      <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
        Erstelle dein digitales Ich – mit realistischem Chatverhalten.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/onboarding-multi">
          <button style={buttonStyle}>Jetzt starten</button>
        </Link>
        <Link href="/chat">
          <button style={buttonStyle}>Direkt zum Chat</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "12px 24px",
  background: "#00ff88",
  color: "#111",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer"
};
