import mongoose from "mongoose";

const insurancePolicySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverageType: {
      type: String,
      enum: ["crop_damage", "weather", "pest", "flood", "drought", "comprehensive"],
      required: true,
    },
    premiumAmount: {
      type: Number,
      required: true,
    },
    coverageAmount: {
      type: Number,
      required: true,
    },
    durationMonths: {
      type: Number,
      required: true,
    },
    eligibleCrops: [
      {
        type: String,
      },
    ],
    eligibleStates: [
      {
        type: String,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const InsurancePolicy = mongoose.model("InsurancePolicy", insurancePolicySchema);
export default InsurancePolicy;
