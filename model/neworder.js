const { Schema, model, SchemaType } = require('mongoose');

const client = new MongoClient('mongodb://127.0.0.1:27017');
client.connect();
const productsSchema = new Schema({
    id: integer,
    customerid: integer,
    itemid: integer,
    quantity: integer,
    addressid: integer,
    ts: {
        type: integer,
        required: true,
    },
}) 
 
const Add = model('Order', OrderSchema);
module.exports = { Add }