const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
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
