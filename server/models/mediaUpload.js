const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true,
  },
  slider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Slider', // Référence au modèle slider
  },
  sliderName: {
    type: String,
  },
});

const imageModel = mongoose.model("Image", imageSchema);
module.exports = imageModel;
