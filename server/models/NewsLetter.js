const mongoose = require("mongoose");

const newsLetterSchema = new mongoose.Schema({
  newsLetterEmail: {
    type: String,
    unique: true,
   
  },
});

const NewsLetterModel = mongoose.model("newsletter", newsLetterSchema);
module.exports = NewsLetterModel;
