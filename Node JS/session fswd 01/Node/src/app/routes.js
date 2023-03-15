/**
 * All the routes goes here
 */

const { signup } = require("./user/signup");
const { signupMiddleware } = require("./../middleware/signup");
const { login } = require("./user/login");
var bodyParser = require("body-parser");
const { productDetails } = require("./user/productDetails");
const { checkout } = require("./user/checkout");
const { getAddress } = require("./user/getAddressList");
const {addAddress} = require("./user/addAddress")

exports.loadRoutes = (app) => {
  app.use(bodyParser.json());

  // user related goes here
  app.post("/signup", signupMiddleware, signup);
  app.post("/login", login);
  app.get("/item/:item_id", productDetails);
  app.post("/order", checkout);
  app.get("/address", getAddress);
  app.post("/create_address",addAddress)
};
//routes related to home page - home page
//routes related to user activity - login, signup, checkout, order, address
//routes related to admin activity
