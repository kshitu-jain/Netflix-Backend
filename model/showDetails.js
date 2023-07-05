const mongoose = require("mongoose");

const ShowsDetailsSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  release: { type: String },
  description: { type: String },
  starring: { type: String },
});

const showsModel = mongoose.model("showsDetails", ShowsDetailsSchema, "showDetails");

module.exports = showsModel;
