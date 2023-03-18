import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCart } from "../Redux/Actions/cart";
import { updateTotal, updateTotalPrice } from "../Redux/Actions/misc";

function Cart() {
  //getting values from redux store
  const cart = useSelector((state) => state.cart);
  const misc = useSelector((state) => state.misc);
  const [total, setTotal] = useState(misc.totalPrice);

  const dispatch = useDispatch();

  let totalPrice;
  //getting a value array for total
  if (cart[0] !== undefined) {
    let tempTotal = cart.map((item) => item.price * item.qty);
    dispatch(updateTotal(tempTotal));
    //total for Showcasing total
    if (tempTotal !== undefined) {
      totalPrice = misc.total.reduce((acc, curr) => acc + curr);
      dispatch(updateTotalPrice(totalPrice));
    }
  }
  //handle Remove
  const handleRemove = (i) => {
    dispatch(removeFromCart(i));
    const tempTotal = cart.map((item) => item.price * item.qty);
    dispatch(updateTotal(tempTotal));
    const tempTotalPrice = tempTotal.reduce((acc, curr) => acc + curr);
    dispatch(updateTotalPrice(tempTotalPrice));
    console.log(misc.totalPrice);
    setTotal(misc.totalPrice);
  };

  const totalHandler = (total, i, qty) => {
    const tempTotal = misc.total;
    tempTotal[i] = total;
    dispatch(updateTotal(tempTotal));
    const tempTotal2 = misc.total;
    const tempTotalPrice = tempTotal2.reduce((acc, curr) => acc + curr);
    dispatch(updateTotalPrice(tempTotalPrice));
    setTotal(misc.totalPrice);
    const tempCart = cart;
    tempCart[i].qty = qty;
    dispatch(updateCart(tempCart));
  };

  useEffect(() => {
    setTotal(misc.totalPrice);
    console.log(cart);
  }, [cart]);

  return (
    <div>
      {cart[0] !== undefined ? (
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
                    {cart.map((item, i) => {
                      return (
                        <div key={i}>
                          <CartItem
                            itemName={item.name}
                            itemPrice={item.price}
                            itemQty={item.qty}
                            itemImg={item.img}
                            itemIndex={i}
                            onClickFunction={() => handleRemove(i)}
                            onChange={totalHandler}
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
                          This is our example return policy which is everything
                          you need to know about our returns
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Shipping Options</Accordion.Header>
                        <Accordion.Body>
                          Cash on Delivery is the only option that is available
                          as of now
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
                      <p className="col text-end">${total}</p>
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
                    <h3 className="col text-end">${total}</h3>
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
      ) : (
        <div className="minH-90">Cart is Empty</div>
      )}
    </div>
  );
}

export default Cart;
