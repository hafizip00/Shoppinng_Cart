import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "Products",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      console.log(action.payload);
      return state.filter((p) => p.id !== action.payload);
    },
  },
});

export const { add, remove } = ProductSlice.actions;
export default ProductSlice.reducer;
