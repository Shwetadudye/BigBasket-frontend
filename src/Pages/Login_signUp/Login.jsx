import React from "react";
import "../Login_signUp/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginUserThunk } from "../../Redux/LoginSlicer";

const Login = ({ open, onClose, openSignup }) => {
  if (!open) return null;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isLoading ,isError} = useSelector((store)=> store.login);
  
  const value = useSelector((store)=>store.login.isLoading);
  console.log(value);

  const[userValue, setUserValue] =React.useState({
    email: '',
    password: ''
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;

    setUserValue((prev)=>{
      return {
        ...prev,
        [name] : value,
      }
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault(),
    dispatch(loginUserThunk(userValue)).then((res)=>{
      if(res.type === loginSuccess){
        navigate('/')
      }
    })
  }

  if(isLoading){
    return <h1>Loading data</h1>
  }

  if (isError){
    return <h1>Something went wrong</h1>
  }
   return (
    <div className="overlay">
      <div className="modal">

        <span className="closeBtn" onClick={onClose}>×</span>

        <h2>Login / Sign up</h2>
        <p className="otpText">Using Email & Password</p>

      
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >

          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email Id"
              value={userValue.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={userValue.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">LOGIN</button>
        </form>
      

        <p style={{ marginTop: "10px", cursor: "pointer" }}>
          Don’t have an account?{" "}
          <span
            style={{ color: "orange" }}
            onClick={() => {
              onClose();
              openSignup();
            }}
          >
            Sign Up
          </span>
        </p>

        <p className="terms">
          By continuing, I accept Terms & Privacy Policy
        </p>

      </div>
    </div>
  );
};

export default Login;