
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.cart.find((el) => el._id === item._id);

      if (exist) {
        exist.qty += 1;
      } else {
        state.cart.push({ ...item, qty: 1 });
      }
    },

    increaseQty: (state, action) => {
      const item = state.cart.find((el) => el._id === action.payload);
      if (item) item.qty += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.cart.find((el) => el._id === action.payload);

      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        state.cart = state.cart.filter((el) => el._id !== action.payload);
      }
    },

    // ✅ ADD THIS
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (el) => el._id !== action.payload
      );
    }

  }
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart   
} = cartSlice.actions;

export default cartSlice.reducer;