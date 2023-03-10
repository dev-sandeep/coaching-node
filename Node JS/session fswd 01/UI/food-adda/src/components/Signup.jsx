import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
// import axios from "axios";

export const Signup = (props) => {
  // State variables for the form
  const [pswd, setPswd] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");

  // Signup form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (pswd !== confirmPswd) {
      return;
    }
    // Get the form data
    const email = e.target.elements.registerMail.value;
    const userType = e.target.elements.group1.value;

    // Create a FormData object
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", pswd);
    formData.append("userType", userType);

    const data = Object.fromEntries(formData);
    console.log(data);
    // Send the data to the backend using axios
    // axios.post("http://localhost:5000/api/users/signup", data)
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

    // Close the modal and toast a success message
    toast.success("Signed up successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    props.onHide();
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <AiOutlineCloseCircle
            size={24}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
            onClick={props.onHide}
          />
          <h4>Sign Up</h4>
          {/* Sign up form goes here */}
          <div className="signup-container d-flex flex-column align-items-center">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              className="w-75 rounded"
              style={{ maxWidth: "300px" }}
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
                    required
                  />
                  <Form.Check
                    inline
                    label="Customer"
                    name="group1"
                    value={"customer"}
                    type="radio"
                    id="radio-2"
                  />
                </div>
              </div>
              <Form.Group className="mb-3" controlId="registerMail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              {/* Password not matching alert */}
              {pswd !== confirmPswd && confirmPswd !== "" ? (
                <div className="alert alert-danger" role="alert">
                  Passwords do not match!
                </div>
              ) : null}

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
              <Button
                type="submit"
                className="bg-dark w-100"
                disabled={pswd.length < 6 || confirmPswd.length < 6}
              >
                Register
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
