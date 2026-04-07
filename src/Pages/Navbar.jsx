import React from "react";
import "../CSS/Navbar.css";
import logo from "../Images/BigBasket.png"; 
import CartIcon from "../Images/Cart.png"; 

const Navbar = () => {
  return (
    <div className="navbar">

      {/* TOP BAR */}
      <div className="topbar">
        <div className="logo">
          <img src={logo} alt="bigbasket" />
        </div>

        <div className="searchBox">
          <input type="text" placeholder="Search for Products..." />
        </div>

        <div className="delivery">
          ⚡ Delivery in 10 mins <br />
          <span>Select Location</span>
        </div>

        <button className="loginBtn">Login/ Sign Up</button>

        <div className="cart">
          <img src={CartIcon} alt="cart" />
        </div>
      </div>

      {/* BOTTOM MENU */}
      <div className="menu">
        <button className="categoryBtn">
          Shop by Category 
        </button>

        <div className="menuItems">
          <span>Exotic  Fruits & Veg...</span>
          <span>Tea</span>
          <span>Ghee</span>
          <span>Nandini</span>
          <span>Fresh Vegetables</span>
        </div>

        <div className="smartBasket">
          Smart Basket
        </div>
      </div>

    </div>
  );
};

export default Navbar;