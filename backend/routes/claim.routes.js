import express from "express";
import {
  fileClaim,
  getMyClaims,
  getClaimById,
  updateClaim,
} from "../controllers/claim.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/", auth, fileClaim);
router.get("/my-claims", auth, getMyClaims);
router.get("/:id", auth, getClaimById);
router.put("/:id", auth, updateClaim);

export default router;
