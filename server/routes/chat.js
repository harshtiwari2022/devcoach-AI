const express = require("express");
const router = express.Router();

const { handleChat } = require("../controllers/chatController");

// ✅ FINAL ENDPOINT
router.post("/chat", handleChat);

module.exports = router;