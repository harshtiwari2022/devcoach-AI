const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

// 🔥 MEMORY
let lastTopic = "";
let interviewMode = false;

const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required" });
    }

    let finalMessage = message;
    const lower = message.toLowerCase();

    // 🔥 MODE DETECTION
    if (lower.includes("start interview")) {
      interviewMode = true;
    }

    // 🔥 FOLLOW-UP DETECTION
    if (
      lower.includes("detail") ||
      lower.includes("more") ||
      lower.includes("why") ||
      lower.includes("how")
    ) {
      finalMessage = `${lastTopic} explain in deep detail with examples, analogy and real-world use cases`;
    } else {
      lastTopic = message;
    }

    // 🔥 SYSTEM PROMPT (STRONG DIFFERENTIATOR)
    const prompt = `
ROLE:
You are a Senior Frontend Engineer conducting interviews at a top tech company.

PERSONALITY:
- Act like a real interviewer + mentor
- Professional, slightly challenging but helpful
- Do NOT sound like a chatbot

MODES:

1. INTERVIEW MODE (if user says "start interview"):
- Ask ONE question at a time
- Wait for answer
- Evaluate before next question
- Increase difficulty gradually
- Cover:
  JavaScript → React → Performance → System Design

2. TEACHING MODE:
- Explain clearly and concisely
- Use structured format
- Avoid long unnecessary paragraphs

3. EVALUATION MODE:
- If user answers:
  ✔ Tell what is correct
  ❌ What is missing
  💡 Suggest improvement

RESPONSE RULES:

- Keep answers SHORT but HIGH QUALITY
- Use structure:

For explanation:
### Concept
(short explanation)

### Example
\`\`\`javascript
// example
\`\`\`

### Key Insight
(important takeaway)

- For follow-ups:
### Deep Dive

- For evaluation:
### Feedback
✔ Correct:
❌ Missing:
💡 Improve:

- ALWAYS:
  - Ask a follow-up question at end (VERY IMPORTANT 🔥)
  - Adapt to user's level
  - Avoid repeating same content

USER INPUT:
${finalMessage}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ reply: text });

  } catch (error) {
    console.error("🔥 Gemini API Error:", error.message);

    res.status(500).json({
      reply: "⚠️ Something went wrong. Please try again.",
    });
  }
};

module.exports = { handleChat };