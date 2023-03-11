/**
 * All the routes goes here
 */

const { signup } = require("./user/signup");
const { login } = require("./user/login");

exports.loadRoutes = (app)=>{
    // basic validations
    if(!app){
        throw new Error("App is not passed in router");
    }

    // user related goes here
    app.post('/signup',signup);
    app.post('/login',login);
}
//routes related to home page - home page
//routes related to user activity - login, signup, checkout, order, address
//routes related to admin activity
