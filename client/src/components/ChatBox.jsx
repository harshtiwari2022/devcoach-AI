import { useState, useRef, useEffect } from "react";
import Message from "./Message";
import { sendMessageToAPI } from "../services/api";

export default function ChatBox({ resetChat }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // ✅ Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // ✅ Auto-focus
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // ✅ Listen for Sidebar "New Chat"
  useEffect(() => {
    if (resetChat) {
      setMessages([]);
      setInput("");
    }
  }, [resetChat]);

  // ✅ Auto-resize textarea
  const handleInput = (e) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const data = await sendMessageToAPI(input);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Something went wrong. Try again.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current.style.height = "auto";
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      
      {/* 🔝 Header */}
      <div className="chat-header">
        <div>
          <h3>💬 DevCoach AI</h3>
          <span className="status">🟢 Online</span>
        </div>
      </div>

      {/* 💬 Chat */}
      <div className="chat-body">

        {messages.length === 0 && (
          <div className="empty-state">
            <h2>👋 Welcome, Developer</h2>
            <p>Start practicing frontend interviews</p>

            <div className="suggestions">
              <button onClick={() => setInput("Explain closures in JavaScript")}>
                Closures in JS
              </button>
              <button onClick={() => setInput("Difference between var let const")}>
                var vs let vs const
              </button>
              <button onClick={() => setInput("Explain React lifecycle")}>
                React lifecycle
              </button>
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}

        {loading && (
          <div className="typing">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* ⌨️ Input */}
      <div className="chat-input">
        <textarea
          ref={inputRef}
          value={input}
          onChange={handleInput}
          placeholder="Ask anything about frontend..."
          onKeyDown={handleKeyDown}
          rows={1}
        />

        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="send-btn"
        >
          {loading ? "..." : "➤"}
        </button>
      </div>
    </div>
  );
}