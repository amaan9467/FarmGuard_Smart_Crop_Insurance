import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import InsurancePolicy from "../models/insurancePolicy.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../.env") });

const policies = [
  {
    name: "Comprehensive Crop Protection",
    description: "Full coverage against weather, pests, and natural disasters.",
    coverageType: "comprehensive",
    premiumAmount: 500, // per acre
    coverageAmount: 10000, // per acre
    durationMonths: 6,
    eligibleCrops: ["Wheat", "Rice", "Sugarcane", "Cotton"],
    eligibleStates: ["Uttar Pradesh", "Punjab", "Haryana", "Maharashtra"],
    isActive: true,
  },
  {
    name: "Drought Shield",
    description: "Specialized coverage for drought and water scarcity conditions.",
    coverageType: "drought",
    premiumAmount: 300,
    coverageAmount: 8000,
    durationMonths: 12,
    eligibleCrops: ["Millet", "Sorghum", "Maize"],
    eligibleStates: ["Rajasthan", "Gujarat", "Karnataka"],
    isActive: true,
  },
  {
    name: "Pest Defense Premium",
    description: "Protection against locusts and severe pest infestations.",
    coverageType: "pest",
    premiumAmount: 250,
    coverageAmount: 6000,
    durationMonths: 4,
    eligibleCrops: ["Cotton", "Soybean", "Vegetables"],
    eligibleStates: ["Maharashtra", "Madhya Pradesh", "Gujarat"],
    isActive: true,
  },
  {
    name: "Flood Safety Net",
    description: "Coverage for crop damage due to heavy rainfall and flooding.",
    coverageType: "flood",
    premiumAmount: 400,
    coverageAmount: 9000,
    durationMonths: 5,
    eligibleCrops: ["Rice", "Jute", "Sugarcane"],
    eligibleStates: ["Bihar", "Assam", "West Bengal", "Uttar Pradesh"],
    isActive: true,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected for Seeding...");

    await InsurancePolicy.deleteMany();
    console.log("Cleared existing policies");

    await InsurancePolicy.insertMany(policies);
    console.log("Inserted mock policies");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
