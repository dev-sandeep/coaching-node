const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  id: {
    type: String,
    default: Date.now()
  },
  itid: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Images = model("Images", imageSchema, "images");
exports.Images = Images;
