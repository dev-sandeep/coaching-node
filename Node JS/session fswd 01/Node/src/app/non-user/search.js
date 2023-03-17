const { SUCCESS_REQUEST } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { Products } = require("../../../model/Products");

exports.search = async (request, response)=>{
    const searchTerm = request.query.q;
    const data = await Products.find({name:{$regex: searchTerm, $options: 'i'}});
    console.log(data);
    console.log(searchTerm);
    if(data.length > 0){
        response.send(responseCreator(SUCCESS_REQUEST, {data: data}));    
    }else{
        response.status(500).send(responseCreator("No data found"));
    }
}