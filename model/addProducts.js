const { Schema, model, SchemaType } = require('mongoose');

const productsSchema = new Schema({
    name: String,
    price: Number,
    desc: String,
    ts: {
        type: Date,
        default: Date.now()
    },
    chid: {
        type: String,
    }
});

const Add = model('Items', productsSchema);
module.exports = { Add }