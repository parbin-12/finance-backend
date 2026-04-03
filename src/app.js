import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import userRoutes from "./routes/user.routes.js";
import recordRoutes from "./routes/record.routes.js";

const app = express();

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);
app.use("/api/records", recordRoutes);

export default app;