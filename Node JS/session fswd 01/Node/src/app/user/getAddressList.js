const {
  SUCCESS_REQUEST,
  MISSING_TOKEN,
  BAD_REQUEST,
  ADDRESS_NOT_FOUND,
} = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { fetchCustomerID } = require("../../utils/getID");
const { Address } = require("../../../model/Address");

exports.getAddress = async (request, response) => {
  //if token is presents, fetches the customer id from DB
  const customerData = await fetchCustomerID(request.header("token"));
  const customerID = customerData !== undefined ? customerData.id : undefined;
  //if the data exists for the token in DB - then does the following
  if (customerID !== undefined) {
    try {
      //fetches the address data from the Address collection in DB
      const addressList = await Address.find(
        { cid: customerID },
        "id line1 line2 city state",
        { lean: true }
      );
      //if no address is fetched from DB - No address exists for the Customer in DB - returns error, else gives success message with address list
      if (addressList[0] !== undefined) {
        response
          .status(200)
          .send(responseCreator(SUCCESS_REQUEST, addressList));
      } else {
        response.status(404).send(responseCreator(ADDRESS_NOT_FOUND));
      }
    } catch (err) {
      console.log(err);
      response.status(400).send(responseCreator(ADDRESS_NOT_FOUND));
    }
  } else {
    // if the Customer ID does not exist in the DB, gives Bad Request message
    response.status(400).send(responseCreator(BAD_REQUEST));
  }
};
