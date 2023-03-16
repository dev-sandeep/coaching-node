const crypto = require('crypto');
const { HASH_KEY } = require("./constants.json");

exports.createHash = (input)=>{
    return crypto.createHash('sha256').update(input+HASH_KEY).digest('base64');
}