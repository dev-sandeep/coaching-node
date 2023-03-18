const { SUCCESS_REQUEST, HASH_KEY } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { createHash } = require("../../utils/utils");
const { Products } = require("../../../model/Products");

exports.getProducts = async (request, response) => {
  try {
    const { chid } = request.body;

    const items = await Products.find({chid})

    const respObject = responseCreator("Items loaded", {items});
    response.send(respObject);
  } catch (err) {
    console.log(err);
    const respObject = responseCreator("Error while loading items", err);
    response.status(400).send(respObject);
  }
};