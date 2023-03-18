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
const { singleImageUpload } = require("./admin/image/singleImageUpload");
var bodyParser = require("body-parser");
const { productDetails } = require("./user/productDetails");
const { checkout } = require("./user/checkout");
const { getAddress } = require("./user/getAddressList");
const { addAddress } = require("./user/addAddress");
const { editAddress } = require("./user/editAddress");
const { getOrders } = require("./user/getOrders");
const { search } = require("./non-user/search");
const { recent } = require("./non-user/recent");
const { topChef } = require("./non-user/topChef");
const { addressMiddleware } = require("../middleware/address");
const { emptyImageTempFolder } = require("../middleware/emptyImageTempFolder");
const { itemIdValidator } = require("../middleware/itemIdValidator");
const { tokenCheckMiddleware } = require("../middleware/tokenCheck");
const { uploader, uploadMiddleware } = require("../middleware/uploader");

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
  app.get("/get_orders", tokenCheckMiddleware, getOrders); // blame shreyas if any issues

  //routes related to admins
  app.post("/admin/signup", signupChefMiddleware, adminSignup);
  app.post(
    "/upload",
    adminTokenValidate,
    itemIdValidator,
    emptyImageTempFolder,
    uploader.single("image"),
    uploadMiddleware,
    singleImageUpload
  );
  app.post("/admin/login", amdminLogin);
  app.post("/admin/add-products", adminTokenValidate, addProduct);
  app.get("/admin/products", adminTokenValidate, getProducts);

  //routes related to normal non-users
  app.get("/search", search);
  app.get("/recent", recent);
  app.get("/top-chef", topChef);
};
// user related goes here
//routes related to admin activity
