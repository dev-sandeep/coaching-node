const { responseCreator } = require("../../utils/responseCreator");
const { Add } = require("../../../model/addProducts")

exports.addProducts = async (req, res) => {
    try {
        const { name, price, desc,  chid } = req.body;
        await Add.create({
            "name": name,
            "price": price,
            "desc": desc,   
            "chid": chid,
        })
        const respObject = responseCreator("Product Added Successfullt");
        res.status(201).send(respObject);
    } catch (err) {
        console.log(err);
        const resObject = responseCreator("Error while signing up", err);
        res.status(400).send(resObject);
    }
}