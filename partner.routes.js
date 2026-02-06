import express from "express";
const router = express.Router();

router.post("/join", (req, res) => {
  res.json({ message: "Partner joined" });
});

router.get("/nearby", (req, res) => {
  res.json({ partners: [] });
});

export default router;