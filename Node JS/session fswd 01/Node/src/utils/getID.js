const { Customers } = require("../../model/Customers");
const { Chefs } = require("../../model/Chefs");

exports.fetchCustomerID = async (token) => {
  return (customerID = await Customers.find({ token: token }, "id", {
    lean: true,
  })
    .exec()
    .then((data) => {
      return data[0];
    }));
};

exports.fetchChefID = async (token) => {
  return (chefID = await Chefs.find({ token: token }, "id", { lean: true })
    .exec()
    .then((data) => {
      return data[0];
    }));
};

//token: request.header("user_id")
