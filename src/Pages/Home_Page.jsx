import React from 'react'
import "../CSS/Home.css";
import logo from "../Images/NeuPass.png";

const Home_Page = () => {
  return (
    <div className="mainContainer">
      <div className="box child1">
        eggs, meat <br /> and fish
      </div>

      <div className="box child2">
        <img src={logo} alt="NeuPass" />
        <span>neu</span>
        <span style={{ color: "#e9914e" }}>pass</span>
      </div>

      <div className="box child3">ayurveda</div>

      <div className="box child4">
        buy more <br /> save more
      </div>

      <div className="box child5">
        deals <br /> of the week
      </div>

      <div className="box child6">combo store</div>
    </div>
  )
}

export default Home_Page
