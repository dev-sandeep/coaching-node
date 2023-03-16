const { SUCCESS_REQUEST } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");

exports.login = (request, response)=>{
    response.send(responseCreator(SUCCESS_REQUEST));
}