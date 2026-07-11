// server.js

require("dotenv").config(); // Load .env variables

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());

// Test Routes

app.get("/",(req,res)=>{
    res.send(
        "Hello"
    );
});

app.post("/api/echo", (req, res) => {
  res.json({ youSent: req.body });
});

app.get("/api/data", (req, res) => {
  res.json({
    name: "redwood",
  });
});

app.get("/api/userData", (req, res) => {
  res.json({
    name: "Aditya",
  });
});

// ==================== API Routes ====================

// Woods Routes
const woodRoutes = require("./routes/woods");
app.use("/api/woods", woodRoutes);

// User Routes
const userRoutes = require("./routes/user"); // <-- Corrected
app.use("/api/users", userRoutes);

// Auth Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// ====================================================

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });