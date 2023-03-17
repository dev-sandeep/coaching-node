const { SUCCESS_REQUEST, HASH_KEY } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { createHash } = require("../../utils/utils");
const { Customers } = require("../../../model/Customers");

exports.signup = async (request, response) => {
  try {
    const { name, phone, email, password } = request.body;
    await Customers.create({
      name: name,
      phone: phone,
      email: email,
      token: createHash(password + HASH_KEY),
      password: createHash(password),
    });

    const respObject = responseCreator("Signed up successfully");
    response.send(respObject);
  } catch (err) {
    console.log(err);
    const respObject = responseCreator("Error while signing up", err);
    response.status(400).send(respObject);
  }
};
