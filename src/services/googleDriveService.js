const { google } = require("googleapis");
const fs = require("fs");

// Google OAuth2 setup
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Google Drive API setup
const drive = google.drive({ version: "v3", auth: oauth2Client });

exports.oauth2Client = oauth2Client;
exports.drive = drive;

// Check if the user is authenticated
exports.isAuthenticated = () => {
  const tokens = oauth2Client.credentials;
  return tokens && tokens.access_token;
};
