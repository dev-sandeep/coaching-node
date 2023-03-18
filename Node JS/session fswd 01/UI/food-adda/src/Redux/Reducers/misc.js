import { UPDATE_TOTAL, UPDATE_TOTAL_PRICE } from "./../actionTypes";

const INIT_STATE = {
  total: [0],
  totalPrice: 0,
};

const miscReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_TOTAL: {
      state.total = action.payload;
      return state;
    }
    case UPDATE_TOTAL_PRICE: {
      state.totalPrice = action.payload;
      return state;
    }

    default:
      return state;
  }
};

export default miscReducer;
