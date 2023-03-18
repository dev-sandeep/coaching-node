const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  cid: {//customer id
    type: String,
    required: true,
  },
  itid: {//item id
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  aid: {//address id
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  ts: {
    type: Number,
    required: true,
    default: Date.now()
  },
});

const Order = model("Order", orderSchema, "orders");
exports.Orders = Order;
