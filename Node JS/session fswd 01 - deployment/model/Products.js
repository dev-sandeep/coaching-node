const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  id: {
    type: String,
    default: Date.now()
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  ts: {
    type: Number,
    required: true,
  },
  chid: {
    type: String,
    required: true,
  },
});

const Product = model("Product", ProductSchema, "items");
exports.Products = Product;
