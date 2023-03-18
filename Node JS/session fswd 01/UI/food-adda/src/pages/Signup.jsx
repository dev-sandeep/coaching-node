import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { postCall } from "./../Utils/api";
import env_vars from "./../Utils/constants";
import { toastError, toastSuccess } from "./../Utils/toast";
import { useNavigate } from "react-router-dom";


export const Signup = (props) => {
  // State variables for the form
  const [pswd, setPswd] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");
  const [userType, setUserType] = useState(1);//1 - Customer, 2 - Admin
  const navigate = useNavigate();

  const handleUserTypeSelector = (type) => {
    setUserType(type);
  }

  // Signup form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (pswd !== confirmPswd) {
      toast.error("Passwords do not match!");
      return;
    }
    // Get the form data
    const name = e.target.elements.name?.value;
    const email = e.target.elements.registerMail.value;
    const userType = e.target.elements.group1.value;
    const mobile = e.target.elements.mobile?.value;
    const desc = e.target.elements.description?.value; 

    /**
     * making the API call
     */
    if (userType === 2) {
      postCall({
        header: {},
        body: {
          name, email, mobile, desc, password: confirmPswd, dp_url: env_vars.sample.user, aid: "-1"
        },
        url: env_vars.base_url + env_vars.apis.admin_signup
      }).then(() => {
        toastSuccess("Signed up successfully");
        navigate("/login");
      }, () => {
        toastError("Error occurred");
      })
    } else {
      postCall({
        header: {},
        body: {
          name, email, phone: mobile, password: confirmPswd
        },
        url: env_vars.base_url + env_vars.apis.user_signup
      }).then(() => {
        toastSuccess("Signed up successfully");
        navigate("/login");
      }, () => {
        toastError("Error occurred");
      })
    }
  };

  return (
    <div id="signup-page" className="px-2 px-lg-0">
      <div className="login-container d-flex flex-column align-items-center py-4 px-2 rounded shadow-lg">
        {/* Sign up form goes here */}
        <div className="signup-container d-flex flex-column align-items-center">
          <img
            src="https://foodadda.s3.ap-south-1.amazonaws.com/logo-login.png"
            className="w-75 rounded"
            alt=""
          />
          <Form className="mt-4 w-100" onSubmit={handleSubmit}>
            {/* A react bootstrap switch to choose between Chef or Customer */}
            <div className="d-flex justify-content-between mb-3">
              <Form.Label className="h5">Register as:</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Chef"
                  name="group1"
                  value={"chef"}
                  type="radio"
                  id="radio-1"
                  onChange={() => handleUserTypeSelector(2)}
                  checked={userType === 2}
                />
                <Form.Check
                  inline
                  label="Customer"
                  name="group1"
                  checked={userType === 1}
                  onChange={() => handleUserTypeSelector(1)}
                  value={"customer"}
                  type="radio"
                  id="radio-2"
                />
              </div>
            </div>

             <Form.Group className="mb-3" controlId="name">
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerMail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            {userType === 2 ? <>
              <Form.Group className="mb-3" controlId="description">
                <Form.Control as="textarea" placeholder="Write something about you" rows={3} />
              </Form.Group>
            </> : <></>}

            <Form.Group className="mb-3" controlId="mobile">
                <Form.Control type="text" placeholder="Enter your mobile" />
              </Form.Group>

            <Form.Group className="mb-3" controlId="registerPassword">
              <Form.Control
                type="password"
                placeholder="Password (min 6 characters)"
                onChange={(e) => {
                  setPswd(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setConfirmPswd(e.target.value);
                }}
              />
            </Form.Group>
            <Button type="submit" className="bg-dark w-100">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
