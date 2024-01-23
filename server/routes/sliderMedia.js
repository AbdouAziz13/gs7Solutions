const express = require("express");
const router = express.Router();
const sliderModel = require("../models/sliderModel");

// exemple de crétion de slider
router.post("/create", async (req, res) => {
  try {
    const { name } = req.body;
    const newSlider = await sliderModel.create({ name });
    res.json(newSlider);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la création du slider." });
  }
});

// recuperation des slider
router.get("/", async (req, res) => {
  const sliderList = await sliderModel.find({});

  res.json(sliderList);
});

// delete  slider
router.delete("/:sliderId", async (req, res) => {
  const sliderId = req.params.sliderId;

  try {
    // Supprimer publication grace a son id

    await sliderModel.findByIdAndDelete(sliderId);

    res.status(200).json({ message: "slider supprimée avec succes" });
  } catch (error) {
    res.status(500).json({
      error:
        "Une erreur s'est produite lors de la suppression de la publication",
    });
  }
});

module.exports = router;
