import express from "express";
import { getDashboardStats, getRecentActivity } from "../controllers/dashboard.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/stats", auth, getDashboardStats);
router.get("/recent-activity", auth, getRecentActivity);

export default router;
