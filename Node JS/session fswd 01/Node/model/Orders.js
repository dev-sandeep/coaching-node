const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  cid: {
    type: Number,
    required: true,
  },
  itid: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  aid: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
});

const Order = model("Order", orderSchema, "orders");
exports.Orders = Order;
