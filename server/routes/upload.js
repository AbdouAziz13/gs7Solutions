const express = require("express");
const upload = require("../multer-Img-config");
const router = express.Router();
const imageModel = require("../models/mediaUpload");

const path = require("path");
const fs = require("fs");

// upload images
// ---------------
router.post("/images", upload.array("images", 5), async (req, res) => {
  // Utilisez `upload.array()` avec le nom du champ "images" et une limite optionnelle (5 dans cet exemple)

  const imageNames = req.files.map((file) => file.filename);

  try {
    const newImages = imageNames.map((imageName) => ({
      imageName: imageName,
    }));

    await imageModel.insertMany(newImages);

    res
      .status(200)
      .json({ message: "Les images ont été enregistrées avec succès." });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur s'est produite lors de l'enregistrement des images.",
    });
  }
});
// recuperer photos
// -------------------
router.get("/images", async (req, res) => {
  const listOfImages = await imageModel.find({});
  if (!listOfImages) {
    res.status(500).json({ error: "erreur l'hors du chargement des images" });
  }

  res.json({ listOfImages });
});

// supprimer photos
router.delete("/images/:imageId", async (req, res) => {
  const imageId = req.params.imageId;

  try {
    // Récupérer le nom de fichier de l'image avant de la supprimer de la base de données
    const imageToDelete = await imageModel.findById(imageId);
    if (!imageToDelete) {
      return res.status(404).json({ error: "L'image n'a pas été trouvée." });
    }

    // Supprimer l'image de la base de données
    await imageModel.findByIdAndDelete(imageId);

    // Supprimer le fichier associé dans le dossier de stockage
    const imagePath = path.join(
      __dirname,
      "../public/images/",
      imageToDelete.imageName
    );
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Erreur lors de la suppression du fichier :", err);
      }
    });

    res.status(200).json({ message: "La photo a été supprimée avec succès." });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur s'est produite lors de la suppression de la photo.",
    });
  }
});

// ----------------------------

module.exports = router;

// error
