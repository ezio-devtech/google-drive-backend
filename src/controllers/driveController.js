const fs = require("fs");
const googleDriveService = require('../services/googleDriveService');

exports.uploadFile = async (req, res) => {
  try {
    const fileMetadata = { name: req.file.originalname };
    const media = {
      mimeType: req.file.mimetype,
      body: fs.createReadStream(req.file.path),
    };

    const file = await googleDriveService.drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });

    fs.unlinkSync(req.file.path);

    res.json({ message: "File uploaded successfully", fileId: file.data.id });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "File upload failed", error: error.message });
  }
};

exports.listFiles = async (req, res) => {
  try {
    const response = await googleDriveService.drive.files.list({
      pageSize: 10,
      fields: "files(id, name, mimeType, modifiedTime)",
    });

    res.json(response.data.files);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to list files", error: error.message });
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const { fileId } = req.params;

    const response = await googleDriveService.drive.files.get(
      { fileId: fileId, alt: "media" },
      { responseType: "stream" }
    );

    response.data.pipe(res);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to download file", error: error.message });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const { fileId } = req.params;

    await googleDriveService.drive.files.delete({ fileId: fileId });

    res.json({ message: "File deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete file", error: error.message });
  }
};
