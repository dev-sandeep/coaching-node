const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  cid: {//customer id
    type: Schema.ObjectId,
    required: true,
  },
  itid: {//item id
    type: Schema.ObjectId,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  aid: {//address id
    type: Schema.ObjectId,
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
