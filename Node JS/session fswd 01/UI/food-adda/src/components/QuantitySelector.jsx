import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, removeQuantity } from "../Redux/Actions/quantitySelector";

export const QuantitySelector = () => {
  // const [quantity, setQuantity] = useState(1);
  const quantity = useSelector((state) => state.quantity);
  const dispatch = useDispatch();
  function handleAdd() {
    dispatch(addQuantity(1));
  }
  function handleRemove() {
    dispatch(removeQuantity(1));
  }

  return (
    <div
      className="d-flex fs-4 align-items-center mt-4 border border-dark px-1 py-2"
      style={{ width: "fit-content" }}
    >
      <button
        className="bg-transparent border-0"
        disabled={quantity === 1 ? true : false}
        onClick={handleRemove}
      >
        -
      </button>
      <span className="px-5">{quantity}</span>
      <button className="bg-transparent border-0" onClick={handleAdd}>
        +
      </button>
    </div>
  );
};
