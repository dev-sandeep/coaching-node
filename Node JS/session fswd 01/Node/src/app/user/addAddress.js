const { SUCCESS_REQUEST } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { Address } = require("../../../model/Address");
const { fetchCustomerID } = require("../../utils/getID");

exports.addAddress = async (request, response) => {
  const customerData = await fetchCustomerID(request.header("user_id"));
  const customerID = customerData !== undefined ? customerData.id : undefined;
  if (request.header("user_id") && customerID !== undefined) {
    try {
      const { id, line1, line2, city, state, phone } = request.body;
      if (
        id !== undefined &&
        line1 !== undefined &&
        line2 !== undefined &&
        city !== undefined &&
        state !== undefined &&
        phone !== undefined
      ) {
        await Address.create({
          id: id,
          line1: line1,
          line2: line2,
          city: city,
          state: state,
          phone: phone,
          cid: customerID,
        });
        response
          .status(200)
          .send(responseCreator("address created successfully"));
      } else {
        response.status(400).send(responseCreator("details not provided"));
      }
    } catch (err) {
      const respObject = responseCreator(
        "customer address does not exist for the Id",
        err
      );
      response.status(500).send(respObject);
    }
  } else {
    response
      .status(400)
      .send(responseCreator("user token not found - bad request"));
  }
};
