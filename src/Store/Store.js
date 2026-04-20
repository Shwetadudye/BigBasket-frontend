import { configureStore } from "@reduxjs/toolkit";
import SignupReducer from "../Redux/SignupSlicer";
import LoginReducer from "../Redux/LoginSlicer";
import cartReducer from "../Redux/CartSlicer"

export const mystore = configureStore({
  reducer: {
     signup: SignupReducer,
     login: LoginReducer,
     cart: cartReducer
  },
});