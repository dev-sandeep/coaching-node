const { SUCCESS_REQUEST } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { Chefs } = require("../../../model/Chefs");

exports.topChef = async (request, response)=>{
    const data = await Chefs.find({}).sort({name: -1}).select({
        name: 1,
        mobile: 1,
        dp_url: 1,
        email: 1,
        desc: 1
    });
    if(data.length > 0){
        response.send(responseCreator(SUCCESS_REQUEST, {data: data}));    
    }else{
        response.status(500).send(responseCreator("No data found"));
    }
}