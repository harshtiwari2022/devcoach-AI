export const sendMessageToAPI = async (message) => {
  try {
    const res = await fetch("https://devcoach-ai.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) {
      throw new Error("Server error");
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("API Error:", error);

    return {
      reply: "⚠️ Unable to connect to server",
    };
  }
};
