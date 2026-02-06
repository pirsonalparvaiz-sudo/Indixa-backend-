const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.json({ status: "Indixa Backend Connected ✅" });
});

// USERS API
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "User One" },
    { id: 2, name: "User Two" }
  ]);
});

// LOGIN API
app.post("/api/login", (req, res) => {
  const { phone } = req.body;
  res.json({
    success: true,
    message: "Login successful",
    phone
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("🚀 Backend running on port", PORT);
});
