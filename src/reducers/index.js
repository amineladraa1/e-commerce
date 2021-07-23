import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import { reducer as reducerForm } from "redux-form";
import authReducer from "./authReducer";

export default combineReducers({
  products: productReducer,
  form: reducerForm,
  user: authReducer,
});
