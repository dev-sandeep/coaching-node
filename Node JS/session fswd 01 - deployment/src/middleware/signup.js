const { Customers } = require("./../../model/Customers");
const { responseCreator } = require("../utils/responseCreator");

exports.signupMiddleware = async(req, res, next)=>{
    const isExists = await Customers.exists({email: req.body.email});
    if(!isExists){
        next();
    }else{
        const resp = responseCreator("Email already exists");
        res.status(500).send(resp);
    }
}