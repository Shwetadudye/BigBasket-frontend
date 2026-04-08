import React from "react";
import "../Login_signUp/Login.css";

const Login = ({ open, onClose, openSignup }) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modal">

       
        <span className="closeBtn" onClick={onClose}>×</span>

        <h2>Login / Sign up</h2>
        <p className="otpText">Using UserName & Password</p>

        <input
          type="text"
          placeholder="Enter Phone number / Email Id"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button>LOGIN</button>

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