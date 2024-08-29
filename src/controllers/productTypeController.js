const ProductType = require("../models/ProductType.js");

// Create a new product type
exports.createProductType = async (req, res) => {
  try {
    const productType = new ProductType(req.body);
    await productType.save();
    res.status(201).json(productType);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all product types
exports.getAllProductTypes = async (req, res) => {
  try {
    const productTypes = await ProductType.find();
    res.status(200).json(productTypes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get product type by ID
exports.getProductTypeById = async (req, res) => {
  try {
    const productType = await ProductType.findById(req.params.id);
    if (!productType)
      return res.status(404).json({ message: "ProductType not found" });
    res.status(200).json(productType);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update product type by ID
exports.updateProductType = async (req, res) => {
  try {
    const productType = await ProductType.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!productType)
      return res.status(404).json({ message: "ProductType not found" });
    res.status(200).json(productType);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete product type by ID
exports.deleteProductType = async (req, res) => {
  try {
    const productType = await ProductType.findByIdAndDelete(req.params.id);
    if (!productType)
      return res.status(404).json({ message: "ProductType not found" });
    res.status(200).json({ message: "ProductType deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
