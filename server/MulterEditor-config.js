const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "video/mp4": "mp4",
  "video/webm": "webm",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/imageEditor");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    if (extension) {
      callback(null, name + Date.now() + "." + extension);
    } else {
      callback({ message: "type de fichier invalide" }, false);
    }
  },
});

const fileFilter = (req, file, callback) => {
  const isValidFileType = MIME_TYPES[file.mimetype];
  if (isValidFileType) {
    callback(null, true);
  } else {
    callback({ message: "type de fichier invalide" }, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
