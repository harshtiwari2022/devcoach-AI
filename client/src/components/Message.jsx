import ReactMarkdown from "react-markdown";

export default function Message({ msg }) {
  const isUser = msg.role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        gap: "10px",
        margin: "14px 0",
        alignItems: "flex-end",
      }}
    >
      {/* Bot Avatar */}
      {!isUser && <div style={styles.avatar}>🤖</div>}

      <div style={{ display: "flex", flexDirection: "column" }}>
        
        {/* Message Bubble */}
        <div
          style={{
            ...styles.bubble,
            ...(isUser ? styles.userBubble : styles.botBubble),
          }}
        >
          {msg.content ? (
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          ) : (
            "..."
          )}
        </div>

        {/* Timestamp */}
        <span style={styles.time}>
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      {/* User Avatar */}
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
    lineHeight: "1.5",
    wordBreak: "break-word",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },

  userBubble: {
    background: `linear-gradient(135deg, ${gold}, #facc15)`,
    color: "black",
    borderBottomRightRadius: "4px",
  },

  botBubble: {
    background: "#111",
    color: "#fff",
    border: "1px solid #1f1f1f",
    borderBottomLeftRadius: "4px",
  },

  avatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "#1a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  },

  userAvatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: gold,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  },

  time: {
    fontSize: "10px",
    color: "#777",
    marginTop: "4px",
    alignSelf: "flex-end",
  },
};