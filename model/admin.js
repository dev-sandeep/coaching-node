const { Schema, model } = require('mongoose')
const adminSchema = new Schema({
    name: String,
    mobile: Number,
    dp_url: String,
    email: {
        type: String,
        required: true
    },
    desc: String,
    password: {
        type: String,
        required: true
    },
    token: String
})

const Admin = model('Chefs', adminSchema, 'chefs');
exports.Chefs = Admin;