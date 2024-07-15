import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  user: "",
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const { user, products } = action.payload;
      state.user = user;
      state.products = products;
    },
  },
});

export const { setCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const getCarts = (state: RootState) => state.cart;
