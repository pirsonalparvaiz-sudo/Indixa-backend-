import express from "express";
import cors from "cors";

import userRoutes from "./user.routes.js";
import partnerRoutes from "./partner.routes.js";
import adminRoutes from "./admin.routes.js";
import paymentRoutes from "./payment.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    service: "Indixa Backend Running"
  });
});

app.use("/api/users", userRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/payments", paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});