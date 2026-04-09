import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Popular Categories</h3>
          <ul>
            <li>Sunflower Oils</li>
            <li>Milk</li>
            <li>Organic F&V</li>
            <li>Floor Cleaners</li>
            <li>Frozen Veg Food</li>
            <li>Wheat Atta</li>
            <li>Health Drinks</li>
            <li>Namkeen</li>
            <li>Other Juices</li>
            <li>Diapers & Wipes</li>
            <li>Ghee</li>
            <li>Flakes</li>
            <li>Eggs</li>
            <li>Leafy Vegetables</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Popular Brands</h3>
          <ul>
            <li>Amul</li>
            <li>Red Bull</li>
            <li>Yummiez</li>
            <li>Britannia</li>
            <li>Haldiram's</li>
            <li>Nescafe</li>
            <li>Elite Cake</li>
            <li>Yera</li>
            <li>Wow! Momo</li>
            <li>Ferrero</li>
            <li>MTR</li>
            <li>Pediasure</li>
            <li>Yakult</li>
            <li>Fortune</li>
            <li>Lay's</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025-2027 Supermarket Grocery Supplies Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;