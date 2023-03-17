const { SUCCESS_REQUEST, HASH_KEY } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { createHash } = require("../../utils/utils");
const { Products } = require("../../../model/Products");

exports.addProduct = async (request, response) => {
  try {
    const {name, price, desc, ts, chid } = request.body;

    const isExists = await Products.findOne({name}); 

    if(isExists ){
        const respObject = responseCreator("Item already exists");
        response.status(400).send(respObject);
        return;
    }

    await Products.create({
        name,
        price,
        desc,
        ts: Date.now(),
        chid
    });

    const respObject = responseCreator("Item added successfully");
    response.send(respObject);
  } catch (err) {
    console.log(err);
    const respObject = responseCreator("Error while adding items", err);
    response.status(400).send(respObject);
  }
};