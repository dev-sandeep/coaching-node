import React from "react";
import CartItem from "../components/CartItem";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
//importing dummy item list
import { dummyItemList } from "../components/dummyData";

function Cart() {
  //getting a value array for total
  const total = dummyItemList.map((item) => item.price);
  //total for Showcasing total
  const totalPrice = total.reduce((acc, curr) => acc + curr);
  //handle Remove
  const handleRemove = () => {
    // console.log("remove button click");
  };
  return (
    <div className="container-fluid minH-90">
      <div className="row mt-2 mt-xl-4">
        {/* ===header for your cart page=== */}
        <div className="mx-auto col-md-10 mb-xl-5">
          <h2 className="ms-xl-5 ms-1 py-4 fw-bold">Your Cart</h2>
          <p className="ms-xl-5 ms-1">
            <span className="fs-5">Not Ready for checkout?</span>
            <span className="fs-4 d-block d-xl-inline">
              {" "}
              Continue Shopping!
            </span>
          </p>
        </div>
        <div className="row">
          {/* ===left side div=== */}
          <div className="col-md-8">
            {/* ===cart begins here=== */}
            <div className="justify-content-start">
              <div
                className="container col-md-8 overflow-auto justify-content-start"
                style={{ maxHeight: "30vh" }}
              >
                {dummyItemList.map((item) => {
                  return (
                    <div key={item.title}>
                      <CartItem
                        itemName={item.title}
                        itemPrice={item.price}
                        itemQty={item.qty}
                        itemImg={item.img}
                        onClickFunction={handleRemove}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* ===cart ends here=== */}
            {/* ===order information=== */}
            <div className="mt-5">
              <div className="mx-auto col-md-8 mb-xl-5">
                <h4 className="ms-xl-6 ms-1 py-4 fw-bold border-bottom border-2 border-dark">
                  Order Information
                </h4>
                {/* ===Order information accordion=== */}
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Return Policy</Accordion.Header>
                    <Accordion.Body>
                      This is our example return policy which is everything you
                      need to know about our returns
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Shipping Options</Accordion.Header>
                    <Accordion.Body>
                      Cash on Delivery is the only option that is available as
                      of now
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
          {/* === right side div=== */}
          <div className="container col-md-4">
            <div className="mx-auto col-md-7 mb-xl-5">
              <h4 className="ms-xl-6 ms-1 pb-4 fw-bold border-bottom border-2 border-dark">
                Order Summary
              </h4>
              {/* ===Order information accordion=== */}
              <div className="row ms-1 border-bottom border-2 border-dark">
                <div className="row mx-1">
                  <p className="col">Subtotal</p>
                  <p className="col text-end">${totalPrice}</p>
                </div>
                <div className="row mx-1 ">
                  <p className="col">Shipping</p>
                  <span className="col text-end">
                    Will be calculated in next step
                  </span>
                </div>
              </div>
              <div className="row mx-1 my-4">
                <h4 className="col">Total</h4>
                <h3 className="col text-end">${totalPrice}</h3>
              </div>
              <div className="ms-3 mb-5">
                <Link to="/checkout">
                  <CustomButton name="Continue to Checkout" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
