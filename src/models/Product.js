const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  model: String,
  country: String,
  price: Number,
  updatedAT: { type: Date, default: Date.now },
  createdAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
