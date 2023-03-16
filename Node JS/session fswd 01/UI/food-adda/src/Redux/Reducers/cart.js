import { ADD_TO_CART, REMOVE_FROM_CART } from "./../actionTypes";

const INIT_STATE = [];

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...state, { ...action.payload, quantity: 1 }];
    }

    default:
      return state;
  }
};

export default cartReducer;
