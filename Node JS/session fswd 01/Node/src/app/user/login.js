const { SUCCESS_REQUEST } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { Customers } = require("../../../model/Customers");
const { createHash } = require("../../utils/utils");

exports.login = async (request, response)=>{
    const { email, password } = request.body;
    if(!email || !password){
        response.status(400).send(responseCreator("Email and Password are mandatory field."));
    }
    /**
     * checking if data exists 
     */
    const findData = await Customers.find({
        email,
        password: createHash(password)
    })
    const token = findData[0]?.token || false;
    if(token){
        response.send(responseCreator(SUCCESS_REQUEST, {token: token}));    
    }else{
        response.status(500).send(responseCreator("Invalid Credentials"));
    }
}