const { Schema, model } = require("mongoose");

const addressSchema = new Schema({
  line1: {
    type: String,
    required: true,
  },
  line2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  cid: {
    type: Number,
    required: true,
  },
});

const Address = model("Address", addressSchema, "address");
exports.Address = Address;
