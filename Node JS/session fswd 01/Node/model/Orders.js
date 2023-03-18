const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  id: {
    type: String,
    default: Date.now()
  },
  cid: {
    //customer id
    type: Number,
    required: true,
  },
  items: {
    //item id
    type: Array,
    required: true,
  },
  aid: {
    //address id
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  ts: {
    type: Number,
    required: true,
    default: Date.now(),
  },
});

const Order = model("Order", orderSchema, "orders");
exports.Orders = Order;
