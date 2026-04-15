import { configureStore } from "@reduxjs/toolkit";
import SignupReducer from "../Redux/SignupSlicer";
import LoginReducer from "../Redux/LoginSlicer"

export const mystore = configureStore({
  reducer: {
     signup: SignupReducer,
     login: LoginReducer
  },
});