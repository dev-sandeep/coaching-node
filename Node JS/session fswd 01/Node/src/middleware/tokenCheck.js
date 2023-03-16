const { responseCreator } = require("../utils/responseCreator");
const { MISSING_TOKEN } = require("../utils/constants.json");

exports.tokenCheckMiddleware = (request, response, next) => {
  const isExists = request.header("user_id");
  if (isExists !== undefined) {
    next();
  } else {
    response.status(400).send(responseCreator(MISSING_TOKEN));
  }
};
