const {
  ORDER_SUCCESS_REQUEST,
  ORDER_RQUEST_FAILED,
  MISSING_TOKEN,
} = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { fetchCustomerID } = require("../../utils/getID");
const { Orders } = require("../../../model/Orders");

exports.checkout = async (request, response) => {
  const customerData = await fetchCustomerID(request.header("user_id"));
  const customerID = customerData !== undefined ? customerData.id : undefined;
  if (request.header("user_id") && customerID !== undefined) {
    //fetch customer address id from the request.body
    //fetch the customer address using the customer id and address id from Mongo DB
    try {
      const { itemId, qty, addressId } = request.body;
      console.log(request.body);
      //post the itemId, qty, customerid, addressid  and also add a status - 0 to post
      if (
        itemId !== undefined &&
        qty !== undefined &&
        addressId !== undefined
      ) {
        await Orders.create({
          cid: customerID,
          itid: itemId,
          qty: qty,
          aid: addressId,
          status: 0,
        });

        response.send(responseCreator(ORDER_SUCCESS_REQUEST));
      } else {
        response.status(400).send(responseCreator(ORDER_RQUEST_FAILED));
      }
    } catch (err) {
      console.log(err);
      response.status(400).send(responseCreator(ORDER_RQUEST_FAILED, err));
    }
  } else {
    response.status(400).send(responseCreator(MISSING_TOKEN));
  }
};
