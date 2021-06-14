import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
// import { selectedProductReducer } from "./selectedProductReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    selectedProductReducer: selectedProductReducer,
})
