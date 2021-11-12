import { createStore } from 'redux';
import productReducer from "./reducers/productReducer";

let productStore = createStore(productReducer);

export default productStore