/**
 * All the routes goes here
 */

const { signup } = require("./user/signup");
const { adminSignup } = require("./admin/signup");
const { signupMiddleware } = require("./../middleware/signup");
const { adminTokenValidate } = require("./../middleware/adminTokenValidate");
const { signupChefMiddleware } = require("./../middleware/signupChef");
const { login } = require("./user/login");
const { amdminLogin } = require("./admin/login");
const { addProduct } = require("./admin/addProducts");
const { getProducts } = require("./admin/getProducts");
// const { singleImageUpload } = require("./admin/singleImageUpload");
var bodyParser = require("body-parser");
const { productDetails } = require("./user/productDetails");
const { checkout } = require("./user/checkout");
const { getAddress } = require("./user/getAddressList");
const { addAddress } = require("./user/addAddress");
const { editAddress } = require("./user/editAddress");
const { search } = require("./non-user/search");
const { recent } = require("./non-user/recent");
const { addressMiddleware } = require("../middleware/address");
const { tokenCheckMiddleware } = require("../middleware/tokenCheck");
// const { uoloader } = require("../middleware/uploader");

exports.loadRoutes = (app) => {
  app.use(bodyParser.json());

  // user related goes here
  //routes related to user activity - login, signup, checkout, order, address
  app.post("/signup", signupMiddleware, signup);
  app.post("/login", login);
  app.get("/item/:item_id", productDetails); // blame shreyas if any issues
  app.post("/order", tokenCheckMiddleware, checkout); // blame shreyas if any issues
  app.get("/address", tokenCheckMiddleware, getAddress); // blame shreyas and sakshi if any issues
  app.post(
    "/create_address",
    tokenCheckMiddleware,
    addressMiddleware,
    addAddress
  ); // blame shreyas and prem if any issues
  app.put("/update_address", tokenCheckMiddleware, editAddress); // blame prem if any issues

  //routes related to admins
  app.post("/admin/signup", signupChefMiddleware, adminSignup);
  app.post("/admin/login", amdminLogin);
  app.post("/admin/add-products", adminTokenValidate, addProduct);
  app.get("/admin/products", adminTokenValidate, getProducts);

  //routes related to normal non-users
  app.get("/search", search);
  app.get("/recent", recent);
};
    // user related goes here
//routes related to admin activity
