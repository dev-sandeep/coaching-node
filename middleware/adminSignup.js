const { Chefs } = require("./../../model/admin");
const { responseCreator } = require("../utils/responseCreator");

exports.adminSignupMiddleware = async (req, res, next) => {
    const isExists = await Chefs.exists({ email: req.body.email });
    if (!isExists) {
        next();
    } else {
        const resp = responseCreator("Email already exists");
        res.status(500).send(resp);
    }
}