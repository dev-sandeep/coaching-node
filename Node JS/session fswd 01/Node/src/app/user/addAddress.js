const {
  SUCCESS_REQUEST,
  MISSING_TOKEN,
  MISSING_DETAILS,
  ADDRESS_NOT_CREATED,
  USER_NOT_FOUND,
} = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { Address } = require("../../../model/Address");
const { fetchCustomerID } = require("../../utils/getID");

exports.addAddress = async (request, response) => {
  if (request.header("user_id") !== undefined) {
    const customerData = await fetchCustomerID(request.header("user_id"));
    const customerID = customerData !== undefined ? customerData.id : undefined;
    if (customerID !== undefined) {
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
            .send(responseCreator(SUCCESS_REQUEST, request.body));
        } else {
          response.status(400).send(responseCreator(MISSING_DETAILS));
        }
      } catch (err) {
        response.status(500).send(responseCreator(ADDRESS_NOT_CREATED, err));
      }
    } else {
      response.status(400).send(responseCreator(USER_NOT_FOUND));
    }
  } else {
    response.status(400).send(responseCreator(MISSING_TOKEN));
  }
};
