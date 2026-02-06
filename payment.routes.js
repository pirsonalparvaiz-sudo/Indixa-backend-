import express from "express";
const router = express.Router();

router.post("/create", (req, res) => {
  res.json({
    status: "payment_created",
    orderId: Date.now()
  });
});

export default router;