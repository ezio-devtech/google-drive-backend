const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();
// Google OAuth flow
router.get("/google", authController.googleAuth);
router.get("/google/callback", authController.googleAuthCallback);

module.exports = router;
