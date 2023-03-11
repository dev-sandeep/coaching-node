import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Signup } from "../components/Signup";

export const Login = () => {
  // State variables
  const [modalShow, setModalShow] = useState(false);

  // Login handler function
  const loginHandler = (e) => {
    e.preventDefault();

    const email = e.target.elements.formBasicEmail.value;
    const password = e.target.elements.formBasicPassword.value;
    const role = e.target.elements.group1.value;
    console.log(email, password, role);
    // Toast success message
    toast.success("Login Successful", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div id="login-page" className="px-2 px-lg-0">
      <div className="login-container d-flex flex-column align-items-center py-4 px-2 rounded shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
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
              />
              <Form.Check
                inline
                label="Customer"
                name="group1"
                value={"customer"}
                type="radio"
                id="inline-radio-2"
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
            <span
              className="text-decoration-underline text-dark"
              style={{ cursor: "pointer" }}
              onClick={() => setModalShow(true)}
            >
              Sign Up
            </span>
          </p>
        </Form>
      </div>
      <Signup show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};
