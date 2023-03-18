import { createStore, combineReducers } from "redux";
import cartReducer from "./Reducers/cart";
import quantityReducer from "./Reducers/quantitySelector";
import miscReducer from "./Reducers/misc";

const rootReducers = combineReducers({
  cart: cartReducer,
  quantity: quantityReducer,
  misc: miscReducer,
});
const store = createStore(rootReducers);
export default store;
