const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  email: String,
  password: String,
  full_name: String,
  region: String,
  phone: String,
  updatedAT: { type: Date, default: Date.now },
  createdAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Client", clientSchema);
