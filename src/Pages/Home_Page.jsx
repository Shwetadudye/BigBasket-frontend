import React from 'react'
import "../CSS/Home.css";
import logo from "../Images/NeuPass.png";
import { NavLink } from 'react-router-dom';

const Home_Page = () => {
  return (
    <div className="mainContainer">

      <NavLink to="/Eggs_Meat" className="nav-box">
        <div className="box child1">
          eggs, meat <br /> and fish
        </div>
      </NavLink>

      <NavLink to="/" className="nav-box">
        <div className="box child2">
          <img src={logo} alt="NeuPass" />
          <span>neu</span>
          <span style={{ color: "#e9914e" }}>pass</span>
        </div>
      </NavLink>

      <NavLink to="/Ayurveda" className="nav-box">
        <div className="box child3">ayurveda</div>
      </NavLink>

      <NavLink to="/Buy_and_Save" className="nav-box">
        <div className="box child4">
          buy more <br /> save more
        </div>
      </NavLink>

      <NavLink to="/Deals_of_Week" className="nav-box">
        <div className="box child5">
          deals <br /> of the week
        </div>
      </NavLink>

      <NavLink to="/Combo_Store" className="nav-box">
        <div className="box child6">combo store</div>
      </NavLink>

    </div>
  )
}

export default Home_Page