const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  phone: Number,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: Date.now()
  },
  token: String,
});

const User = model("Customer", userSchema, "customers");
exports.Customers = User;
