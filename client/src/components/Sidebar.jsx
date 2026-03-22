import { useState } from "react";

export default function Sidebar({ onNewChat }) {
  const [active, setActive] = useState("mock");

  const menuItems = [
    {
      id: "mock",
      label: "Mock Interview",
      icon: "🎯",
      desc: "Simulate real interviews",
    },
    {
      id: "concepts",
      label: "Concepts",
      icon: "📚",
      desc: "Revise core topics",
    },
    {
      id: "practice",
      label: "Practice",
      icon: "🧠",
      desc: "Solve questions",
    },
  ];

  return (
    <div style={styles.sidebar}>
      
      {/* Logo */}
      <div style={styles.logo}>
        🚀 DevCoach AI
        <span style={styles.beta}>Beta</span>
      </div>

      {/* New Chat */}
      <button style={styles.newChat} onClick={onNewChat}>
        + New Chat
      </button>

      {/* Menu */}
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
              <div>
                <span style={styles.icon}>{item.icon}</span>
              </div>

              <div>
                <div style={styles.label}>{item.label}</div>
                <div style={styles.desc}>{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer / Profile */}
      <div style={styles.profile}>
        <div style={styles.avatar}>👤</div>
        <div>
          <p style={styles.name}>Harsh</p>
          <p style={styles.role}>Frontend Developer</p>
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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  beta: {
    fontSize: "10px",
    background: "rgba(212,175,55,0.2)",
    padding: "2px 6px",
    borderRadius: "6px",
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
    gap: "8px",
  },

  menuItem: {
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
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
    fontSize: "18px",
  },

  label: {
    fontSize: "14px",
    fontWeight: "500",
  },

  desc: {
    fontSize: "11px",
    color: "#888",
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