import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeToCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, emptyCart } = cartSlice.actions;

export const selectedCartItems = (state) => state.cart.items;

export const selectedCartItemsById = (state, id) =>
  state.filter((item) => item.id === id);

export default cartSlice.reducer;
