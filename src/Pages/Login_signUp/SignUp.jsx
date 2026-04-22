import React from "react";
import "../Login_signUp/Login.css";
import { useDispatch } from "react-redux";
import { signupThunk } from "../../Redux/SignupSlicer";

const SignUp = ({ open, onClose,openLogin }) => {
  if (!open) return null;

  const dispatchSignUp = useDispatch();

   const formData =[
    {
      type: 'text',
      name: 'userName',
      placeholder: 'Enter your name ',
      id: 'username',
      label: 'Username',
      required: true
    },
   {
      type: 'email',
      name: 'userEmail',
      placeholder: 'Enter your Email ',
      id: 'useremail',
      label: 'Email',
      required: true,
    },
    {
      type: 'password',
      name: 'userPassword',
      placeholder: 'Enter your Password ',
      id: 'userpassword',
      label: 'Password',
      required: true,
    },
    {
      type: 'tel',
      name: 'userPhone',
      placeholder: 'Enter your Phone ',
      id: 'userphone',
      label: 'Phone',
      required: true,
    }
   ];

   const [form , setForm] = React.useState(()=>{
    return formData.reduce((acc,curr)=>{
      acc[curr.name]= '';
      return acc;
   },{})
   })
   console.log(form);

   const handleSubmit = (e) =>{
    e.preventDefault()
    dispatchSignUp(signupThunk(form)) // this handle api +redux

   }

   const handleChange =(e) =>{
    const {name , value} = e.target;
    setForm((prev)=>{
      return{
        ...prev,
        [name] : value
      }
    })
   }

  return (
    <div className="overlay">
      <div className="modal">

        <span className="closeBtn" onClick={onClose}>×</span>

        <h2>Create Account</h2>
        <p className="otpText">Sign up to continue</p>

        <form onSubmit={handleSubmit}>
          {formData.map((el, i) => (
            <div key={i}>
              <label htmlFor={el.id}>{el.label}</label>
              <input
                type={el.type}
                name={el.name}
                id={el.id}
                placeholder={el.placeholder}
                value={form[el.name]}
                onChange={handleChange}
                required={el.required}
              />
            </div>
          ))}

          <button type="submit">Sign Up</button>
        </form>

        <p style={{ marginTop: "10px", cursor: "pointer" }}>
          Already have an account?{" "}
          <span
            style={{ color: "orange" }}
            onClick={() => navigate("/login")}
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