import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 10000;

/* ===== MIDDLEWARE ===== */
app.use(cors({
  origin: "*",   // Netlify ko allow
  methods: ["GET", "POST"],
}));
app.use(express.json());

/* ===== TEST ROUTE ===== */
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Indixa Backend is running 🚀"
  });
});

/* ===== HEALTH CHECK ===== */
app.get("/health", (req, res) => {
  res.json({ success: true });
});

/* ===== USERS API ===== */
app.get("/api/users", (req, res) => {
  res.json({
    users: [
      { id: 1, name: "Parvaiz" },
      { id: 2, name: "Indixa User" }
    ]
  });
});

/* ===== LOGIN API ===== */
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    return res.json({
      success: true,
      token: "dummy-jwt-token"
    });
  }

  res.status(400).json({ error: "Invalid credentials" });
});

/* ===== START SERVER ===== */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
