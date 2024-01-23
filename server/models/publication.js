const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  publicationBody: {
    type: String,
    require: true,
  },
  publicationUrl: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now 
  }
});

const publicationModel = mongoose.model("Publications", publicationSchema);
module.exports = publicationModel;
