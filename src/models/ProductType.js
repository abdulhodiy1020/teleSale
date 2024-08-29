const mongoose = require("mongoose");

const productTypeSchema = new mongoose.Schema({
  name: String,
  updatedAT: { type: Date, default: Date.now },
  createdAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ProductType", productTypeSchema);
