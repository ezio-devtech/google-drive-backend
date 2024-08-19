const googleDriveService = require("../services/googleDriveService");

exports.googleAuth = (req, res) => {
  const authUrl = googleDriveService.oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/drive.file"],
  });

  res.redirect(authUrl);
};

exports.googleAuthCallback = async (req, res) => {
  const { code } = req.query;
  try {
    const { tokens } = await googleDriveService.oauth2Client.getToken(code);
    googleDriveService.oauth2Client.setCredentials(tokens);
    res.redirect("http://localhost:3000/drive");
  } catch (error) {
    res.status(500).send("Authentication failed");
  }
};