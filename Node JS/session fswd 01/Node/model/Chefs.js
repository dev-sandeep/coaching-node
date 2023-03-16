const { Schema, model } = require("mongoose");

const chefSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  dp_url: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  aid: Number,
});

const Chefs = model("Chefs", chefSchema, "chefs");
exports.Chefs = Chefs;
