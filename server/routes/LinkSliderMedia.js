const express = require("express");
const router = express.Router();
const imageModel = require("../models/mediaUpload");
const sliderModel = require("../models/sliderModel");

// ...

router.post("/:sliderId/images/:imageName", async (req, res) => {
  const { sliderId, imageName } = req.params;

  try {
    const slider = await sliderModel.findById(sliderId);

    if (!slider) {
      return res.status(404).json({ error: "Diapositive non trouvée." });
    }

    // Vérifier si l'image existe
    const image = await imageModel.findOne({ imageName });

    if (!image) {
      return res.status(404).json({ error: "Image non trouvée." });
    }

    // Mettre à jour les champs de l'image
    image.slider = sliderId;
    image.sliderName = slider.name; // Supposons que le modèle slider a un champ "name"
    await image.save();

    // Ajouter le nom de l'image à la liste d'images de la diapositive
    slider.images.push(imageName);
    await slider.save();

    res.status(200).json({
      message: "Image ajoutée à la diapositive avec succès.",
      sliderName: slider.name,
    });

    // Supprimer le slider s'il ne contient plus d'image
    if (slider.images.length === 0) {
      await sliderModel.findByIdAndDelete(sliderId);
      console.log(`Slider ${sliderId} supprimé car il ne contient plus d'images.`);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error:
          "Une erreur s'est produite lors de l'ajout de l'image à la diapositive.",
      });
  }
});

module.exports = router;
