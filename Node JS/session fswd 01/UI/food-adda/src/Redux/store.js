import { createStore, combineReducers } from "redux";
import cartReducer from "./Reducers/cart";

const rootReducers = combineReducers({
  cart: cartReducer
});
const store = createStore(rootReducers);
export default store;
