import React from "react";
import { Link } from "react-router-dom"; 
import { NavLink } from 'react-router-dom';


import "../CSS/Navbar.css";
import logo from "../Images/BigBasket.png"; 
import CartIcon from "../Images/Cart.png"; 
import Login from "../Pages/Login_signUp/Login";
import SignUp from "../Pages/Login_signUp/SignUp";
import Cart from "../Pages/Navbar_Pages/Cart";

const Navbar = () => {


  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);

  return (
    <div className="navbar">

      
      <div className="topbar">
        <div className="logo">
          <NavLink to='/'> <img src={logo} alt="bigbasket" /></NavLink>
        </div>

        <div className="searchBox">
          <input type="text" placeholder="Search for Products..." />
        </div>

        <div className="delivery">
          ⚡ Delivery in 10 mins <br />
          <span>Select Location</span>
        </div>

        <button className="loginBtn" onClick={() => setOpenLogin(true)}>Login</button>


      <Login
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        openSignup={() => {
          setOpenLogin(false);   
          setOpenSignup(true);   
        }}
      />

      <SignUp
        open={openSignup}
        onClose={() => setOpenSignup(false)}
        openLogin={() => {
          setOpenSignup(false);  
          setOpenLogin(true);   
        }}
      />
 
      <NavLink to='/Cart'>
        <div className="cart">
          <img src={CartIcon} alt="cart" />
        </div>
      </NavLink>

    </div>

      
      <div className="menu">
        <button className="categoryBtn">
          Shop by Category 
        </button>

        <div className="menuItems">
          <NavLink to="/Exotic_Fruits_Veg">Exotic Fruits & Veg...</NavLink>
          <NavLink to="/Tea">Tea</NavLink>
          <NavLink to="/Ghee">Ghee</NavLink>
          <NavLink to="/Milk">Milk</NavLink>
          <NavLink to="/Fresh_Vegetables">Fresh Vegetables</NavLink>
        </div>

        <div className="smartBasket">
          Smart Basket
        </div>
      </div>

    </div>
  );
};

export default Navbar;