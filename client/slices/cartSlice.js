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
      const removeItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (removeItem >= 0) {
        state.items.splice(removeItem, 1);
      }
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
  state.cart.items.filter((item) => item.id === id);

export const selectedCartItemsPrice = (state) =>
  state.cart.items.reduce((total, item) => (total += item.price), 0);

export default cartSlice.reducer;
