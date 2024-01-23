const express = require("express");
const multer = require("multer");
const path = require("path");
const Router = express.Router();

const reactBuildDir = "reactjs/build";
const uploadDir = "uploads";

Router.use("/" + uploadDir, express.static(uploadDir));
Router.use(express.static(path.join(__dirname, "../" + reactBuildDir)));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir + "/");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.${file.mimetype.split("/")[1]}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

Router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

Router.get("*", (req, res) => {
  console.log("ReactJS project running");

  res.sendFile(path.join(__dirname + "/reactjs/build/index.html"));
});

Router.post("/", upload.single("file"), (req, res) => {
  console.log("Arquivo enviado com sucesso");

  const imagePath =
    uploadDir + "/" + req.file.filename.replace(/\\/g, path.sep);

  const response = `http://localhost:3030/${imagePath}`; // IF you're running from CRA please add full route here http://localhost:${port}/${imagePath}

  res.json({
    location: response,
    url: response,
  });
});

module.exports = Router;

// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const Router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/images'); // Dossier où les fichiers seront stockés
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     const fileExtension = path.extname(file.originalname);
//     cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
//   },
// });

// const upload = multer({ storage: storage });

// Router.post('/', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'Aucun fichier téléchargé.' });
//   }

//   const imageUrl = `http://localhost:3030/images/${req.file.filename}`;
//   res.json({ imageUrl });
// });

// module.exports=Router
