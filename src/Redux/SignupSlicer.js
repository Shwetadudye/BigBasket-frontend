import { createSlice } from "@reduxjs/toolkit";

const initialValue ={
  user : null
};

const SignupReducer = createSlice({
  name : 'signup',
  initialState: initialValue,
  reducers:{
    signIns:(state , actions) =>{
      state.user = actions.payload
    }
  }
})

export const {signIns} = SignupReducer.actions;
export default SignupReducer.reducer;

//Async thunk

export const signupThunk =(formData) => async (dispatch) =>{
  try{
    const res = await fetch("https://bigbasket-backend-1-8wdj.onrender.com/user/register",{
      method: "POST",
      body: JSON.stringify(formData),
      headers: {"Content-Type" :"application/json"}
    });

    const result = await res.json();
    console.log(result); // Api response
    dispatch(signIns(result));
    if(result.success){
      alert(result.message);
    }
  } catch (err){
    console.log(err)
  }
}