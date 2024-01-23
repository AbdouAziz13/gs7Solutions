const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      
    },
    images: [
      {
        type: String, // Stocke les noms des images
        ref: "Image", // Fait référence au modèle "Image"
      },
    ],
  });
  
const sliderModel = mongoose.model("Slider", sliderSchema);
module.exports = sliderModel;
