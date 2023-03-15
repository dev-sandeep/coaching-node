const { fetchCustomerID } = require("../../utils/getID");
const { Address } = require("../../../model/Address");
const { responseCreator } = require("../../utils/responseCreator");

exports.editAddress = async (request, response) => {
  if (request.header("user_id") !== undefined) {
    const customerData = await fetchCustomerID(request.header("user_id"));
    const customerID = customerData !== undefined ? customerData.id : undefined;
    const { addressid, line1, line2, city, state, phone } = request.body;
    if (addressid !== undefined) {
      if (
        line1 !== undefined &&
        line2 !== undefined &&
        city !== undefined &&
        state !== undefined &&
        phone !== undefined
      ) {
        await Address.findOneAndUpdate(
          { id: addressid },
          {
            id: addressid,
            line1: line1,
            line2: line2,
            city: city,
            state: state,
            phone: phone,
            cid: customerID,
          }
        );
      } else {
        response.status(400).send(responseCreator("details not found"));
      }
    } else {
      response.status(400).send(responseCreator("address not found"));
    }
  } else {
    response.status(400).send(responseCreator("token not found"));
  }
};
