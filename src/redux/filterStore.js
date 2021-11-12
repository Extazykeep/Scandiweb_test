import { createStore } from 'redux';
import filterReducer from "./reducers/filterReducer";

let filterStore = createStore(filterReducer);

export default filterStore