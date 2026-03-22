import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";

export default function App() {
  const [resetChat, setResetChat] = useState(false);

  const handleNewChat = () => {
    setResetChat(true);

    // reset trigger (important)
    setTimeout(() => setResetChat(false), 0);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0f0f0f",
        color: "white",
      }}
    >
      <Sidebar onNewChat={handleNewChat} />
      <ChatBox resetChat={resetChat} />
    </div>
  );
}