const { Address } = require("./../../model/Address");
const { responseCreator } = require("../utils/responseCreator");

exports.addressMiddleware = async (request, response, next) => {
  const isExists = await Address.exists({ id: request.body.id });
  if (!isExists) {
    next();
  } else {
    response.status(500).send(responseCreator("Address already exists"));
  }
};
