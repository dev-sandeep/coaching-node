const { responseCreator } = require("../../utils/responseCreator");
const { createHash } = require("../../utils/utils");
const { Chefs } = require("../../../model/admin");
const {  HASH_KEY } = require("../../utils/constants.json");

exports.adminSignUp = async (req, res) => {
    try {
        const { name, email, mobile, dp_url, desc, password } = req.body;
        await Chefs.create({
            "name": name,
            "mobile": mobile,
            "dp_url": dp_url,
            "email": email,
            "desc": desc,
            "token": createHash(password + HASH_KEY),
            "password": createHash(password),
        });

        const respObject = responseCreator("Signed up successfully");
        res.send(respObject);
    } catch (err) {
        console.log(err);
        const respObject = responseCreator("Error while signing up", err);
        res.status(400).send(respObject);
    }
}