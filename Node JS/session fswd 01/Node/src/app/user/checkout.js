const {
  ORDER_SUCCESS_REQUEST,
  ORDER_RQUEST_FAILED,
  MISSING_TOKEN,
  USER_NOT_FOUND,
} = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { fetchCustomerID } = require("../../utils/getID");
const { Orders } = require("../../../model/Orders");

exports.checkout = async (request, response) => {
  //checking if there is token present in the request.header
  if (request.header("user_id") !== undefined) {
    //sending the token to fetchCustomerID to get the customer ID from DB
    const customerData = await fetchCustomerID(request.header("user_id"));
    const customerID = customerData !== undefined ? customerData.id : undefined;
    //if the customerID is not undefined - data exists in DB - then Do the following
    if (customerID !== undefined) {
      try {
        //get itemID, qty & addressID from request.body
        const { itemId, qty, addressId } = request.body;
        //if all the details are present in request.body - does the below
        if (
          itemId !== undefined &&
          qty !== undefined &&
          addressId !== undefined
        ) {
          //creates new order
          await Orders.create({
            cid: customerID,
            itid: itemId,
            qty: qty,
            aid: addressId,
            status: 0,
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
  } else {
    //if the token is not present in the header, sends the missing token message
    response.status(400).send(responseCreator(MISSING_TOKEN));
  }
};
