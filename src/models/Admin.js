const Admin = require("../models/Admin");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  is_creator: { type: Boolean, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  rasm: { type: String, required: true },
  updatedAT: { type: Date, default: Date.now },
  createdAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Admin", adminSchema);



// Parolni hash qilish (yangi admin yaratishda)
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

