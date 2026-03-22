import { useState } from "react";

export default function Sidebar({ onNewChat }) {
  const [active, setActive] = useState("mock");

  const menuItems = [
    { id: "mock", label: "Mock Interview", icon: "🎯" },
    { id: "concepts", label: "Concepts", icon: "📚" },
    { id: "practice", label: "Practice", icon: "🧠" },
  ];

  return (
    <div style={styles.sidebar}>
      
      {/* 🔝 Logo */}
      <div style={styles.logo}>
        🚀 DevCoach AI
      </div>

      {/* ➕ New Chat (CONNECTED ✅) */}
      <button
        style={styles.newChat}
        onClick={onNewChat}
      >
        + New Chat
      </button>

      {/* 📌 Menu */}
      <div style={styles.menu}>
        {menuItems.map((item) => {
          const isActive = active === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              style={{
                ...styles.menuItem,
                ...(isActive && styles.activeItem),
              }}
            >
              <span style={styles.icon}>{item.icon}</span>
              {item.label}
            </div>
          );
        })}
      </div>

      {/* 👤 Profile */}
      <div style={styles.profile}>
        <div style={styles.avatar}>👤</div>
        <div>
          <p style={styles.name}>Harsh</p>
          <p style={styles.role}>Frontend Dev</p>
        </div>
      </div>
    </div>
  );
}

const gold = "#d4af37";

const styles = {
  sidebar: {
    width: "260px",
    height: "100vh",
    background: "#000",
    color: gold,
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid rgba(212,175,55,0.2)",
    padding: "16px",
  },

  logo: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "20px",
    color: gold,
  },

  newChat: {
    padding: "10px",
    marginBottom: "20px",
    background: `linear-gradient(135deg, ${gold}, #facc15)`,
    border: "none",
    borderRadius: "8px",
    color: "black",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.25s ease",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  menuItem: {
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#ccc",
    transition: "all 0.2s ease",
  },

  activeItem: {
    background: "rgba(212,175,55,0.1)",
    color: gold,
    border: "1px solid rgba(212,175,55,0.3)",
    boxShadow: "0 0 10px rgba(212,175,55,0.2)",
  },

  icon: {
    fontSize: "16px",
  },

  profile: {
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    paddingTop: "12px",
    borderTop: "1px solid rgba(212,175,55,0.2)",
  },

  avatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "#111",
    border: "1px solid rgba(212,175,55,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    margin: 0,
    fontSize: "14px",
    color: "#fff",
  },

  role: {
    margin: 0,
    fontSize: "12px",
    color: "#aaa",
  },
};