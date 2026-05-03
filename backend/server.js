import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// Resolving __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the parent directory
dotenv.config({ path: path.join(__dirname, "../.env") });

import authRoutes from "./routes/auth.routes.js";
import insuranceRoutes from "./routes/insurance.routes.js";
import claimRoutes from "./routes/claim.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(morgan("dev"));

// Rate limiting for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  message: { msg: "Too many requests, please try again later" },
  standardHeaders: true,
  legacyHeaders: false,
});

// CORS Middleware must be above routes
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:5176",
  "http://localhost:5177",
  process.env.FRONTEND_URL,
].filter(Boolean); // Remove undefined/null

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, etc)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Body Parsing Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/insurance", insuranceRoutes);
app.use("/api/claims", claimRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: err.message || "Server error" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));