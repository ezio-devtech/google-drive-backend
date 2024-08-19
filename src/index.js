const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const driveRoutes = require("./routes/driveRoutes");

const app = express();

// CORS configuration
app.use(cors({ origin: "http://localhost:3000" }));

// Routes
app.use("/auth", authRoutes);
app.use("/api/drive", driveRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
