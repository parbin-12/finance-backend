import express from "express";
import { getDashboard } from "../controllers/dashboard.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();
//dashboard
router.get(
  "/",
  authMiddleware,
  roleMiddleware(["admin", "analyst"]),
  getDashboard
);

export default router;