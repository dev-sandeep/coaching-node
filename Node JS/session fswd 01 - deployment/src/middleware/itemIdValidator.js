const { responseCreator } = require("./../utils/responseCreator");
const { Products } = require("./../../model/Products");

exports.itemIdValidator = async (request, response, next)=>{
    const itid = request.query.itid;
    /**
     * check if itid is valid
     */
    if(!itid){
        response.status(400).send(responseCreator("Item id is mandatory field"));
    }

    // check if itid exists
    try{
        const isExists = await Products.exists({_id: itid.toString()});
        if(isExists?._id){
            next();
        }else{
            const resp = responseCreator("Item id does not exists");
            response.status(400).send(resp);
            next();
        }
    }catch(e){
        response.status(400).send(responseCreator("Item id does not exists"));
    }
}