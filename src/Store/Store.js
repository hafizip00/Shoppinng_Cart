import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/Product/ProductSlice";

const Store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});

export default Store;
