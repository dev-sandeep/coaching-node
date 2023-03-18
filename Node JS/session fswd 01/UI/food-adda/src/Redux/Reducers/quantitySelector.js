import { ADD_QUANTITY, REMOVE_QUANTITY } from "./../actionTypes";

const INIT_STATE = 1;

const quantityReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_QUANTITY: {
      return state + action.payload;
    }
    case REMOVE_QUANTITY: {
      return state - action.payload;
    }

    default:
      return state;
  }
};

export default quantityReducer;
