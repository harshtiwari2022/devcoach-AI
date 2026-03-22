import { useState, useRef, useEffect } from "react";
import Message from "./Message";
import { sendMessageToAPI } from "../services/api";

export default function ChatBox({ resetChat }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Auto-focus
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Reset chat
  useEffect(() => {
    if (resetChat) {
      setMessages([]);
      setInput("");
    }
  }, [resetChat]);

  // Auto-resize textarea
  const handleInput = (e) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const sendMessage = async (customMsg) => {
    const messageToSend = customMsg || input;

    if (!messageToSend.trim() || loading) return;

    const userMsg = { role: "user", content: messageToSend };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const data = await sendMessageToAPI(messageToSend);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Something went wrong. Please try again.",
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

  // Suggested questions (IMPORTANT UX SIGNAL)
  const suggestions = [
    "Explain closures in JavaScript",
    "Difference between var, let, const",
    "What is Virtual DOM?",
    "Explain React lifecycle",
  ];

  return (
    <div className="chat-container">
      
      {/* Chat Body */}
      <div className="chat-body">

        {/* Empty State (VERY IMPORTANT FOR ASSIGNMENT) */}
        {messages.length === 0 && (
          <div className="empty-state">
            <h2>👋 Welcome, Developer</h2>
            <p>Practice frontend interviews with AI coach</p>

            <div className="suggestions">
              {suggestions.map((q, i) => (
                <button key={i} onClick={() => sendMessage(q)}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}

        {/* Typing Indicator */}
        {loading && (
          <div className="typing">
            <span></span>
            <span></span>
            <span></span>
            <p style={{ fontSize: "12px", color: "#888" }}>
              Coach is thinking...
            </p>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input">
        <textarea
          ref={inputRef}
          value={input}
          onChange={handleInput}
          placeholder="Ask a frontend interview question..."
          onKeyDown={handleKeyDown}
          rows={1}
        />

        <button
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          className="send-btn"
        >
          {loading ? "..." : "➤"}
        </button>
      </div>
    </div>
  );
}