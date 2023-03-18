import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./../actionTypes";

const INIT_STATE = [];

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...state, { ...action.payload }];
    }
    case REMOVE_FROM_CART: {
      const tempState = [...state];
      tempState.splice(action.payload, 1);
      return [...tempState];
    }
    case UPDATE_CART: {
      return [...action.payload];
    }

    default:
      return state;
  }
};

export default cartReducer;
