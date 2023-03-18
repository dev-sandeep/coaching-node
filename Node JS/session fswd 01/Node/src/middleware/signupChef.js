const { Chefs } = require("./../../model/Chefs");
const { responseCreator } = require("../utils/responseCreator");

exports.signupChefMiddleware = async(req, res, next)=>{
    const isExists = await Chefs.exists({email: req.body.email});
    if(!isExists){
        next();
    }else{
        const resp = responseCreator("Email already exists");
        res.status(500).send(resp);
    }
}