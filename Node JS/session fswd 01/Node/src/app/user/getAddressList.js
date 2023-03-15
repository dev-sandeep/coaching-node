const { SUCCESS_REQUEST } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { fetchCustomerID } = require("../../utils/getID");
const { Address } = require("../../../model/Address");

exports.getAddress = async (request, response) => {
  const customerData = await fetchCustomerID(request.header("user_id"));
  const customerID = customerData !== undefined ? customerData.id : undefined;
  if (request.header("user_id") && customerID !== undefined) {
    try {
      const addressList = await Address.find(
        { cid: customerID },
        "line1 line2 city state",
        { lean: true }
      );
      if (addressList[0] !== undefined) {
        response
          .status(200)
          .send(responseCreator(SUCCESS_REQUEST, addressList));
      } else {
        response
          .status(404)
          .send(responseCreator("address could not be fetched"));
      }
    } catch (err) {
      console.log(err);
      response
        .status(400)
        .send(responseCreator("address could not be fetched"));
    }
  } else {
    response.status(400).send(responseCreator("Bad Request"));
  }
};
