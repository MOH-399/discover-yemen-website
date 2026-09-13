import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/admin/authRoutes.js";

import connectDB from "./config/db.js";
import destinationRoutes from "./routes/destinationRoutes.js";
import logger from "./middleware/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Discover Yemen API",
    status: "Server is running",
  });
});

// API Routes
app.use("/api/admin", authRoutes);
app.use("/api/destinations", destinationRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});