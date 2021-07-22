import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import { reducer as reducerForm } from "redux-form";

export default combineReducers({
  products: productReducer,
  form: reducerForm,
});
