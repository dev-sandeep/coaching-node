const { SUCCESS_REQUEST } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { Address } = require("../../../model/Address");
const { fetchCustomerID } = require("../../utils/getID");

exports.addAddress = async (request, response) => {
    console.log("entering function")
  const customerData = await fetchCustomerID(request.header("user_id"));
  const customerID = customerData !== undefined ? customerData.id : undefined;
  if (request.header("user_id") && customerID !== undefined) {
    console.log("if")
    try {
      const { id, line1, line2, city, state, phone } = request.body;
      await Address.create({
        id: id,
        line1: line1,
        line2: line2,
        city: city,
        state: state,
        phone: phone,
        cid: customerID,
      });

      const respObject = responseCreator("address created");
      response.status(200).send(respObject);
    } catch (err) {
      console.log(err);
      const respObject = responseCreator(
        "customer address does not exist for the Id",
        err
      );
      response.status(500).send(respObject);
    }
  } else {
    console.log("else")
    response
    .satus(400)
      .send(responseCreator("user token not found-bad request"));
  }
};
