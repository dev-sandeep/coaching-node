import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./../actionTypes";

const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

const updateCart = (cartArray) => {
  return {
    type: UPDATE_CART,
    payload: cartArray,
  };
};

export { addToCart, removeFromCart, updateCart };
