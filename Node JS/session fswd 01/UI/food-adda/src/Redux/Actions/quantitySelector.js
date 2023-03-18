import { ADD_QUANTITY, REMOVE_QUANTITY } from "./../actionTypes";

const addQuantity = (quantity) => {
  return {
    type: ADD_QUANTITY,
    payload: quantity,
  };
};

const removeQuantity = (quantity) => {
  return {
    type: REMOVE_QUANTITY,
    payload: quantity,
  };
};

export { addQuantity, removeQuantity };
