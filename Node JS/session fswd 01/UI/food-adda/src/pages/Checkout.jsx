import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CardWithHeader from "../components/CardWithHeader";
import CustomButton from "../components/CustomButton";
//importing dummy values for display
import { updateTotal, updateTotalPrice } from "../Redux/Actions/misc";
import { removeFromCart, updateCart } from "../Redux/Actions/cart";
import { toastError, toastSuccess } from "../Utils/toast";
import { getCall, postCall } from "../Utils/api";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Checkout() {
  //session token
  const sessionToken = useSelector((state) => state.user);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState();
  const [addressList, setAddressList] = useState();
  const [currentAddressID, setCurrentAddressID] = useState(1);
  //function on click of a address selection card
  const handleSelect = (address, id) => {
    setCurrentSelectedAddress(address);
    setCurrentAddressID(id);
  };

  const addressReq = async () => {
    // const response = await axios.get("http://127.0.0.1:5002/address", {
    //   headers: { token: sessionToken.token },
    // });
    getCall({
      headers: {
        token: sessionToken.token,
      },
      body: {},
      url: "http://127.0.0.1:5002/address",
    }).then((resp) => {
      setAddressList(resp.data.data);
    });
  };

  const orderCreateReq = async () => {
    const itemsArray =
      cart &&
      cart.map((item) => {
        return { itemId: item.id, qty: item.qty };
      });
    postCall({
      headers: { token: sessionToken.token },
      body: { items: itemsArray, addressId: currentAddressID },
      url: "http://127.0.0.1:5002/order",
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        toastSuccess("Order Created!");
      } else {
        toastError("There was an error creating this order!");
      }
    });
  };

  const cart = useSelector((state) => state.cart);
  const misc = useSelector((state) => state.misc);
  const [total, setTotal] = useState(misc.totalPrice);

  const dispatch = useDispatch();

  //getting a value array for total
  if (cart[0] !== undefined) {
    let tempTotal = cart.map((item) => item.price * item.qty);
    dispatch(updateTotal(tempTotal));
    //total for Showcasing total
    if (tempTotal !== undefined) {
      let totalPrice = misc.total.reduce((acc, curr) => acc + curr);
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
    addressReq();
  }, [cart, total]);

  if (addressList === undefined) {
    return (
      <div className="minH-90 d-flex align-items-center justify-content-center">
        No Address Found, Please go to address page and Add atleast 1 address to
        continue...
        <Card className="p-2 bg-dark text-white" as={Link} to={"/address"}>
          Click Here
        </Card>
      </div>
    );
  }
  return (
    <div>
      {cart !== undefined ? (
        <div className="minH-90">
          {" "}
          <div className="container-fluid minH-90">
            <div className="row mt-2 mt-xl-4">
              {/* ===header for your cart page=== */}
              <div className="mx-auto col-md-10 mb-xl-3">
                <h2 className="ms-xl-5 ms-1 py-4 fw-bold fs-1">Checkout</h2>
              </div>
              <div className="row">
                {/* ===left side div=== */}
                <div className="container col-md-5">
                  <div className="mx-auto col-md-7 mb-xl-5">
                    <h4 className="ms-xl-6 ms-1 pb-4 fw-bold border-bottom border-2 border-dark fs-3">
                      Select Address
                    </h4>
                    {/* ===Address selection card=== */}
                    <div
                      className="border-bottom border-2 border-dark overflow-auto"
                      style={{ height: "40vh" }}
                    >
                      {addressList.map((address, i) => {
                        return (
                          <div key={i}>
                            <CardWithHeader
                              header={`Address - ${i + 1}`}
                              title={address.city}
                              desc={`${address.line1}, ${address.line2}, ${address.city}, ${address.state}`}
                              itemID={address.id}
                              onClickFunction={handleSelect}
                              currentSelected={currentSelectedAddress}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="mb-5 mt-3">
                      <CustomButton
                        name="Cash on Delivery"
                        OnClickFunction={orderCreateReq}
                      />
                    </div>
                  </div>
                </div>
                {/* === right side div=== */}
                <div className="col-md-6">
                  {/* ===cart begins here=== */}
                  <div className="justify-content-start">
                    <div
                      className="container col-md-8 overflow-auto justify-content-start"
                      style={{ maxHeight: "40vh" }}
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
                  {/* ===Total=== */}
                  <div className="mt-5">
                    <div className="mx-auto col-md-8 mb-xl-5 row border-top border-2 border-dark">
                      <h4 className="ms-xl-6 ms-1 py-4 fw-bold  col">Total:</h4>
                      <h3 className="ms-xl-6 ms-1 py-4 fw-bold  col text-end">
                        ${total}
                      </h3>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div> Cart Empty...</div>
      )}
    </div>
  );
}

export default Checkout;
