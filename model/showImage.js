const mongoose = require("mongoose");

const ShowImageSchema = new mongoose.Schema({
  image: { type: String },
});

const showsImageModel = mongoose.model("comedy", ShowImageSchema, "comedy");

module.exports = showsImageModel;
