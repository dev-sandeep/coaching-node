/**
 * All the routes goes here
 */

const { signup } = require("./user/signup");
const { signupMiddleware } = require("./../middleware/signup");
const { login } = require("./user/login");
var bodyParser = require("body-parser");

exports.loadRoutes = (app)=>{
    app.use(bodyParser.json());

    // user related goes here
    app.post('/signup', signupMiddleware, signup);
    app.post('/login',login);
}
//routes related to home page - home page
//routes related to user activity - login, signup, checkout, order, address
//routes related to admin activity
