const googleDriveService = require("../services/googleDriveService");

exports.authenticateGoogle = (req, res, next) => {
  if (!googleDriveService.isAuthenticated()) {
    return res.status(401).json({ message: "User is not authenticated. Please log in." });
  }
  next();
};
