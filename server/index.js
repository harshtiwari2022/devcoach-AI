const express = require("express");
const cors = require("cors");
require("dotenv").config();

const chatRoute = require("./routes/chat");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ FINAL ROUTE SETUP
app.use("/api", chatRoute);

// health check
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});