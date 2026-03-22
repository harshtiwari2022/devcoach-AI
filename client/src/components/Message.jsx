import ReactMarkdown from "react-markdown";

export default function Message({ msg }) {
  const isUser = msg.role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        gap: "10px",
        margin: "10px 0",
      }}
    >
      {!isUser && <div style={styles.avatar}>🤖</div>}

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            ...styles.bubble,
            ...(isUser ? styles.userBubble : styles.botBubble),
          }}
        >
          {/* ✅ SAFE RENDER */}
          {msg.content ? (
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          ) : (
            "..."
          )}
        </div>

        <span style={styles.time}>
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      {isUser && <div style={styles.userAvatar}>👤</div>}
    </div>
  );
}

const gold = "#d4af37";

const styles = {
  bubble: {
    padding: "12px 16px",
    borderRadius: "16px",
    maxWidth: "65%",
    fontSize: "14px",
  },
  userBubble: {
    background: `linear-gradient(135deg, ${gold}, #facc15)`,
    color: "black",
  },
  botBubble: {
    background: "#111",
    color: "#fff",
  },
  avatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userAvatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: gold,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    fontSize: "10px",
    color: "#888",
    marginTop: "4px",
  },
};