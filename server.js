const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ ROOT ROUTE (MOST IMPORTANT)
app.get("/", (req, res) => {
  res.json({
    status: "Backend is LIVE 🚀",
    message: "Indixa backend working properly"
  });
});

// ✅ HEALTH CHECK
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    time: new Date()
  });
});

// ✅ TEST USERS API
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Test User 1" },
    { id: 2, name: "Test User 2" }
  ]);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
