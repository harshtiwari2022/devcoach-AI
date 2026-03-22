import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";

export default function App() {
  const [resetChat, setResetChat] = useState(false);

  const handleNewChat = () => {
    setResetChat(true);
    setTimeout(() => setResetChat(false), 0);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0a0a0a",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Sidebar */}
      <Sidebar onNewChat={handleNewChat} />

      {/* Main Section */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* Header (VERY IMPORTANT for product feel) */}
        <div
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid #1f1f1f",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#0a0a0a",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
            💼 Frontend Interview Coach
          </h2>

          <span style={{ fontSize: "12px", color: "#888" }}>
            Ask React, JS, HTML questions
          </span>
        </div>

        {/* Chat Area */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          <ChatBox resetChat={resetChat} />
        </div>
      </div>
    </div>
  );
}