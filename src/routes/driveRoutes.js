const express = require("express");
const multer = require("multer");
const { authenticateGoogle } = require("../middleware/authMiddleware");
const driveController = require("../controllers/driveController");

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Temporary file storage

// File operations
router.post(
  "/upload",
  authenticateGoogle,
  upload.single("file"),
  driveController.uploadFile
);
router.get("/files", authenticateGoogle, driveController.listFiles);
router.get(
  "/download/:fileId",
  authenticateGoogle,
  driveController.downloadFile
);
router.delete(
  "/delete/:fileId",
  authenticateGoogle,
  driveController.deleteFile
);

module.exports = router;
