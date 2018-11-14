const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
 name: {
   type: String
 },
 description: {
   type: String
 }
});

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;