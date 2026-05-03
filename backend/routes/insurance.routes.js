import express from "express";
import {
  getPolicies,
  getPolicyById,
  enrollInPolicy,
  getMyEnrollments,
  cancelEnrollment,
} from "../controllers/insurance.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/policies", getPolicies);
router.get("/policies/:id", getPolicyById);

router.post("/enroll", auth, enrollInPolicy);
router.get("/my-enrollments", auth, getMyEnrollments);
router.put("/enrollments/:id/cancel", auth, cancelEnrollment);

export default router;
