import React, { useState } from "react";

export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className="d-flex fs-4 align-items-center mt-4 border border-dark px-1 py-2"
      style={{ width: "fit-content" }}
    >
      <button
        className="bg-transparent border-0"
        disabled={quantity === 1 ? true : false}
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </button>
      <span className="px-5">{quantity}</span>
      <button
        className="bg-transparent border-0"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
};
