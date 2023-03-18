import { UPDATE_TOTAL, UPDATE_TOTAL_PRICE } from "./../actionTypes";

const updateTotal = (array) => {
  return {
    type: UPDATE_TOTAL,
    payload: array,
  };
};

const updateTotalPrice = (number) => {
  return {
    type: UPDATE_TOTAL_PRICE,
    payload: number,
  };
};

export { updateTotal, updateTotalPrice };
