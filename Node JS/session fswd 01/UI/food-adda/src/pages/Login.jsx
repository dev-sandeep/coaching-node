import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toastError, toastSuccess } from "./../Utils/toast";
import { postCall } from "./../Utils/api";
import env_vars from "./../Utils/constants";
import {setSession} from "./../Utils/session";
import { useDispatch, useSelector } from "react-redux";
import { logInAction } from "../Redux/Actions/user";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const session = useSelector((state) => state.user);
  // State variables
  const [userType, setUserType] = useState(1);//1 - Customer, 2 - Admin
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(()=>{
    if(session.type === 1){
      navigate("/");
    } else if(session.type === 2){
      navigate("/yourmenu");
    }
  },[session])

  // Login handler function
  const loginHandler = (e) => {
    e.preventDefault();

    const email = e.target.elements.formBasicEmail.value;
    const password = e.target.elements.formBasicPassword.value;
    const role = e.target.elements.group1.value;


    postCall({
      header: {},
      body: {
        email,
        password
      },
      url: env_vars.base_url + (userType === 1 ? env_vars.apis.login : env_vars.apis.admin_login)
    }).then((resp) => {
      const token = resp.data?.data?.token;
      setSession({
        token,
        type: userType
      });

      dispatch(logInAction({
        token,
        type: userType
      }));

      toastSuccess("loggedin successful");
    }, () => {
      toastError("login fail");
    })
  }

  return (
    <div id="login-page" className="px-2 px-lg-0">
      <div className="login-container d-flex flex-column align-items-center py-4 px-2 rounded shadow-lg">
        <img
          src="https://foodadda.s3.ap-south-1.amazonaws.com/logo-login.png"
          className="w-75 rounded"
          alt=""
        />
        <Form className="mt-4 w-100" onSubmit={loginHandler}>
          {/* A react bootstrap switch to choose between Chef or Customer */}
          <div className="d-flex justify-content-between mb-3">
            <Form.Label className="h5">Login as:</Form.Label>
            <div>
              <Form.Check
                inline
                label="Chef"
                name="group1"
                value={"chef"}
                type="radio"
                id="inline-radio-1"
                required
                onChange={() => setUserType(2)}
                checked={userType === 2}
              />
              <Form.Check
                inline
                label="Customer"
                name="group1"
                value={"customer"}
                type="radio"
                id="inline-radio-2"
                onChange={() => setUserType(1)}
                checked={userType === 1}
              />
            </div>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <p
            as={Link}
            to="/"
            className="text-end text-decoration-underline text-dark mb-0"
          >
            Forgot Password?
          </p>
          <br />
          <Button type="submit" className="bg-dark w-100">
            Login
          </Button>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link
              className="text-decoration-underline text-dark"
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};
