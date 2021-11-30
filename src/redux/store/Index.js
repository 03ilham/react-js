import { createStore } from "redux";
import productReducer from "../reducers/ProductReducers";

//create store

const storre = createStore(productReducer);

export default storre;