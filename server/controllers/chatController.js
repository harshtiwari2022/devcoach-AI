const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

// 🔥 SIMPLE MEMORY (last topic)
let lastTopic = "";

const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required" });
    }

    let finalMessage = message;

    const lower = message.toLowerCase();

    // 🔥 FOLLOW-UP DETECTION (SMART)
    if (
      lower.includes("detail") ||
      lower.includes("more") ||
      lower.includes("why") ||
      lower.includes("how")
    ) {
      finalMessage = `${lastTopic} explain in deep detail with examples and analogy`;
    } else {
      lastTopic = message;
    }

    // 🔥 SMART PROMPT (IMPROVED)
    const prompt = `
ROLE:
You are DevCoach AI, a highly intelligent frontend interview coach.

MISSION:
Simulate a real frontend interview and also act as a mentor when needed.

INTENT DETECTION:

1. If user asks a concept question:
   - Explain clearly
   - Add example
   - Keep it simple

2. If user gives an answer:
   - Evaluate it
   - Tell what’s correct
   - Tell what’s missing
   - Suggest improvement

3. If user asks follow-up:
   (e.g., "more detail", "why", "how")
   - Continue previous explanation
   - Go deeper
   - Add analogy + real-world use

4. If user says:
   "start interview" / "ask question"
   - Ask a frontend interview question
   - Wait for user answer

5. If user is confused:
   - Simplify explanation
   - Use easy language

INTERVIEW MODE BEHAVIOR:
- Ask one question at a time
- Increase difficulty gradually
- Cover:
  JavaScript → React → Performance → System Design

RESPONSE STYLE:
- Natural (not robotic)
- Structured but flexible
- Use headings when needed
- Use bullet points for clarity

FORMATTING RULES:

For explanation:
### Concept:
...

### Example:
\`\`\`javascript
...
\`\`\`

### Key Insight:
...

For follow-up:
### Deep Dive:
...

For evaluation:
### Feedback:
✔ Correct:
...
❌ Missing:
...
💡 Improve:
...

IMPORTANT:
- Do NOT repeat same answer
- Do NOT restart explanation unnecessarily
- Adapt to user level

USER INPUT:
${message}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ reply: text });

  } catch (error) {
    console.error("🔥 Gemini API Error:", error.message);

    res.status(500).json({
      reply: "⚠️ Backend error: " + error.message,
    });
  }
};

module.exports = { handleChat };