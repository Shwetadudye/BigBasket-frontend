import React from "react";
import "../Login_signUp/Login.css";

const SignUp = ({ open, onClose,openLogin }) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modal">

        {/* ❌ Close Button */}
        <span className="closeBtn" onClick={onClose}>×</span>

        <h2>Create Account</h2>
        <p className="otpText">Sign up to continue</p>

        <input
          type="text"
          placeholder="Enter Full Name"
        />

        <input
          type="email"
          placeholder="Enter Email Id"
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button>Sign Up</button>

        <p style={{ marginTop: "10px", cursor: "pointer" }}>
          Already have an account? {" "}
          <span
            style={{ color: "orange" }}
            onClick={() => {      
              openLogin();    
            }}
          >
            Login
          </span>
        </p>
        <p className="terms">
          By signing up, you agree to Terms & Privacy Policy
        </p>

      </div>
    </div>
  );
};

export default SignUp;


