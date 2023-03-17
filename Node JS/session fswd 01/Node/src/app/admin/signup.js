const { SUCCESS_REQUEST, HASH_KEY } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { createHash } = require("../../utils/utils");
const { Chefs } = require("../../../model/Chefs");

exports.adminSignup = async (request, response) => {
  try {
    const { name, mobile, dp_url, email, desc, password, aid } = request.body;
    await Chefs.create({
      name: name,
      dp_url: dp_url,
      desc: desc,
      mobile: mobile,
      email: email,
      aid: aid,
      token: createHash(password + Date.now()),
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


// name, mobile, dp_url, email, desc, password, aid