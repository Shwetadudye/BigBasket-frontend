import React from 'react';
import axios from 'axios';

import '../CSS/Home.css';
import logo from '../Images/NeuPass.png';
import { NavLink } from 'react-router-dom';
import Product from './Product';

const Home_Page = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://bigbasket-backend-1-8wdj.onrender.com/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="mainContainerHome">
        <NavLink to="/Eggs_Meat" className="nav-box">
          <div className="box child1">
            eggs, meat <br /> and fish
          </div>
        </NavLink>

        <NavLink to="/" className="nav-box">
          <div className="box child2">
            <img src={logo} alt="NeuPass" />
            <span>neu</span>
            <span style={{ color: '#e9914e' }}>pass</span>
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

      <Product title="My Smart Basket" products={products} />
      <Product title="Best Seller" products={products} />
    </>
  );
};

export default Home_Page;
