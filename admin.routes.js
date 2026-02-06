import express from "express";
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.json({ message: "Admin dashboard" });
});

export default router;