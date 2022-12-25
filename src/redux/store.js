import { createStore } from "redux";
import { productReducer } from './reducer/productReducer';

export const store = createStore(productReducer);