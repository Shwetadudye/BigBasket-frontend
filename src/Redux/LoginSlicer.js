import { createSlice } from "@reduxjs/toolkit";
import { loadData ,saveData } from "../Data/LocalStorage";

const token_key = 'token';
const token = loadData(token_key);

const initialValue ={
    isAuth: token ? true : false,
    token: token || '',
    isLoading: false,
    isError: false,
};

const LoginReducer = createSlice({
  name : 'login',
  initialState: initialValue,
  reducers:{
    loginRequest:(state) =>{
      state.isLoading = true;
      state.isError = false;
    },
    loginSuccess: (state, action) =>{
        state.isAuth = true,
        state.isLoading = false,
        state.token = action.payload.token,

        saveData(token_key,action.payload.token);
    },
    loginFailure: (state) =>{
        state.isLoading = false,
        state.isError = true,
        state.isAuth = false,
        state.token = ''
    },
    logout:(state) =>{
        state.isAuth = false;
        state.token = '',
        saveData(token_key,null)
    }
  }
})

export const {loginRequest,loginSuccess,loginFailure,logout} = LoginReducer.actions;
export default LoginReducer.reducer;





export const loginUserThunk =(userData) => async (dispatch) =>{
  try{
    const res = await fetch("https://bigbasket-backend-1-8wdj.onrender.com/user/login",{
      method: "POST",   
      body: JSON.stringify(userData),
      headers: {"Content-Type" :"application/json"}
    });

    const result = await res.json();
    console.log(result); // Api response
    dispatch(loginSuccess(result));
    if(result.success){
      alert(result.message);
    }
  } catch (err){
    console.log(err)
  }
}