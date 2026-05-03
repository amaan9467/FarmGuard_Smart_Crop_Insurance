import mongoose from "mongoose";

const claimSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    policyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsurancePolicy",
      required: true,
    },
    enrollmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Enrollment",
      required: true,
    },
    farmLocation: {
      state: { type: String, required: true },
      district: { type: String, required: true },
      village: { type: String, required: true },
    },
    damageType: {
      type: String,
      required: true,
    },
    damageDescription: {
      type: String,
      default: "",
    },
    damageDate: {
      type: Date,
      required: true,
    },
    estimatedLoss: {
      type: Number,
      required: true,
    },
    approvedAmount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "under_review", "approved", "rejected", "settled"],
      default: "pending",
    },
    documents: [
      {
        type: String, // URLs or paths to documents/images
      },
    ],
    reviewNotes: {
      type: String,
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reviewedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Claim = mongoose.model("Claim", claimSchema);
export default Claim;
