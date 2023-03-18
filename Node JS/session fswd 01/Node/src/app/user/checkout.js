const {
  ORDER_SUCCESS_REQUEST,
  ORDER_RQUEST_FAILED,
  MISSING_TOKEN,
  USER_NOT_FOUND,
} = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { fetchCustomerID } = require("../../utils/getID");
const { Orders } = require("../../../model/Orders");
const mongodb = require("mongodb");

exports.checkout = async (request, response) => {
  //sending the token to fetchCustomerID to get the customer ID from DB
  const customerData = await fetchCustomerID(request.header("token"));
  const customerID = customerData !== undefined ? customerData.id : undefined;
  console.log(customerID);
  //if the customerID is not undefined - data exists in DB - then Do the following
  if (customerID !== undefined) {
    try {
      //get itemID, qty & addressID from request.body
      const { items, qty, addressId } = request.body;
      //if all the details are present in request.body - does the below
      if (
        items !== undefined &&
        items[0] !== undefined &&
        addressId !== undefined
      ) {
        //creates new order
        await Orders.create({
          cid: customerID,
          items: items,
          aid: addressId,
          status: 0, //pending
          ts: Date.now(),
        });

        //success response for creation of order
        response.status(200).send(responseCreator(ORDER_SUCCESS_REQUEST));
      } else {
        //failure response for order
        response.status(400).send(responseCreator(ORDER_RQUEST_FAILED));
      }
    } catch (err) {
      console.log(err);
      //if any error - sends a failure message
      response.status(400).send(responseCreator(ORDER_RQUEST_FAILED, err));
    }
  } else {
    //if the data for the token does not exist in DB - sends the Error Message
    response.status(400).send(responseCreator(USER_NOT_FOUND));
  }
};
