const { fetchCustomerID } = require("../../utils/getID");
const { Address } = require("../../../model/Address");
const { responseCreator } = require("../../utils/responseCreator");

exports.editAddress = async (request, response) => {
  const customerData = await fetchCustomerID(request.header("token"));
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
      response.status(200).send(responseCreator("address updated sucessfully"));
    } else {
      response.status(400).send(responseCreator("details not found"));
    }
  } else {
    response.status(400).send(responseCreator("address not found"));
  }
};
