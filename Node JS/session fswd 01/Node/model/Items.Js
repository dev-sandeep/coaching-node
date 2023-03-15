const { Schema, model } = require("mongoose");

const itemsSchema = new Schema({
  id: {
    type: Number,
    required: true,
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
    type: Number,
    required: true,
  },
  imgs: {
    type: Object,
    required: true,
  },
});

const Items = model("Items", itemsSchema, "items");
exports.Items = Items;
