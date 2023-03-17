const { responseCreator } = require("../utils/responseCreator");
const { MISSING_TOKEN } = require("../utils/constants.json");
const { Chefs } = require("./../../model/Chefs");

exports.adminTokenValidate = async (request, response, next) => {
    const token = request.header("token");
    const isExists = await Chefs.find({ token });
    
    if (isExists && isExists.length > 0) {
        request.body.chid = isExists[0]._id;
        next();
    } else {
        response.status(400).send(responseCreator(MISSING_TOKEN));
    }
};
