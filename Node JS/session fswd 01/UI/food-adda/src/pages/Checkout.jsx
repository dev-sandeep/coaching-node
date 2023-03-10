import React, { useState } from "react";
import CartItem from "../components/CartItem";
import CardWithHeader from "../components/CardWithHeader";
import CustomButton from "../components/CustomButton";

function Checkout() {
  const dummyAddress = [
    {
      title: "Address 1",
      name: "Shreyas",
      address: "Mangalore, Karnataka, India",
    },
    {
      title: "Address 2",
      name: "Shreyas",
      address: "Bangalore, Karnataka, India",
    },
    {
      title: "Address 3",
      name: "Shreyas",
      address: "Udupi, Karnataka, India",
    },
  ];
  const dummyItemList = [
    {
      title: "Kaju Masala",
      price: 110,
      qty: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_lJmvmmXm6ZY7rw13cq6aZUOq0SzITX1Cg&usqp=CAU",
    },
    {
      title: "Keema Bharay Baingan",
      price: 120,
      qty: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2ZiV415XdfAanWSYyuuO0d0pS6oY8skVWQTYYRzntcpgAcXISs4k0ecgf3BV1dTB9OA&usqp=CAU",
    },
    {
      title: "Kobichi Bhaji ",
      price: 150,
      qty: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRSYByjQVa3jrpxTUTPxNDBj4BJRHugIGaA&usqp=CAU",
    },
  ];
  //dummy total
  const total = dummyItemList.map((item) => item.price);
  const totalPrice = total.reduce((acc, curr) => acc + curr);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState();
  //function on click of a address selection card
  const handleSelect = (address) => {
    setCurrentSelectedAddress(address);
  };

  const handleRemove = () => {
    // console.log("remove button click");
  };
  return (
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
                  {dummyAddress.map((address) => {
                    return (
                      <div key={address.title}>
                        <CardWithHeader
                          header={address.title}
                          title={address.name}
                          desc={address.address}
                          onClickFunction={handleSelect}
                          currentSelected={currentSelectedAddress}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mb-5 mt-3">
                  <CustomButton name="Cash on Delivery" />
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
                  {dummyItemList.map((item) => {
                    return (
                      <div key={item.title}>
                        <CartItem
                          itemName={item.title}
                          itemImg={item.img}
                          itemPrice={item.price}
                          itemQty={item.qty}
                          onClickFunction={handleRemove}
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
                    ${totalPrice}
                  </h3>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
