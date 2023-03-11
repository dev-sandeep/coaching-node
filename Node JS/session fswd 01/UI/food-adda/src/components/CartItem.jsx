import React, { useState } from "react";

function CartItem({
  itemName,
  itemImg,
  itemPrice,
  itemQty,
  onClickFunction = () => {},
}) {
  const [quant, setQuant] = useState(itemQty || 1);
  const handleClickAdd = () => {
    setQuant(quant + 1);
  };
  const handleClickRemove = () => {
    setQuant(quant - 1);
  };
  return (
    <div className="p-xl-4 p-1">
      <div className="row">
        {/* ===cart img=== */}
        <div className="col col-lg-4">
          <img
            src={itemImg}
            alt={itemName}
            height="130px"
            style={{ maxHeight: "130px", maxWidth: "100px" }}
          />
        </div>
        {/* ===item details=== */}
        <div className="col col-md-6">
          <div className="fs-5 fw-bold mb-3">
            <span>{itemName}</span>
          </div>
          <div className="row">
            <div className="col-11">
              Quantity:<span className="fs-5 fw-semibold mx-2"> {quant}</span>
            </div>
            <div className="col-11">
              <button
                className="border-0 bg-white mx-2"
                disabled={quant === 1 ? true : false}
                onClick={handleClickRemove}
              >
                -
              </button>
              <button
                className="border-0 bg-white mx-2"
                onClick={handleClickAdd}
              >
                +
              </button>
            </div>
          </div>
          <div className="fs-4 fw-bold mt-1">
            <span>${itemPrice}</span>
          </div>
        </div>
        <div className="col-sm-1 align-bottom d-flex">
          <button className="mt-auto border-0 bg-white">
            <span className="fw-bold" onClick={onClickFunction}>
              <u>Remove</u>
            </span>
          </button>
        </div>
      </div>
      <hr className="" />
    </div>
  );
}

export default CartItem;
