const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/adminRoutes"); 
const clientRoutes = require("./routes/clientRoutes");
const productTypeRoutes = require("./routes/productTypeRoutes");
const productRoutes = require("./routes/productRoutes.js");

const app = express();

app.use(bodyParser.json());

// MongoDB connection

mongoose.connect('mongodb://localhost:27017/mydatabase')

  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/admins", adminRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/product-types", productTypeRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.use("/api", adminRoutes);


