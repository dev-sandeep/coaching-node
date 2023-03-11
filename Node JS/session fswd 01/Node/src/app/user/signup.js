const { SUCCESS_REQUEST } = require("../../utils/messages.json");
const { responseCreator } = require("../../utils/responseCreator");

exports.signup = (request, response)=>{
    response.send(responseCreator(SUCCESS_REQUEST));
}